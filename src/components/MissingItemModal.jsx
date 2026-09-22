import React, { useState } from 'react';
import { X, ShieldAlert, CheckCircle, ArrowRight, PackageX, Home, Users, RefreshCw } from 'lucide-react';

export default function MissingItemModal({ isOpen, onClose, order }) {
  const [step, setStep] = useState(1);
  const [selectedAction, setSelectedAction] = useState('reship');
  const [ticketId, setTicketId] = useState('');

  if (!isOpen) return null;

  const handleCreateTicket = () => {
    const generatedId = `TKT-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketId(generatedId);
    setStep(3);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="w-full sm:max-w-md bg-slate-900 border border-slate-800 rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom duration-200">
        
        {/* Modal Header */}
        <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-rose-500/20 text-rose-400 border border-rose-500/30 flex items-center justify-center">
              <ShieldAlert className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-slate-100">Report Missing Package</h3>
              <p className="text-[10px] text-slate-400">Order #{order.id}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Wizard Steps indicator */}
        <div className="px-4 py-2 bg-slate-900/60 border-b border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
          <span className={`font-semibold ${step >= 1 ? 'text-rose-400' : ''}`}>1. Check Surroundings</span>
          <span className="text-slate-600">➔</span>
          <span className={`font-semibold ${step >= 2 ? 'text-rose-400' : ''}`}>2. Select Action</span>
          <span className="text-slate-600">➔</span>
          <span className={`font-semibold ${step >= 3 ? 'text-rose-400' : ''}`}>3. Resolution</span>
        </div>

        {/* Modal Body */}
        <div className="p-4 max-h-[70vh] overflow-y-auto custom-scrollbar">
          
          {/* STEP 1: Quick Checklist */}
          {step === 1 && (
            <div className="space-y-3">
              <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 text-xs">
                <div className="font-semibold text-slate-200 mb-1">Carrier Delivery Proof Info:</div>
                <div className="text-[11px] text-slate-400 space-y-0.5">
                  <div>Timestamp: <span className="text-slate-200">{order.deliveryProof?.deliveredAt}</span></div>
                  <div>Note: <span className="text-slate-200">{order.deliveryProof?.locationNote}</span></div>
                </div>
              </div>

              <div className="text-xs font-semibold text-slate-200">Recommended Steps Before Reporting:</div>
              <div className="space-y-2 text-xs">
                <div className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-center gap-2.5">
                  <Home className="w-4 h-4 text-blue-400 shrink-0" />
                  <span className="text-slate-300 text-[11px]">Check back porch, garage, mail slot, or side gate.</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-center gap-2.5">
                  <Users className="w-4 h-4 text-purple-400 shrink-0" />
                  <span className="text-slate-300 text-[11px]">Ask household members or neighbors if received on your behalf.</span>
                </div>
              </div>

              <div className="pt-2">
                <p className="text-[11px] text-slate-400 mb-3">
                  Checked everywhere and still missing? Proceed to claim instant replacement or refund below.
                </p>
                <button
                  onClick={() => setStep(2)}
                  className="w-full py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-semibold text-xs flex items-center justify-center gap-2 transition shadow-md shadow-rose-950/40"
                >
                  <span>Package Is Still Missing (Continue)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Resolution Options */}
          {step === 2 && (
            <div className="space-y-3">
              <div className="text-xs font-semibold text-slate-200">Choose your preferred resolution:</div>

              <div
                onClick={() => setSelectedAction('reship')}
                className={`p-3 rounded-2xl border cursor-pointer transition ${
                  selectedAction === 'reship'
                    ? 'bg-rose-500/10 border-rose-500 text-slate-100 ring-1 ring-rose-500'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <RefreshCw className="w-4 h-4 text-rose-400" />
                    <span className="text-xs font-bold text-slate-200">Send Immediate Free Replacement</span>
                  </div>
                  <span className="text-[10px] bg-rose-500/20 text-rose-300 px-2 py-0.5 rounded-full font-semibold">Recommended</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1 pl-6">
                  We'll dispatch a new package today via priority 1-day express delivery at no extra cost.
                </p>
              </div>

              <div
                onClick={() => setSelectedAction('refund')}
                className={`p-3 rounded-2xl border cursor-pointer transition ${
                  selectedAction === 'refund'
                    ? 'bg-rose-500/10 border-rose-500 text-slate-100 ring-1 ring-rose-500'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center gap-2">
                  <PackageX className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-bold text-slate-200">Full Order Refund (${order.pricing?.total?.toFixed(2)})</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1 pl-6">
                  Refund credited back to original payment method (Visa ending in 4912) within 1-3 business days.
                </p>
              </div>

              <div className="pt-2 flex items-center gap-2">
                <button
                  onClick={() => setStep(1)}
                  className="w-1/3 py-2.5 rounded-xl bg-slate-800 text-slate-300 font-medium text-xs hover:bg-slate-700 transition"
                >
                  Back
                </button>
                <button
                  onClick={handleCreateTicket}
                  className="w-2/3 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-semibold text-xs transition shadow-md shadow-rose-950/40"
                >
                  Submit Resolution Claim
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Resolution Success */}
          {step === 3 && (
            <div className="space-y-3 text-center py-2">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center">
                <CheckCircle className="w-6 h-6 animate-bounce" />
              </div>
              
              <div>
                <h4 className="text-sm font-bold text-slate-100">Claim Processed Successfully!</h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Resolution Ticket: <span className="font-mono text-emerald-400 font-bold">{ticketId}</span>
                </p>
              </div>

              <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 text-left text-xs space-y-1.5">
                <div className="text-[11px] text-slate-400">Action Confirmed:</div>
                <div className="font-bold text-slate-200">
                  {selectedAction === 'reship' ? '🚀 Priority Replacement Dispatched' : '💳 Full Refund Initiated'}
                </div>
                <p className="text-[10px] text-slate-400 leading-snug">
                  Confirmation receipt and tracking details sent to your registered email address. Our team is handling the carrier inquiry in the background.
                </p>
              </div>

              <button
                onClick={onClose}
                className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs transition"
              >
                Close Window
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
