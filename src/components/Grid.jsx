import { cn } from '@/lib/utils'

export default function Grid({ as: Tag = 'div', className, ...props }) {
  return (
    <Tag
      className={cn('mx-auto grid max-w-page grid-cols-12 gap-x-gutter px-margin *:col-span-full', className)}
      {...props}
    />
  )
}
