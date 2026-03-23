import { Toaster } from 'sonner';
import { useGoalCalculator } from './hooks/useGoalCalculator';
import { InputField } from './components/InputField';
import { RateSlider } from './components/RateSlider';
import { ResultPanel } from './components/ResultPanel';

export default function GoalCalculator() {
  const { rate, inputs, result, handleGoal, handleMonthly, handleRate } =
    useGoalCalculator();

  return (
    <div className="max-w-3xl mx-auto px-5 py-12">
      <Toaster position="top-center" expand={false} richColors />
      <header className="mb-10 text-center sm:text-left">
        <h1 className="font-serif text-4xl sm:text-5xl font-normal leading-tight mb-3">
          Goal Months Calculator
        </h1>

      </header>

      <main className="grid gap-6">
        <section
          className="bg-surface border border-border shadow-sm rounded-2xl p-8 grid gap-6"
          aria-label="Inputs"
        >
          <InputField
            id="goal"
            label="Goal Amount"
            hint="Total target savings."
            prefix="₹"
            defaultValue={1_000_000}
            min={1000}
            step={10000}
            onChange={handleGoal}
          />
          <InputField
            id="monthly"
            label="Monthly Savings"
            hint="Amount saved per month."
            prefix="₹"
            defaultValue={15_000}
            min={100}
            step={500}
            onChange={handleMonthly}
          />
          <RateSlider value={rate} onChange={handleRate} />
        </section>

        <ResultPanel result={result} goal={inputs.goal} />
      </main>
    </div>
  );
}