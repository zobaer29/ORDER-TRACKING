import React from 'react';
import { Signal, Wifi, Battery, ArrowLeft, RefreshCw, Share2 } from 'lucide-react';

export default function MobileFrame({ children, viewMode, onRefresh, orderId }) {
  const currentTime = "9:41";

  if (viewMode === 'full') {
    return (
      <div className="full-order-screen w-full max-w-5xl mx-auto bg-[#fbfcfa] text-slate-900 min-h-[calc(100vh-126px)] border-x border-slate-200 shadow-xl relative">
        <div className="bg-[#fbfcfa] px-6 py-4 flex items-center justify-between border-b border-slate-200 sticky top-0 z-30">
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition" aria-label="Go back">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <div className="text-sm font-bold text-slate-900">Track order</div>
              <div className="text-[11px] font-mono text-slate-500">{orderId || '#ORD-9842-X9'}</div>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button onClick={onRefresh} className="p-2 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition" title="Refresh order status" aria-label="Refresh order status">
              <RefreshCw className="w-4 h-4" />
            </button>
            <button className="p-2 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition" title="Share order" aria-label="Share order">
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="full-order-content">{children}</div>
      </div>
    );
  }

  return (
    <div className="device-stage py-8 px-4 flex justify-center items-center min-h-[calc(100vh-65px)]">
      {/* Mobile Device Mockup Frame */}
      <div className="device-shell w-full max-w-[390px] h-[830px] bg-[#fbfcfa] rounded-[42px] border-[8px] border-[#172126] ring-1 ring-slate-300/70 shadow-2xl overflow-hidden flex flex-col relative transition-all duration-300">
        
        {/* Mobile Top Status Bar */}
        <div className="bg-[#172126] px-6 pt-3 pb-2 flex justify-between items-center text-slate-300 select-none z-40">
          <span className="text-xs font-semibold tracking-tight">{currentTime}</span>
          
          {/* Dynamic Island / Camera Pill */}
          <div className="w-24 h-4 bg-black rounded-full flex items-center justify-center gap-2 px-2 shadow-inner">
            <div className="w-2 h-2 rounded-full bg-blue-900/60 border border-blue-700/40"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-slate-800"></div>
          </div>

          <div className="flex items-center gap-1.5 text-xs">
            <Signal className="w-3 h-3 text-slate-300" />
            <Wifi className="w-3 h-3 text-slate-300" />
            <Battery className="w-3.5 h-3.5 text-slate-300 fill-slate-300" />
          </div>
        </div>

        {/* App Bar Navigation */}
        <div className="bg-[#fbfcfa] px-4 py-3 flex items-center justify-between border-b border-slate-200 sticky top-0 z-30">
          <button className="p-1.5 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition" aria-label="Go back">
            <ArrowLeft className="w-5 h-5" />
          </button>
          
          <div className="text-center">
            <div className="text-xs font-bold text-slate-800">Track order</div>
            <div className="text-[10px] font-mono text-slate-500">{orderId || '#ORD-9842-X9'}</div>
          </div>

          <div className="flex items-center gap-1">
            <button 
              onClick={onRefresh}
              className="p-1.5 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition"
              title="Refresh order status"
              aria-label="Refresh order status"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
            <button className="p-1.5 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition" aria-label="Share order">
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Mobile Viewport Content Area */}
        <div className="flex-1 overflow-y-auto custom-scrollbar bg-[#fbfcfa]">
          {children}
        </div>

        {/* iOS Home Indicator Bar */}
        <div className="bg-[#fbfcfa] py-2 flex justify-center items-center z-40">
          <div className="w-32 h-1 bg-slate-300 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
