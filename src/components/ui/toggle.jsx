import { Toggle as TogglePrimitive } from 'radix-ui'
import { cn } from '@/lib/utils'

export function Toggle({ className, ...props }) {
  return <TogglePrimitive.Root className={cn('inline-flex items-center justify-center', className)} {...props} />
}
