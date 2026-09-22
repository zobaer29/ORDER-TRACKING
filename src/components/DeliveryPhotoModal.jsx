import React from 'react';
import { X, Camera, MapPin, CheckCircle2 } from 'lucide-react';

export default function DeliveryPhotoModal({ isOpen, onClose, order }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="w-full max-w-sm bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150">
        <div className="p-3.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Camera className="w-4 h-4 text-emerald-400" />
            <h3 className="text-xs font-bold text-slate-100">Delivery Drop Photo</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-4 space-y-3">
          <div className="relative rounded-2xl overflow-hidden border border-slate-700 bg-slate-950 shadow-inner">
            <img
              src={order.deliveryProof?.photoUrl}
              alt="Delivery Proof"
              className="w-full h-56 object-cover"
            />
            <div className="absolute bottom-2 left-2 right-2 bg-slate-950/80 backdrop-blur-md p-2 rounded-xl border border-slate-800 text-[10px] text-slate-200 flex items-center justify-between">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                GPS Verified Drop Location
              </span>
              <span className="font-mono text-slate-400">{order.deliveryProof?.deliveredAt}</span>
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 text-xs space-y-1 text-slate-300">
            <div className="font-semibold text-slate-200 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>Location Note: {order.deliveryProof?.locationNote}</span>
            </div>
            <p className="text-[11px] text-slate-400">
              Courier drop spot captured at 742 Evergreen Terrace. Package left securely by front entrance.
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs transition"
          >
            Close Photo View
          </button>
        </div>
      </div>
    </div>
  );
}
