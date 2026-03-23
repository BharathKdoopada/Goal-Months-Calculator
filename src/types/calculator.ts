export interface CalculatorInputs {
  goal: number;
  monthly: number;
}

export interface MonthEntry {
  month: number;
  balance: number;
}

export interface GoalSuccess {
  impossible?: false;
  months: number;
  history: MonthEntry[];
  contributed: number;
  interest: number;
  finalBalance: number;
}

export interface GoalImpossible {
  impossible: true;
}

export type GoalResult = GoalSuccess | GoalImpossible;
