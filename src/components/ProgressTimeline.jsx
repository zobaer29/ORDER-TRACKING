import React, { useState } from 'react';
import { Check, AlertTriangle, ChevronDown, ChevronUp, MapPin, FileText, Package, Truck, CheckCircle2, Clock } from 'lucide-react';

export default function ProgressTimeline({ order }) {
  const [showFullLogs, setShowFullLogs] = useState(false);
  const timeline = order.timeline || [];

  // Canonical 4-Stage Milestone Stepper Mapping
  const macroStages = [
    { key: 'processing', label: 'Processing', icon: Package },
    { key: 'shipped', label: 'Shipped', icon: Truck },
    { key: 'out_for_delivery', label: 'Out for Delivery', icon: Clock },
    { key: 'delivered', label: 'Delivered', icon: CheckCircle2 },
  ];

  const getStageStatus = (stageKey) => {
    const state = order.stateType;
    if (state === 'delivered_not_received') return 'completed';
    if (state === 'tracking_not_available') return stageKey === 'processing' ? 'active' : 'upcoming';
    if (state === 'delayed') return stageKey === 'shipped' ? 'delayed' : stageKey === 'processing' ? 'completed' : 'upcoming';
    if (state === 'out_for_delivery') {
      if (stageKey === 'processing' || stageKey === 'shipped') return 'completed';
      if (stageKey === 'out_for_delivery') return 'active';
      return 'upcoming';
    }
    return 'upcoming';
  };

  return (
    <div className="mx-4 my-3 p-4 rounded-3xl bg-slate-900 border border-slate-800 shadow-lg">
      {/* High-Level 4-Stage Milestone Stepper */}
      <div className="mb-5 pb-4 border-b border-slate-800">
        <div className="flex items-center justify-between relative">
          {/* Connecting Track Line */}
          <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-slate-800 -translate-y-1/2 -z-0" />
          {macroStages.map((stage) => {
            const status = getStageStatus(stage.key);
            const isComp = status === 'completed';
            const isActive = status === 'active';
            const isDel = status === 'delayed';
            const Icon = stage.icon;
            return (
              <div key={stage.key} className="relative z-10 flex flex-col items-center gap-1 bg-slate-900 px-1">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border transition ${
                  isComp ? 'bg-blue-600 border-blue-400 text-white' :
                  isActive ? 'bg-blue-500/20 border-blue-400 text-blue-300 ring-4 ring-blue-500/20 animate-pulse' :
                  isDel ? 'bg-amber-500/20 border-amber-400 text-amber-300' :
                  'bg-slate-950 border-slate-800 text-slate-600'
                }`}>
                  {isComp ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : <Icon className="w-3.5 h-3.5" />}
                </div>
                <span className={`text-[10px] font-medium ${isComp || isActive ? 'text-slate-200' : isDel ? 'text-amber-400' : 'text-slate-500'}`}>
                  {stage.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
          <FileText className="w-3.5 h-3.5 text-blue-400" />
          <span>Delivery Progress Timeline</span>
        </h3>
        <span className="text-[10px] text-slate-400 font-mono">
          {timeline.filter(t => t.completed).length} / {timeline.length} Steps
        </span>
      </div>

      {/* Visual Timeline Tree */}
      <div className="relative pl-3">
        {timeline.map((item, index) => {
          const isLast = index === timeline.length - 1;
          const isWarning = item.isWarning;

          return (
            <div key={item.id || index} className="relative pb-5 last:pb-0 flex items-start gap-3">
              {/* Vertical connecting line */}
              {!isLast && (
                <div
                  className={`absolute left-[11px] top-[22px] bottom-0 w-0.5 ${
                    item.completed ? 'bg-blue-500' : 'bg-slate-800'
                  }`}
                />
              )}

              {/* Node Icon Circle */}
              <div
                className={`relative z-10 w-6 h-6 rounded-full flex items-center justify-center shrink-0 border transition-all ${
                  isWarning
                    ? 'bg-amber-500/20 border-amber-500 text-amber-400 ring-4 ring-amber-500/10'
                    : item.active
                    ? 'bg-blue-600 border-blue-400 text-white ring-4 ring-blue-500/20 animate-pulse'
                    : item.completed
                    ? 'bg-blue-500 border-blue-400 text-white'
                    : 'bg-slate-800 border-slate-700 text-slate-500'
                }`}
              >
                {isWarning ? (
                  <AlertTriangle className="w-3.5 h-3.5" />
                ) : item.completed ? (
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                ) : (
                  <div className="w-2 h-2 rounded-full bg-slate-600" />
                )}
              </div>

              {/* Step Content Info */}
              <div className="flex-1 min-w-0 pt-0.5">
                <div className="flex items-baseline justify-between gap-2">
                  <h4 className={`text-xs font-semibold leading-tight ${
                    isWarning ? 'text-amber-400' : item.active ? 'text-blue-400' : item.completed ? 'text-slate-100' : 'text-slate-400'
                  }`}>
                    {item.status}
                  </h4>
                  <span className="text-[10px] text-slate-400 shrink-0 font-mono">{item.timestamp}</span>
                </div>

                <div className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3 h-3 text-slate-500 shrink-0" />
                  <span className="truncate">{item.location}</span>
                </div>

                {item.description && (
                  <p className="text-[11px] text-slate-400 mt-1 leading-snug bg-slate-950/40 p-2 rounded-xl border border-slate-800/60">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Expand/Collapse Full Logs Toggle */}
      <button
        onClick={() => setShowFullLogs(!showFullLogs)}
        className="w-full mt-3 pt-2.5 border-t border-slate-800 text-slate-400 hover:text-slate-200 text-[11px] font-medium flex items-center justify-center gap-1 transition"
      >
        <span>{showFullLogs ? 'Hide Detailed Carrier Logs' : 'View Full Facility Scan History'}</span>
        {showFullLogs ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
      </button>

      {/* Full Facility Scan History Drawer Content */}
      {showFullLogs && (
        <div className="mt-3 p-3 rounded-2xl bg-slate-950 border border-slate-800 text-[11px] text-slate-400 space-y-2">
          <div className="font-mono text-[10px] text-slate-400 pb-1 border-b border-slate-800 flex justify-between">
            <span>FACILITY SCAN LOG</span>
            <span>CARRIER: {order.carrier?.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-300">Scan ID #88921-A</span>
            <span className="font-mono text-slate-400">08:30 AM (In-Gate)</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-300">Weight Verified (1.4 kg)</span>
            <span className="font-mono text-slate-400">07:12 AM (Sort)</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-300">Barcode Inspection Passed</span>
            <span className="font-mono text-slate-400">Yesterday 11:20 PM</span>
          </div>
        </div>
      )}
    </div>
  );
}
