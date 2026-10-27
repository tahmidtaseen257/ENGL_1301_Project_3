import { motion, useScroll, useSpring } from 'motion/react'
import Doodle, { Mark } from './Doodle'
import Grid from './Grid'
import Reveal from './Reveal'

export function ChapterHead({ number, kicker, title, deck, id }) {
  return (
    <Grid as="header" className="mb-[clamp(2.5rem,6vh,4.5rem)] gap-y-4">
      <Reveal className="flex items-baseline gap-4 border-t border-ink pt-3 md:col-[1/4] md:row-[1/3] md:flex-col md:gap-2">
        <span className="text-[clamp(3rem,6vw,5.5rem)] leading-[0.9] font-light tracking-[-0.04em] tabular-nums">
          {number}
        </span>
        <span className="text-xs font-semibold tracking-[0.14em] uppercase">{kicker}</span>
      </Reveal>
      <Reveal
        as="h2"
        id={`${id}-title`}
        className="max-w-[18ch] font-serif text-h2 leading-[1.02] font-normal tracking-[-0.015em] md:col-[4/12]"
        delay={0.05}
      >
        {title}
      </Reveal>
      {deck && (
        <Reveal as="p" className="max-w-[46ch] text-lead leading-[1.45] text-ink-2 md:col-[4/10]" delay={0.1}>
          {deck}
        </Reveal>
      )}
    </Grid>
  )
}

export function PullQuote({ text, mark, who }) {
  const parts = mark ? text.split(new RegExp(`(${mark})`, 'i')) : [text]
  return (
    <Grid as="figure" className="my-[clamp(4rem,10vh,7rem)] gap-y-4">
      <Doodle shape="asterisk" className="size-11 md:col-[1/2] md:mt-[0.4rem] md:justify-self-end" strokeWidth={2.5} />
      <blockquote className="md:col-[2/12]">
        <p className="font-serif text-[clamp(2rem,4.6vw,4.1rem)] leading-[1.08] font-normal tracking-[-0.01em] italic">
          {parts.map((p, i) =>
            mark && p.toLowerCase() === mark.toLowerCase() ? (
              <Mark key={i} shape="circle" delay={0.4}>
                {p}
              </Mark>
            ) : (
              p
            ),
          )}
        </p>
      </blockquote>
      <figcaption className="text-xs tracking-[0.12em] text-ink-2 uppercase md:col-[2/12]">— {who}</figcaption>
    </Grid>
  )
}

export function ProgressBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })
  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-60 h-[3px] origin-left bg-marker"
      style={{ scaleX }}
      aria-hidden="true"
    />
  )
}
