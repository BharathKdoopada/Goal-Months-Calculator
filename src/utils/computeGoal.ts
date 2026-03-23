import type { GoalResult, MonthEntry } from '../types/calculator';

export function computeGoal(
  goal: number,
  monthly: number,
  annualRate: number,
): GoalResult | null {
  if (!goal || !monthly || goal <= 0 || monthly <= 0) return null;

  const r = annualRate / 100 / 12;
  let balance = 0;
  let months = 0;
  const history: MonthEntry[] = [];

  while (balance < goal && months < 600) {
    balance = balance * (1 + r) + monthly;
    months++;
    history.push({ month: months, balance });
  }

  if (months >= 600) return { impossible: true };

  return {
    months,
    history,
    contributed: monthly * months,
    interest: balance - monthly * months,
    finalBalance: balance,
  };
}
