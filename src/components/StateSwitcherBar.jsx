import React from 'react';
import { Truck, AlertTriangle, HelpCircle, Clock, Loader2, AlertOctagon, Smartphone, Monitor } from 'lucide-react';

export default function StateSwitcherBar({ activeState, setActiveState, viewMode, setViewMode }) {
  const states = [
    {
      id: 'out_for_delivery',
      label: 'Out for Delivery',
      subtitle: 'Normal Active State',
      icon: Truck,
      color: 'bg-blue-600/20 text-blue-400 border-blue-500/40 hover:bg-blue-600/30'
    },
    {
      id: 'delayed',
      label: 'Delayed Order',
      subtitle: 'Edge Case 1',
      icon: AlertTriangle,
      color: 'bg-amber-600/20 text-amber-400 border-amber-500/40 hover:bg-amber-600/30'
    },
    {
      id: 'delivered_not_received',
      label: 'Delivered (Not Received)',
      subtitle: 'Edge Case 2',
      icon: HelpCircle,
      color: 'bg-emerald-600/20 text-emerald-400 border-emerald-500/40 hover:bg-emerald-600/30'
    },
    {
      id: 'tracking_not_available',
      label: 'Tracking Not Ready',
      subtitle: 'Edge Case 3',
      icon: Clock,
      color: 'bg-purple-600/20 text-purple-400 border-purple-500/40 hover:bg-purple-600/30'
    },
    {
      id: 'loading',
      label: 'Loading State',
      subtitle: 'Skeleton Loader',
      icon: Loader2,
      color: 'bg-slate-700/40 text-slate-300 border-slate-600/40 hover:bg-slate-700/60'
    },
    {
      id: 'error',
      label: 'Network Error',
      subtitle: 'Error Handling',
      icon: AlertOctagon,
      color: 'bg-rose-600/20 text-rose-400 border-rose-500/40 hover:bg-rose-600/30'
    }
  ];

  return (
    <header className="scenario-nav bg-[#172126]/95 border-b border-[#2d3b40] backdrop-blur-md sticky top-0 z-50 px-4 py-3 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center gap-3 min-w-0">
        {/* Title & info */}
        <div className="scenario-brand flex items-center gap-3 shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-[#c8f36a] flex items-center justify-center text-[#172126] shadow-md shadow-lime-900/20">
              <Truck className="w-5 h-5" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-base font-bold text-slate-100 leading-tight">Order Tracking Experience</h1>
              <p className="text-xs text-slate-400">Order tracking prototype</p>
            </div>
          </div>

          {/* View mode toggle button */}
          <button
            onClick={() => setViewMode(viewMode === 'mobile' ? 'full' : 'mobile')}
            className="flex items-center gap-1.5 text-xs px-3 py-2 rounded-lg bg-[#243238] text-slate-200 hover:text-white border border-[#405057] transition"
            title="Toggle between Mobile Frame and Full Screen View"
          >
            {viewMode === 'mobile' ? <Monitor className="w-3.5 h-3.5" /> : <Smartphone className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">{viewMode === 'mobile' ? 'Open full view' : 'Use mobile view'}</span>
          </button>
        </div>

        {/* State buttons list */}
        <div className="scenario-states flex-1 min-w-0 overflow-x-auto custom-scrollbar">
          <div className="flex items-center gap-2 min-w-max">
            {states.map((st) => {
              const Icon = st.icon;
              const isActive = activeState === st.id;
              return (
                <button
                  key={st.id}
                  onClick={() => setActiveState(st.id)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? `${st.color} ring-2 ring-blue-500/50 scale-[1.02] shadow-md`
                      : 'bg-[#243238] text-slate-400 border-[#405057] hover:text-slate-200 hover:border-slate-500'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'animate-bounce' : ''}`} />
                  <div className="text-left">
                    <div className="leading-tight">{st.label}</div>
                    <div className="scenario-state-subtitle text-[10px] opacity-70 font-normal hidden md:block">{st.subtitle}</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
