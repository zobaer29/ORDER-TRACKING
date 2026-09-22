import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle } from 'lucide-react';

export default function RescheduleModal({ isOpen, onClose, onConfirmReschedule }) {
  const [selectedDate, setSelectedDate] = useState('Thu, Sep 24');
  const [selectedSlot, setSelectedSlot] = useState('Morning (9 AM - 12 PM)');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onConfirmReschedule(selectedDate, selectedSlot);
      setSubmitted(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="w-full max-w-sm bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden">
        <div className="p-3.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-amber-400" />
            <h3 className="text-xs font-bold text-slate-100">Reschedule Delivery Date</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="p-4 space-y-3">
            <div className="text-xs text-slate-400">
              Due to weather delay, select a preferred new delivery date and window that fits your schedule:
            </div>

            <div>
              <label className="text-[11px] font-semibold text-slate-300 block mb-1">Select Available Date:</label>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {['Thu, Sep 24', 'Fri, Sep 25', 'Sat, Sep 26'].map((date) => (
                  <button
                    key={date}
                    type="button"
                    onClick={() => setSelectedDate(date)}
                    className={`py-2 px-3 rounded-xl border font-medium text-left transition ${
                      selectedDate === date
                        ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    {date}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-[11px] font-semibold text-slate-300 block mb-1">Select Delivery Window:</label>
              <div className="space-y-1.5 text-xs">
                {['Morning (9 AM - 12 PM)', 'Afternoon (1 PM - 5 PM)', 'Evening (6 PM - 9 PM)'].map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setSelectedSlot(slot)}
                    className={`w-full py-2 px-3 rounded-xl border font-medium text-left transition flex items-center justify-between ${
                      selectedSlot === slot
                        ? 'bg-blue-500/20 border-blue-500 text-blue-300'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <span>{slot}</span>
                    {selectedSlot === slot && <Clock className="w-3.5 h-3.5 text-blue-400" />}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition shadow-md shadow-amber-950/40 mt-2"
            >
              Confirm New Delivery Slot
            </button>
          </form>
        ) : (
          <div className="p-6 text-center space-y-2">
            <CheckCircle className="w-10 h-10 text-emerald-400 mx-auto animate-bounce" />
            <h4 className="text-sm font-bold text-slate-100">Delivery Rescheduled!</h4>
            <p className="text-xs text-slate-400">
              Carrier notified for {selectedDate} ({selectedSlot}).
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
