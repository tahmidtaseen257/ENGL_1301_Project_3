import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useReducedMotion } from 'motion/react'
import { cn } from '@/lib/utils'
import Figure from './Figure'
import Grid from './Grid'
import { RichText } from './Interactive'

function Step({ index, active, onEnter, step, total }) {
  const ref = useRef(null)
  const inView = useInView(ref, { margin: '-45% 0px -45% 0px' })

  useEffect(() => {
    if (inView) onEnter(index)
  }, [inView, index, onEnter])

  return (
    <li
      ref={ref}
      className="flex min-h-[85vh] items-end pb-[8vh] last:min-h-[70vh] md:items-center md:pb-0 md:not-last:min-h-[90vh]"
      aria-current={active ? 'step' : undefined}
    >
      <div
        className={cn(
          'max-w-[34rem] border-t-2 border-ink bg-paper px-5 pt-5 pb-[1.4rem] shadow-[0_12px_30px_-18px_rgb(0_0_0/0.35)] transition-opacity duration-350 ease-[ease] md:bg-transparent md:px-0 md:shadow-none',
          active ? 'opacity-100' : 'opacity-40',
        )}
      >
        <p className="text-xs font-semibold tracking-[0.12em] tabular-nums">
          {String(index + 1).padStart(2, '0')}{' '}
          <span className="font-normal text-ink-2">/ {String(total).padStart(2, '0')}</span>
        </p>
        <h3 className="mt-1 mb-2 font-serif text-h3 font-normal">{step.heading}</h3>
        <p>
          <RichText text={step.text} />
        </p>
      </div>
    </li>
  )
}

export default function Scrolly({ steps }) {
  const [active, setActive] = useState(0)
  const reduce = useReducedMotion()

  return (
    <Grid className="relative">
      <div className="sticky top-[calc(var(--spacing-masthead)+0.75rem)] z-1 h-[52vh] self-start md:top-[calc(var(--spacing-masthead)+2rem)] md:col-[1/7] md:row-1 md:h-[calc(100vh-var(--spacing-masthead)-4rem)]">
        <div className="relative h-full">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 grid place-items-center"
              initial={false}
              animate={{ opacity: i === active ? 1 : 0, scale: reduce || i === active ? 1 : 0.985 }}
              transition={{ duration: reduce ? 0 : 0.5, ease: 'easeOut' }}
              aria-hidden={i !== active}
            >
              <Figure
                {...s.figure}
                ratio="auto"
                rough
                tilt={i % 2 ? 1.2 : -1.2}
                className="aspect-[4/5] h-full max-w-full"
                frameClassName="h-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
      <ol className="relative z-2 md:col-[8/-1] md:row-1">
        {steps.map((s, i) => (
          <Step key={i} index={i} step={s} total={steps.length} active={i === active} onEnter={setActive} />
        ))}
      </ol>
    </Grid>
  )
}
