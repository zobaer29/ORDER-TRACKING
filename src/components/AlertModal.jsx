import React, { useState } from 'react';
import { X, Bell, Phone, Mail, CheckCircle } from 'lucide-react';

export default function AlertModal({ isOpen, onClose }) {
  const [phone, setPhone] = useState('+1 (555) 382-9901');
  const [saved, setSaved] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="w-full max-w-sm bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden">
        <div className="p-3.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bell className="w-4 h-4 text-purple-400" />
            <h3 className="text-xs font-bold text-slate-100">Live Status Notifications</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {!saved ? (
          <form onSubmit={handleSubmit} className="p-4 space-y-3">
            <p className="text-xs text-slate-400">
              Tracking code will generate within 12-24 hours. Where should we send real-time alerts when the carrier scans your package?
            </p>

            <div>
              <label className="text-[11px] font-semibold text-slate-300 block mb-1">Mobile Phone Number (SMS / WhatsApp):</label>
              <div className="flex items-center gap-2 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2">
                <Phone className="w-4 h-4 text-purple-400" />
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="bg-transparent text-xs text-slate-100 focus:outline-none w-full"
                />
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-[11px] text-purple-300 flex items-center gap-2">
              <Mail className="w-4 h-4 text-purple-400 shrink-0" />
              <span>Email notifications enabled for ummayjannatsadia@gmail.com</span>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs transition shadow-md shadow-purple-950/40"
            >
              Save Notification Preferences
            </button>
          </form>
        ) : (
          <div className="p-6 text-center space-y-2">
            <CheckCircle className="w-10 h-10 text-purple-400 mx-auto animate-bounce" />
            <h4 className="text-sm font-bold text-slate-100">SMS Alerts Activated!</h4>
            <p className="text-xs text-slate-400">
              You will receive a text message as soon as carrier tracking activates.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
