import React, { useState } from 'react';
import { Package, ChevronDown, ChevronUp, MapPin, Copy, Check } from 'lucide-react';

export default function OrderSummary({ order }) {
  const [expanded, setExpanded] = useState(true);
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    const addr = `${order.shippingAddress?.street}, ${order.shippingAddress?.city}, ${order.shippingAddress?.state} ${order.shippingAddress?.zip}`;
    navigator.clipboard.writeText(addr);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mx-4 my-3 rounded-3xl bg-slate-900 border border-slate-800 p-4 shadow-lg">
      {/* Header with expander */}
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
        className="w-full flex items-center justify-between cursor-pointer select-none pb-2 border-b border-slate-800/60 text-left"
      >
        <div className="flex items-center gap-2">
          <Package className="w-4 h-4 text-blue-400" />
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300">
            Order Items ({order.items?.length || 0})
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-slate-100">${order.pricing?.total?.toFixed(2)}</span>
          <span className="text-slate-400 hover:text-white">
            {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </span>
        </div>
      </button>

      {expanded && (
        <div className="mt-3 space-y-3">
          {/* Items List */}
          <div className="space-y-2.5">
            {order.items?.map((item) => (
              <div key={item.id} className="flex gap-3 p-2 rounded-2xl bg-slate-950/60 border border-slate-800/80 items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-xl object-cover border border-slate-700/60 shrink-0 bg-slate-800"
                />
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-semibold text-slate-200 truncate">{item.name}</div>
                  <div className="text-[10px] text-slate-400 truncate">{item.variant}</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Qty: {item.quantity}</div>
                </div>
                <div className="text-xs font-bold text-slate-100 shrink-0">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          {/* Pricing Breakdown */}
          <div className="p-3 rounded-2xl bg-slate-950/40 border border-slate-800/60 text-xs space-y-1.5 text-slate-400">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="text-slate-200">${order.pricing?.subtotal?.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping (Standard Express)</span>
              <span className="text-emerald-400 font-medium">
                {order.pricing?.shipping === 0 ? 'FREE' : `$${order.pricing?.shipping?.toFixed(2)}`}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Estimated Tax</span>
              <span className="text-slate-200">${order.pricing?.tax?.toFixed(2)}</span>
            </div>
            <div className="flex justify-between pt-1.5 border-t border-slate-800 font-bold text-slate-100 text-xs">
              <span>Total Amount</span>
              <span className="text-blue-400">${order.pricing?.total?.toFixed(2)}</span>
            </div>
          </div>

          {/* Delivery Address & Instructions Card */}
          <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800 text-xs space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 font-semibold text-slate-200">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                <span>Shipping Address</span>
              </div>
              <button
                onClick={handleCopyAddress}
                className="text-[10px] text-slate-400 hover:text-slate-200 flex items-center gap-1 transition"
                title="Copy address"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            <div className="text-[11px] text-slate-300 leading-snug">
              <div className="font-semibold text-slate-100">{order.shippingAddress?.name}</div>
              <div>{order.shippingAddress?.street}</div>
              <div>{order.shippingAddress?.city}, {order.shippingAddress?.state} {order.shippingAddress?.zip}</div>
            </div>

            {order.shippingAddress?.instructions && (
              <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-[10px] text-slate-400 italic">
                "{order.shippingAddress.instructions}"
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
