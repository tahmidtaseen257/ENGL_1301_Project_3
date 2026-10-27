import { motion, useReducedMotion } from 'motion/react'
import { cn } from '@/lib/utils'

const SHAPES = {
  underline: {
    viewBox: '0 0 240 20',
    d: 'M3 13 C 45 6, 85 17, 125 10 S 205 5, 237 12',
  },
  circle: {
    viewBox: '0 0 240 100',
    d: 'M128 9 C 66 5, 13 22, 14 49 C 15 78, 82 93, 142 88 C 203 83, 237 63, 231 38 C 225 14, 168 3, 98 12',
  },
  scribble: {
    viewBox: '0 0 120 24',
    d: 'M4 16 Q 12 2 22 14 T 42 14 T 62 12 T 82 14 T 102 12 T 116 10',
  },
  asterisk: {
    viewBox: '0 0 40 40',
    d: 'M20 4 L21 36 M6 13 L34 27 M7 28 L33 12',
  },
}

export default function Doodle({
  shape = 'underline',
  className = '',
  strokeWidth = 3,
  duration = 0.9,
  delay = 0,
  style,
}) {
  const reduce = useReducedMotion()
  const { viewBox, d } = SHAPES[shape]

  return (
    <svg
      className={cn('pointer-events-none overflow-visible text-marker', className)}
      viewBox={viewBox}
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="none"
      style={style}
    >
      <motion.path
        d={d}
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={reduce ? false : { pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration, delay, ease: [0.65, 0, 0.35, 1] }}
      />
    </svg>
  )
}

const MARK = {
  underline: 'bottom-[-0.04em] left-[-2%] h-[0.16em] w-[104%]',
  circle: 'top-[-30%] left-[-14%] h-[160%] w-[128%]',
}

export function Mark({ children, shape = 'underline', delay = 0.2, className }) {
  return (
    <span className={cn('relative isolate inline-block whitespace-nowrap', className)}>
      {children}
      <Doodle shape={shape} delay={delay} className={cn('absolute -z-1', MARK[shape])} />
    </span>
  )
}
