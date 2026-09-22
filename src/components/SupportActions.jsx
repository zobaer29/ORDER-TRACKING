import React from 'react';
import { AlertTriangle, Calendar, Bell, MessageCircle, ShieldAlert, FileQuestion, Mail } from 'lucide-react';

export default function SupportActions({ order, onRequestReportMissing, onRequestReschedule, onRequestAlerts, onOpenChat }) {
  const isDelayed = order.stateType === 'delayed';
  const isDelivered = order.stateType === 'delivered_not_received';
  const isNotReady = order.stateType === 'tracking_not_available';

  return (
    <div className="mx-4 my-3 space-y-2">
      <div className="text-xs font-bold uppercase tracking-wider text-slate-300 px-1 flex items-center justify-between">
        <span>Need Assistance?</span>
        <span className="text-[10px] text-blue-400 font-normal">24/7 Priority Support</span>
      </div>

      {/* DELIVERED BUT NOT RECEIVED PRIMARY CTA BANNER */}
      {isDelivered && (
        <div className="p-3.5 rounded-2xl bg-gradient-to-r from-rose-950/60 to-rose-900/40 border border-rose-500/40 shadow-lg flex flex-col gap-2.5">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-rose-500/20 border border-rose-500/30 flex items-center justify-center text-rose-400 shrink-0">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-rose-200">Package Marked Delivered, But You Don't Have It?</h4>
              <p className="text-[11px] text-rose-300/80 mt-0.5">
                Don't worry! We offer instant resolution or immediate replacement for missing deliveries.
              </p>
            </div>
          </div>
          <button
            onClick={onRequestReportMissing}
            className="w-full py-2.5 px-4 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-semibold text-xs transition shadow-md shadow-rose-900/50 flex items-center justify-center gap-1.5"
          >
            <FileQuestion className="w-4 h-4" />
            <span>Report Missing Package (Guided Help)</span>
          </button>
        </div>
      )}

      {/* DELAYED ORDER PRIMARY CTA BANNER */}
      {isDelayed && (
        <div className="p-3.5 rounded-2xl bg-gradient-to-r from-amber-950/60 to-amber-900/40 border border-amber-500/40 shadow-lg flex flex-col gap-2.5">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-amber-200">Your Package is Delayed in Transit</h4>
              <p className="text-[11px] text-amber-300/80 mt-0.5">
                You can request a priority carrier scan or change your delivery date.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={onRequestReschedule}
              className="py-2 px-3 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs hover:bg-amber-400 transition flex items-center justify-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Reschedule Date</span>
            </button>
            <button
              onClick={onOpenChat}
              className="py-2 px-3 rounded-xl bg-slate-800 text-amber-300 border border-amber-500/30 font-medium text-xs hover:bg-slate-700 transition flex items-center justify-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Priority Trace</span>
            </button>
          </div>
        </div>
      )}

      {/* TRACKING NOT READY PRIMARY CTA BANNER */}
      {isNotReady && (
        <div className="p-3.5 rounded-2xl bg-gradient-to-r from-purple-950/60 to-purple-900/40 border border-purple-500/40 shadow-lg flex flex-col gap-2.5">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
              <Bell className="w-5 h-5 animate-bounce" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-purple-200">Get Instant Updates when Dispatched</h4>
              <p className="text-[11px] text-purple-300/80 mt-0.5">
                Receive live SMS notification as soon as the shipping carrier picks up your box.
              </p>
            </div>
          </div>
          <button
            onClick={onRequestAlerts}
            className="w-full py-2.5 px-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs transition shadow-md shadow-purple-900/50 flex items-center justify-center gap-1.5"
          >
            <Bell className="w-4 h-4" />
            <span>Enable SMS / WhatsApp Live Alerts</span>
          </button>
        </div>
      )}

      {/* Standard Quick Support Row */}
      <div className="grid grid-cols-2 gap-2 pt-1">
        <button
          onClick={onOpenChat}
          className="p-3 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 hover:bg-slate-850 text-left transition flex items-center gap-2.5 group"
        >
          <div className="w-8 h-8 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/20 transition">
            <MessageCircle className="w-4 h-4" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-xs font-semibold text-slate-200">Live Support Chat</div>
            <div className="text-[10px] text-slate-400">Average response &lt;1m</div>
          </div>
        </button>

        <button
          onClick={() => window.location.href = 'mailto:ummayjannatsadia@gmail.com?subject=Order%20support'}
          className="p-3 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 hover:bg-slate-850 text-left transition flex items-center gap-2.5 group"
        >
          <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/20 transition">
            <Mail className="w-4 h-4" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-xs font-semibold text-slate-200">Email Support</div>
            <div className="text-[10px] text-slate-400">ummayjannatsadia@gmail.com</div>
          </div>
        </button>
      </div>
    </div>
  );
}
