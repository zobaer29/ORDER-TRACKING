import React from 'react';
import { Truck, Clock, AlertTriangle, CheckCircle2, Sparkles, ChevronRight, Camera } from 'lucide-react';

export default function StatusHeader({ order, onViewPhoto }) {
  const isDelayed = order.stateType === 'delayed';
  const isDelivered = order.stateType === 'delivered_not_received';
  const isNotReady = order.stateType === 'tracking_not_available';

  return (
    <div className="px-4 pt-3 pb-1">
      {/* Primary Card */}
      <div className="status-hero bg-gradient-to-b from-slate-800/80 to-slate-900 border border-slate-700/60 rounded-3xl p-4 shadow-xl relative overflow-hidden">
        {/* Subtle accent glow */}
        <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl opacity-20 pointer-events-none ${
          isDelayed ? 'bg-amber-500' : isDelivered ? 'bg-emerald-500' : isNotReady ? 'bg-purple-500' : 'bg-blue-500'
        }`}></div>

        {/* Top Status Badge & Tracking Number */}
        <div className="flex items-center justify-between mb-3">
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-semibold ${order.badgeColor}`}>
            {isDelayed ? (
              <AlertTriangle className="w-3.5 h-3.5 animate-pulse" />
            ) : isDelivered ? (
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            ) : isNotReady ? (
              <Clock className="w-3.5 h-3.5 text-purple-400 animate-spin-slow" />
            ) : (
              <Truck className="w-3.5 h-3.5 text-blue-400 animate-bounce" />
            )}
            <span>{order.title}</span>
          </div>

          <div className="text-[11px] font-mono text-slate-400 bg-slate-950/60 px-2.5 py-1 rounded-lg border border-slate-800">
            {order.carrier?.trackingNumber || 'Pending'}
          </div>
        </div>

        {/* Big ETA Display */}
        <div className="mb-3">
          <p className="text-xs text-slate-300 mb-2">{order.subtitle}</p>
          <div className="text-[11px] font-medium uppercase tracking-wider text-slate-400">
            {isDelivered ? 'Delivery Timestamp' : 'Estimated Delivery'}
          </div>
          <div className="text-xl font-bold text-slate-100 flex items-baseline gap-2 mt-0.5">
            {order.estimatedDelivery}
          </div>
          <div className="text-xs text-blue-400 font-medium flex items-center gap-1 mt-0.5">
            <Clock className="w-3 h-3" />
            <span>{order.timeWindow}</span>
            {order.etaMinutesRemaining && (
              <span className="text-[10px] bg-blue-500/20 text-blue-300 px-1.5 py-0.5 rounded ml-1">
                (~{order.etaMinutesRemaining} mins away)
              </span>
            )}
          </div>
        </div>

        {/* DELAYED ALERT BANNER (Requirement 1) */}
        {isDelayed && (
          <div className="mt-3 p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs flex flex-col gap-1.5">
            <div className="font-semibold flex items-center gap-1.5 text-amber-400">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <span>Delay Notice: Weather Disruption</span>
            </div>
            <p className="text-[11px] text-amber-200/90 leading-relaxed">
              {order.delayReason}
            </p>
          </div>
        )}

        {/* DELIVERED BUT NOT RECEIVED BANNER & PHOTO PROOF (Requirement 2) */}
        {isDelivered && (
          <div className="mt-3 p-3 rounded-2xl bg-slate-950/80 border border-slate-800 text-xs flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 font-medium text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Dropped off at Front Porch</span>
              </div>
              <span className="text-[10px] text-slate-400">{order.deliveryProof?.deliveredAt}</span>
            </div>
            
            {/* View Delivery Photo Button */}
            {order.deliveryProof?.photoUrl && (
              <button
                onClick={onViewPhoto}
                className="w-full py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-200 border border-slate-700 flex items-center justify-between text-xs transition"
              >
                <div className="flex items-center gap-2">
                  <Camera className="w-4 h-4 text-blue-400" />
                  <span>View Delivery Photo & Drop Spot</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            )}
          </div>
        )}

        {/* TRACKING NOT READY BANNER (Requirement 3) */}
        {isNotReady && (
          <div className="mt-3 p-3 rounded-2xl bg-purple-500/10 border border-purple-500/25 text-purple-200 text-xs flex flex-col gap-1.5">
            <div className="font-semibold flex items-center gap-1.5 text-purple-300">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span>Order Received & Being Picked</span>
            </div>
            <p className="text-[11px] text-purple-200/90 leading-relaxed">
              Your items are currently being packed in our fulfillment center. Carrier tracking details will activate automatically as soon as the package is scanned at pickup.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
