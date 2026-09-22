import React from 'react';
import { MapPin, Phone, MessageSquare, Truck, Navigation, AlertTriangle } from 'lucide-react';

export default function DeliveryMap({ order, onContactDriver }) {
  if (order.stateType === 'tracking_not_available') {
    return (
      <div className="mx-4 my-3 p-4 rounded-2xl bg-slate-800/40 border border-slate-700/50 flex flex-col items-center text-center">
        <div className="w-12 h-12 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-2">
          <Navigation className="w-6 h-6 animate-pulse" />
        </div>
        <h4 className="text-xs font-semibold text-slate-200">Live Route Map Unavailable</h4>
        <p className="text-[11px] text-slate-400 max-w-xs mt-1">
          Live GPS route map activates once your package is loaded into the delivery vehicle by the carrier.
        </p>
      </div>
    );
  }

  const isDelayed = order.stateType === 'delayed';
  const isDelivered = order.stateType === 'delivered_not_received';
  const isOutForDelivery = order.stateType === 'out_for_delivery';

  return (
    <div className="mx-4 my-3 rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md relative">
      {/* Map Graphic Container */}
      <div className="h-44 w-full relative bg-slate-950 overflow-hidden">
        {/* SVG Vector Map Representation */}
        <svg className="w-full h-full opacity-60" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200">
          <defs>
            <linearGradient id="grid-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e293b" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#0f172a" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="route-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#60a5fa" />
            </linearGradient>
          </defs>

          {/* Background & Road Grid */}
          <rect width="400" height="200" fill="url(#grid-grad)" />

          {/* Secondary streets */}
          <path d="M 0 50 Q 150 40 400 70" stroke="#334155" strokeWidth="12" fill="none" opacity="0.6" />
          <path d="M 0 160 Q 200 140 400 170" stroke="#334155" strokeWidth="10" fill="none" opacity="0.5" />
          <path d="M 80 0 Q 100 120 120 200" stroke="#334155" strokeWidth="14" fill="none" opacity="0.6" />
          <path d="M 280 0 Q 260 100 310 200" stroke="#334155" strokeWidth="14" fill="none" opacity="0.6" />

          {/* River / Water landmark */}
          <path d="M 0 10 Q 120 90 220 200" stroke="#1e3a8a" strokeWidth="18" fill="none" opacity="0.3" />

          {/* Main Delivery Route Line */}
          <path
            d="M 60 130 C 120 130, 160 60, 240 75 C 300 85, 310 140, 340 140"
            stroke={isDelayed ? "#f59e0b" : "#3b82f6"}
            strokeWidth="5"
            strokeDasharray="6 6"
            className="animate-dash"
            fill="none"
          />

          {/* Destination Marker Dot (Home) */}
          <g transform="translate(340, 140)">
            <circle r="14" fill="#3b82f6" fillOpacity="0.2" className="animate-ping" />
            <circle r="8" fill="#3b82f6" />
            <circle r="3" fill="#ffffff" />
          </g>

          {/* Courier Van / Driver Marker Dot */}
          {!isDelivered && (
            <g transform={isDelayed ? "translate(180, 68)" : "translate(240, 75)"}>
              <circle r="18" fill={isDelayed ? "#f59e0b" : "#2563eb"} fillOpacity="0.3" className="animate-pulse-ring" />
              <circle r="10" fill={isDelayed ? "#d97706" : "#2563eb"} />
            </g>
          )}
        </svg>

        {/* Map Overlay Badges */}
        <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
          {/* Live Indicator pill */}
          <div className="bg-slate-900/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-slate-700/80 flex items-center gap-1.5 shadow-lg">
            <div className={`w-2 h-2 rounded-full ${isDelayed ? 'bg-amber-400 animate-ping' : isDelivered ? 'bg-emerald-400' : 'bg-blue-400 animate-pulse'}`}></div>
            <span className="text-[10px] font-semibold tracking-wide uppercase text-slate-200">
              {isDelayed ? 'Delayed GPS' : isDelivered ? 'Delivered' : 'Live Courier GPS'}
            </span>
          </div>

          {/* Stops away pill */}
          {isOutForDelivery && order.carrier?.stopsAway && (
            <div className="bg-blue-600/90 text-white backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold shadow-lg">
              {order.carrier.stopsAway} Stops Away
            </div>
          )}

          {isDelayed && (
            <div className="bg-amber-500/90 text-slate-950 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold flex items-center gap-1 shadow-lg">
              <AlertTriangle className="w-3 h-3" />
              Route Rerouted
            </div>
          )}
        </div>

        {/* Home Destination Pin Badge */}
        <div className="absolute bottom-2 right-2 bg-slate-900/95 backdrop-blur-md px-2.5 py-1 rounded-xl border border-slate-700 text-[10px] text-slate-300 flex items-center gap-1">
          <MapPin className="w-3 h-3 text-blue-400" />
          <span>742 Evergreen Terr</span>
        </div>
      </div>

      {/* Driver / Courier Details Footer Bar */}
      {isOutForDelivery && order.carrier?.driverName && (
        <div className="p-3 bg-slate-900 border-t border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={order.carrier.driverPhoto}
              alt={order.carrier.driverName}
              className="w-10 h-10 rounded-full object-cover border-2 border-blue-500/50 shadow-md"
            />
            <div>
              <div className="text-xs font-semibold text-slate-100 flex items-center gap-1">
                {order.carrier.driverName}
                <span className="text-[10px] text-slate-400 font-normal">({order.carrier.name})</span>
              </div>
              <div className="text-[10px] text-slate-400 flex items-center gap-1">
                <Truck className="w-3 h-3 text-slate-500" />
                {order.carrier.vehicle}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => onContactDriver('call')}
              className="p-2 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30 hover:bg-blue-600/30 transition flex items-center justify-center"
              title="Call driver"
            >
              <Phone className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onContactDriver('message')}
              className="p-2 rounded-xl bg-slate-800 text-slate-300 border border-slate-700 hover:text-white transition flex items-center justify-center"
              title="Message driver"
            >
              <MessageSquare className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
