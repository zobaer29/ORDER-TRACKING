import React from 'react';
import { RefreshCw, WifiOff, MessageCircle } from 'lucide-react';

export default function ErrorView({ onRetry, onOpenChat }) {
  return (
    <div className="p-6 text-center space-y-4 my-auto flex flex-col items-center justify-center min-h-[500px]">
      <div className="w-16 h-16 rounded-3xl bg-rose-500/10 border border-rose-500/30 text-rose-400 flex items-center justify-center shadow-lg shadow-rose-950/40">
        <WifiOff className="w-8 h-8 animate-pulse" />
      </div>

      <div className="max-w-xs space-y-1">
        <h3 className="text-base font-bold text-slate-100">Unable to Fetch Live Tracking</h3>
        <p className="text-xs text-slate-400 leading-relaxed">
          We encountered a connection timeout while syncing with the carrier logistics API.
        </p>
      </div>

      <div className="w-full max-w-xs space-y-2 pt-2">
        <button
          onClick={onRetry}
          className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition flex items-center justify-center gap-2 shadow-md shadow-blue-950/40"
        >
          <RefreshCw className="w-4 h-4" />
          <span>Retry Connection</span>
        </button>

        <button
          onClick={onOpenChat}
          className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-xs transition flex items-center justify-center gap-2 border border-slate-700"
        >
          <MessageCircle className="w-4 h-4 text-blue-400" />
          <span>Contact Offline Support</span>
        </button>
      </div>
    </div>
  );
}
