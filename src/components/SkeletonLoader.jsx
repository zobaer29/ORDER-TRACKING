import React from 'react';

export default function SkeletonLoader() {
  return (
    <div className="p-4 space-y-4 animate-pulse">
      {/* Header skeleton */}
      <div className="h-40 rounded-3xl bg-slate-800/60 border border-slate-800 p-4 space-y-3">
        <div className="flex justify-between">
          <div className="w-24 h-6 rounded-full bg-slate-700/60"></div>
          <div className="w-28 h-6 rounded-lg bg-slate-700/60"></div>
        </div>
        <div className="w-44 h-8 rounded-xl bg-slate-700/60"></div>
        <div className="w-32 h-4 rounded-lg bg-slate-700/40"></div>
      </div>

      {/* Map skeleton */}
      <div className="h-44 rounded-2xl bg-slate-800/40 border border-slate-800"></div>

      {/* Timeline skeleton */}
      <div className="h-56 rounded-3xl bg-slate-800/50 border border-slate-800 p-4 space-y-3">
        <div className="w-36 h-5 rounded-lg bg-slate-700/60"></div>
        <div className="space-y-4 pt-2">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-slate-700"></div>
            <div className="flex-1 space-y-1">
              <div className="w-32 h-4 rounded bg-slate-700/60"></div>
              <div className="w-48 h-3 rounded bg-slate-700/40"></div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-slate-700"></div>
            <div className="flex-1 space-y-1">
              <div className="w-28 h-4 rounded bg-slate-700/60"></div>
              <div className="w-40 h-3 rounded bg-slate-700/40"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
