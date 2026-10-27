import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

export default function Seg({ value, onChange, options, label }) {
  return (
    <ToggleGroup
      type="single"
      value={value}
      onValueChange={(v) => v && onChange(v)}
      aria-label={label}
      className="inline-flex flex-wrap items-stretch border border-ink"
    >
      {options.map(([key, text]) => (
        <ToggleGroupItem key={key} value={key} className="border-ink not-first:border-l focus-visible:rounded-[2px]">
          {text}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  )
}
