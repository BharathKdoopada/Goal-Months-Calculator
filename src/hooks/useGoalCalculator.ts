import { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import { toast } from 'sonner';
import { debounce } from '../utils/debounce';
import { computeGoal } from '../utils/computeGoal';
import type { CalculatorInputs, GoalResult } from '../types/calculator';

interface UseGoalCalculatorReturn {
  rate: number;
  inputs: CalculatorInputs;
  result: GoalResult | null;
  handleGoal: (v: number) => void;
  handleMonthly: (v: number) => void;
  handleRate: (v: number) => void;
}

export function useGoalCalculator(): UseGoalCalculatorReturn {
  const [rate, setRate] = useState<number>(8);
  const [inputs, setInputs] = useState<CalculatorInputs>({
    goal: 1_000_000,
    monthly: 15_000,
  });

  const debounced = useRef(
    debounce((key: keyof CalculatorInputs, val: number) => {
      setInputs((prev) => ({ ...prev, [key]: val }));
    }, 300),
  ).current;

  const handleGoal = useCallback((v: number) => debounced('goal', v), [debounced]);
  const handleMonthly = useCallback((v: number) => debounced('monthly', v), [debounced]);
  const handleRate = useCallback((v: number) => setRate(v), []);

  // Show toast if monthly savings exceed the goal
  useEffect(() => {
    if (inputs.monthly > inputs.goal) {
      toast.error('Monthly savings cannot exceed the total goal amount', {
        id: 'savings-exceed-goal', // Prevents duplicate toasts
      });
    }
  }, [inputs.goal, inputs.monthly]);

  const result = useMemo(
    () => computeGoal(inputs.goal, inputs.monthly, rate),
    [inputs.goal, inputs.monthly, rate],
  );

  return { rate, inputs, result, handleGoal, handleMonthly, handleRate };
}
