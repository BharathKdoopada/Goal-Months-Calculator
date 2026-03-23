import { memo } from 'react';

export interface StatProps {
  label: string;
  value: string;
  color: string;
}

export const Stat = memo(function Stat({ label, value, color }: StatProps) {
  return (
    <div
      className="bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 flex flex-col gap-1 shadow-sm"
      role="listitem"
    >
      <span className="text-[11px] text-muted font-bold uppercase tracking-wider">
        {label}
      </span>
      <span className="text-lg font-bold" style={{ color }}>
        {value}
      </span>
    </div>
  );
});
