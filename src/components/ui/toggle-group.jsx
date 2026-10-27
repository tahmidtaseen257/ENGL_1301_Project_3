import { ToggleGroup as ToggleGroupPrimitive } from 'radix-ui'
import { cn } from '@/lib/utils'

export function ToggleGroup({ className, ...props }) {
  return <ToggleGroupPrimitive.Root className={cn('flex w-fit items-center', className)} {...props} />
}

export function ToggleGroupItem({ className, ...props }) {
  return (
    <ToggleGroupPrimitive.Item
      className={cn(
        'inline-flex items-center justify-center bg-transparent px-3 py-[0.4rem] text-xs font-semibold tracking-[0.08em] text-ink uppercase hover:bg-paper-2 focus:z-10 data-[state=on]:bg-ink data-[state=on]:text-paper',
        className,
      )}
      {...props}
    />
  )
}
