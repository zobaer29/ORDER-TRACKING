import React, { useState } from 'react';
import { X, Send, Bot, User, CheckCheck } from 'lucide-react';

export default function SupportChatModal({ isOpen, onClose, order }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: `Hello Alex! I see you are inquiring about Order #${order.id} (${order.title}). How can I assist you right now?`,
      time: 'Just now'
    }
  ]);
  const [input, setInput] = useState('');

  if (!isOpen) return null;

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: input,
      time: 'Just now'
    };

    setMessages(prev => [...prev, userMsg]);
    const promptText = input.toLowerCase();
    setInput('');

    // Generate smart response based on order state
    setTimeout(() => {
      let botReply = "I've logged your request with our support team. An agent will follow up shortly!";
      
      if (promptText.includes('delay') || promptText.includes('when') || order.stateType === 'delayed') {
        botReply = `Your order is currently impacted by weather at the hub. Carrier ${order.carrier?.name} has prioritized your shipment for arrival by ${order.estimatedDelivery}.`;
      } else if (promptText.includes('missing') || promptText.includes('not receive') || order.stateType === 'delivered_not_received') {
        botReply = "I understand you haven't received your delivered item. You can click 'Report Missing Package' in the app for an instant free replacement or full refund!";
      } else if (promptText.includes('driver') || promptText.includes('location')) {
        botReply = `Driver ${order.carrier?.driverName || 'Marcus'} is currently ${order.carrier?.stopsAway || '3'} stops away in your area.`;
      }

      setMessages(prev => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'bot',
          text: botReply,
          time: 'Just now'
        }
      ]);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="w-full sm:max-w-md h-[550px] bg-slate-900 border border-slate-800 rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="p-3.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
              <Bot className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-100 flex items-center gap-1.5">
                Order Assistant AI
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              </div>
              <div className="text-[10px] text-slate-400">Live • Order #{order.id}</div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Message area */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 custom-scrollbar bg-slate-950/40">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex gap-2 max-w-[85%] ${m.sender === 'user' ? 'ml-auto flex-row-reverse' : ''}`}
            >
              <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-xs font-bold ${
                m.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-blue-400 border border-slate-700'
              }`}>
                {m.sender === 'user' ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
              </div>
              <div>
                <div className={`p-3 rounded-2xl text-xs leading-relaxed ${
                  m.sender === 'user'
                    ? 'bg-blue-600 text-white rounded-tr-none'
                    : 'bg-slate-800/90 text-slate-200 border border-slate-700/60 rounded-tl-none'
                }`}>
                  {m.text}
                </div>
                <div className={`text-[9px] text-slate-500 mt-1 flex items-center gap-1 ${
                  m.sender === 'user' ? 'justify-end' : ''
                }`}>
                  <span>{m.time}</span>
                  {m.sender === 'user' && <CheckCheck className="w-3 h-3 text-blue-400" />}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Form input */}
        <form onSubmit={handleSend} className="p-3 bg-slate-950 border-t border-slate-800 flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about your package..."
            className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-100 focus:outline-none focus:border-blue-500 placeholder:text-slate-500"
          />
          <button
            type="submit"
            disabled={!input.trim()}
            className="p-2.5 rounded-xl bg-blue-600 text-white hover:bg-blue-500 disabled:opacity-40 transition flex items-center justify-center"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
