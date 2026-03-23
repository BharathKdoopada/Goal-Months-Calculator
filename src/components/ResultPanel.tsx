import { memo } from 'react';
import { Stat } from './Stat';
import { formatINR } from '../utils/format';
import type { GoalResult } from '../types/calculator';

export interface ResultPanelProps {
  result: GoalResult | null;
  goal: number;
}

export const ResultPanel = memo(function ResultPanel({ result, goal }: ResultPanelProps) {
  if (!result) {
    return (
      <section
        className="bg-surface border border-border rounded-2xl px-8 py-12 text-center text-muted"
        role="status"
        aria-live="polite"
      >
        <p>Enter your details to track your goal.</p>
      </section>
    );
  }

  if (result.impossible) {
    return (
      <section
        className="bg-red-50 border border-red-100 rounded-2xl px-8 py-8 text-sm text-red-800"
        role="status"
        aria-live="polite"
      >
        <p>
          Target is not reachable in 50 years. Try increasing your monthly savings.
        </p>
      </section>
    );
  }

  const years = Math.floor(result.months / 12);
  const rem = result.months % 12;
  const timeText =
    years > 0
      ? `${years} yr${years > 1 ? 's' : ''}${rem > 0 ? ` ${rem} mo` : ''}`
      : `${result.months} month${result.months !== 1 ? 's' : ''}`;

  return (
    <section
      className="bg-surface border border-border rounded-2xl p-8 shadow-sm"
      role="status"
      aria-live="polite"
    >
      <div className="flex items-end gap-3.5 mb-8 flex-wrap">
        <span
          className="font-serif text-7xl leading-none text-accent"
          aria-hidden="true"
        >
          {result.months}
        </span>
        <div className="pb-2">
          <span className="block text-xl font-semibold text-muted">months</span>
          {years > 0 && (
            <span
              className="inline-block mt-2 text-xs font-bold bg-blue-50 text-blue-700 border border-blue-100 rounded-full px-3 py-1"
              aria-hidden="true"
            >
              ≈ {timeText}
            </span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8" role="list">
        <Stat label="Total Contribution" value={formatINR(result.contributed)} color="var(--color-ink)" />
        <Stat
          label="Interest Earned"
          value={formatINR(Math.max(0, result.interest))}
          color="var(--color-accent)"
        />
        <Stat label="Total Value" value={formatINR(result.finalBalance)} color="var(--color-goal)" />
      </div>


    </section>
  );
});
