import { memo } from 'react';

export interface RateSliderProps {
  value: number;
  onChange: (value: number) => void;
}

type SliderStyle = React.CSSProperties & { '--fill': string };

export const RateSlider = memo(function RateSlider({ value, onChange }: RateSliderProps) {
  const fillPercent = `${(value / 20) * 100}%`;

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor="rate" className="text-sm font-semibold text-ink">
        Annual Interest Rate —{' '}
        <strong className="text-accent">{value}%</strong>
      </label>

      <span id="rate-hint" className="text-[13px] text-muted leading-snug">
        Adjust the expected yearly return.
      </span>

      <input
        id="rate"
        type="range"
        min={0}
        max={20}
        step={0.5}
        value={value}
        aria-describedby="rate-hint"
        aria-valuemin={0}
        aria-valuemax={20}
        aria-valuenow={value}
        aria-valuetext={`${value} percent`}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{ '--fill': fillPercent } as SliderStyle}
        className="mt-2 cursor-pointer"
      />

      <div className="flex justify-between text-[11px] text-muted font-medium mt-1" aria-hidden="true">
        {[0, 5, 10, 15, 20].map((v) => (
          <span key={v}>{v}%</span>
        ))}
      </div>
    </div>
  );
});
