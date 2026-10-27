import { cn } from '@/lib/utils'

export function Caption({ className, ...props }) {
  return (
    <figcaption
      className={cn('mt-[0.6rem] border-t border-ink pt-[0.4rem] text-xs leading-normal text-ink-2', className)}
      {...props}
    />
  )
}

export default function Figure({
  src,
  srcSet,
  sizes,
  priority = false,
  alt,
  caption,
  ratio = '4 / 5',
  fit = 'cover',
  rough = false,
  tape = false,
  tilt = 0,
  className = '',
  frameClassName = '',
}) {
  const strip = 'absolute z-2 h-[1.6rem] w-[5.5rem] bg-tape shadow-[0_1px_0_rgb(0_0_0/0.04)]'
  return (
    <figure className={cn('relative rotate-(--tilt)', className)} style={{ '--tilt': `${tilt}deg` }}>
      {tape && <span aria-hidden="true" className={cn(strip, '-top-[0.7rem] left-[12%] -rotate-7')} />}
      <div
        className={cn('overflow-hidden bg-paper-2', rough && 'clip-rough', frameClassName)}
        style={{ aspectRatio: ratio }}
      >
        <img
          src={src}
          srcSet={srcSet}
          sizes={sizes}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : undefined}
          decoding="async"
          className={cn('size-full', fit === 'contain' ? 'object-contain p-[6%]' : 'object-cover')}
        />
      </div>
      {caption && <Caption>{caption}</Caption>}
      {tape === true && <span aria-hidden="true" className={cn(strip, '-right-[1.4rem] bottom-[2.2rem] rotate-78')} />}
    </figure>
  )
}
