import { useEffect, useRef, useState } from 'react'
import {
  AnimatePresence,
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from 'motion/react'
import { cn } from '@/lib/utils'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Toggle } from '@/components/ui/toggle'
import Seg from './Seg'
import { glossary } from '../content'
import { Caption } from './Figure'
import Grid from './Grid'

export function RichText({ text }) {
  const parts = text.split(/\{\{(\w+)\}\}/g)
  return parts.map((p, i) => (i % 2 === 1 && glossary[p] ? <Term key={i} id={p} /> : p))
}

export function Term({ id }) {
  const g = glossary[id]
  return (
    <Popover>
      <PopoverTrigger className="border-b-[1.5px] border-dashed border-marker leading-[inherit] aria-expanded:border-solid">
        <i>{g.roman}</i>
      </PopoverTrigger>
      <PopoverContent
        side="bottom"
        sideOffset={3}
        collisionPadding={16}
        onOpenAutoFocus={(e) => e.preventDefault()}
        className="z-40 w-[min(18rem,calc(100vw-2rem))] border-0 px-4 py-[0.85rem] text-sm leading-[1.45] not-italic shadow-[0_14px_30px_-16px_rgb(0_0_0/0.5)]"
      >
        <span className="mb-1 block font-bn text-[1.75rem] leading-[1.2]" lang="bn">
          {g.bn}
        </span>
        <span className="block text-[#e4dfd5]">
          <i>{g.roman}</i> — {g.meaning}
        </span>
      </PopoverContent>
    </Popover>
  )
}

export function Distance({ mi, km, from }) {
  const [unit, setUnit] = useState('mi')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.8 })
  const reduce = useReducedMotion()
  const value = unit === 'mi' ? mi : km
  const mv = useMotionValue(reduce ? value : 0)
  const shown = useTransform(mv, (v) => Math.round(v).toLocaleString('en-US'))

  useEffect(() => {
    if (!inView) return
    if (reduce) return mv.set(value)
    const c = animate(mv, value, { duration: 1.4, ease: [0.22, 1, 0.36, 1] })
    return () => c.stop()
  }, [inView, value, reduce, mv])

  return (
    <div
      className="mt-9 flex max-w-[26rem] flex-wrap items-end justify-between gap-4 border-t border-ink pt-3"
      ref={ref}
    >
      <p className="grid">
        <span className="sr-only">
          About {value.toLocaleString('en-US')} {unit === 'mi' ? 'miles' : 'kilometres'} from {from}
        </span>
        <span
          aria-hidden="true"
          className="text-[clamp(1.75rem,3vw,2.4rem)] leading-[1.1] font-light tracking-[-0.03em] tabular-nums"
        >
          ≈ <motion.span>{shown}</motion.span> {unit}
        </span>
        <span
          aria-hidden="true"
          className="text-xs leading-[1.1] font-semibold tracking-[0.12em] text-ink-2 uppercase tabular-nums"
        >
          from {from}
        </span>
      </p>
      <Seg
        value={unit}
        onChange={setUnit}
        options={[
          ['mi', 'mi'],
          ['km', 'km'],
        ]}
        label="Distance unit"
      />
    </div>
  )
}

function Pane({ src, alt }) {
  return <img src={src} alt={alt} draggable="false" className="size-full object-cover select-none" />
}

const tag =
  'pointer-events-none absolute top-4 z-2 bg-paper px-[0.55rem] py-1 text-xs font-semibold tracking-[0.12em] uppercase'

export function Compare({ before, after, caption, prompt }) {
  const [pos, setPos] = useState(50)
  return (
    <figure className="md:col-[2/12]">
      <div
        className="relative aspect-[4/3] touch-pan-y overflow-hidden bg-paper-2 has-[input:focus-visible]:outline-2 has-[input:focus-visible]:outline-offset-3 has-[input:focus-visible]:outline-marker md:aspect-video"
        style={{ '--pos': `${pos}%` }}
      >
        <div className="absolute inset-0">
          <Pane {...before} />
        </div>
        <div className="absolute inset-0 [clip-path:inset(0_0_0_var(--pos))]">
          <Pane {...after} />
        </div>
        <span className={cn(tag, 'left-4')}>{before.label}</span>
        <span className={cn(tag, 'right-4')}>{after.label}</span>
        <span
          className="pointer-events-none absolute inset-y-0 left-(--pos) z-3 -ml-px w-[2px] bg-marker"
          aria-hidden="true"
        >
          <span className="absolute top-1/2 left-1/2 grid size-11 -translate-1/2 place-items-center rounded-full border-2 border-marker bg-paper text-[1.1rem] text-marker">
            ⟷
          </span>
        </span>
        <input
          type="range"
          min="0"
          max="100"
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label={`${prompt}: ${before.label} and ${after.label}`}
          aria-valuetext={`${100 - pos}% ${after.label}`}
          className="absolute inset-0 z-4 m-0 size-full cursor-ew-resize appearance-none opacity-0"
        />
      </div>
      <Caption>
        <span className="mr-1 font-hand text-[1.25rem] text-marker-ink">{prompt} →</span> {caption}
      </Caption>
    </figure>
  )
}

function Jar({ origin }) {
  return (
    <svg
      className="h-[64px] w-[54px] fill-none stroke-ink stroke-2 transition-transform duration-250 ease-[ease] group-hover:-rotate-4"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 60 72"
      aria-hidden="true"
    >
      <path d="M17 6 C 25 4, 36 5, 43 6 L 44 14 C 36 15, 25 15, 16 14 Z" />
      <path d="M15 16 C 8 22, 7 30, 8 44 C 8 58, 10 66, 30 67 C 50 67, 52 59, 52 45 C 53 30, 51 21, 45 16" />
      <path
        className={origin === 'carried' ? 'fill-marker stroke-marker' : 'fill-paper-2'}
        d="M13 34 C 24 33, 37 35, 48 33 L 48 49 C 37 50, 24 48, 13 50 Z"
      />
    </svg>
  )
}

export function Pantry({ title, intro, items }) {
  const [filter, setFilter] = useState('all')
  const [sel, setSel] = useState(null)
  const reduce = useReducedMotion()
  const carried = items.filter((i) => i.origin === 'carried').length
  const found = items.length - carried
  const visible = items.filter((i) => filter === 'all' || i.origin === filter)
  const current = sel != null ? items[sel] : null

  const filters = [
    ['all', `All ${items.length}`],
    ['carried', `Carried ${carried}`],
    ['found', `Found here ${found}`],
  ]

  return (
    <Grid as="section" className="mt-[clamp(4rem,10vh,7rem)] items-start gap-y-8" aria-labelledby="pantry-title">
      <div className="md:col-[1/5] md:row-1">
        <h3 id="pantry-title" className="font-serif text-[2.1rem] leading-[1.05] font-normal">
          {title}
        </h3>
        <p className="mt-2 text-sm text-ink-2">{intro}</p>
        <div className="mt-5 flex h-2" aria-hidden="true">
          <span style={{ flexGrow: carried }} className="bg-marker" />
          <span style={{ flexGrow: found }} className="bg-ink" />
        </div>
        <p className="mt-[0.4rem] mb-4 text-xs tracking-[0.06em]">
          <b>{carried}</b> carried · <b>{found}</b> found
        </p>
        <Seg value={filter} onChange={setFilter} options={filters} label="Filter pantry" />
      </div>

      <ul className="grid grid-cols-[repeat(auto-fill,minmax(6.25rem,1fr))] gap-2 md:col-[6/-1] md:row-[1/3]">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((item) => {
            const idx = items.indexOf(item)
            return (
              <motion.li
                key={item.name}
                layout={!reduce}
                initial={reduce ? false : { opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduce ? { opacity: 0, transition: { duration: 0 } } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
              >
                <Toggle
                  className="group grid w-full justify-normal justify-items-center gap-[0.15rem] border border-transparent bg-transparent px-[0.4rem] pt-[0.9rem] pb-3 text-ink transition-[border-color,background-color] duration-200 ease-[ease] hover:border-rule data-[state=on]:border-ink data-[state=on]:bg-paper-2"
                  pressed={sel === idx}
                  onPressedChange={(on) => setSel(on ? idx : null)}
                >
                  <Jar origin={item.origin} />
                  <span className="mt-[0.35rem] text-center text-sm leading-[1.25] font-medium">{item.name}</span>
                  <span className="font-bn text-xs text-ink-2" lang="bn">
                    {item.bn}
                  </span>
                </Toggle>
              </motion.li>
            )
          })}
        </AnimatePresence>
      </ul>

      <div className="min-h-40 border-t-2 border-ink pt-3 text-sm md:col-[1/5] md:row-2" aria-live="polite">
        <AnimatePresence mode="wait" initial={false}>
          {current ? (
            <motion.div
              key={current.name}
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0, transition: { duration: 0 } } : { opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-xs font-semibold tracking-[0.14em] text-marker-ink uppercase">
                {current.origin === 'carried' ? 'Carried from home' : 'Found in Lubbock'}
              </p>
              <p className="mt-[0.2rem] mb-[0.4rem] font-serif text-[1.75rem] leading-[1.1]">
                {current.name}{' '}
                <span lang="bn" className="font-bn text-[1.1rem] text-ink-2">
                  {current.bn}
                </span>
              </p>
              <p>{current.note}</p>
              <p className="mt-2 text-xs text-ink-2">— {current.who}</p>
            </motion.div>
          ) : (
            <motion.p
              key="empty"
              className="font-hand text-[1.5rem] text-ink-2"
              initial={false}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              Tap a jar to read its story.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </Grid>
  )
}

function useNow(ms = 15000) {
  const [now, setNow] = useState(() => new Date())
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), ms)
    return () => clearInterval(t)
  }, [ms])
  return now
}

function zoneInfo(date, tz) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: tz,
    hour: 'numeric',
    minute: '2-digit',
    hourCycle: 'h23',
    timeZoneName: 'longOffset',
  }).formatToParts(date)
  const get = (t) => parts.find((p) => p.type === t)?.value
  const h = Number(get('hour'))
  const m = Number(get('minute'))
  const off = get('timeZoneName')
  const match = off.match(/GMT([+-])(\d{2}):(\d{2})/)
  const offset = match ? (match[1] === '-' ? -1 : 1) * (Number(match[2]) + Number(match[3]) / 60) : 0
  const label = new Intl.DateTimeFormat('en-US', { timeZone: tz, hour: 'numeric', minute: '2-digit' }).format(date)
  return { h, m, offset, label }
}

export function Clocks({ title, text, cities, awake }) {
  const now = useNow()
  const info = cities.map((c) => ({ ...c, ...zoneInfo(now, c.tz) }))
  const here = info.find((c) => c.here) ?? info[0]
  const isAwake = (c) => c.h >= awake[0] && c.h < awake[1]
  const allAwake = info.every(isAwake)

  return (
    <section className="border border-ink p-5" aria-labelledby="clocks-title">
      <h3 id="clocks-title" className="font-serif text-[1.75rem] leading-[1.1] font-normal">
        {title}
      </h3>
      <p className="mt-[0.35rem] text-sm text-ink-2">
        <RichText text={text} />
      </p>
      <ul className="mt-[1.1rem] mb-2">
        {info.map((c) => {
          const diff = c.offset - here.offset
          const pct = ((c.h + c.m / 60) / 24) * 100
          return (
            <li key={c.city}>
              <div className="flex items-baseline gap-3">
                <span className="text-sm font-semibold">{c.city}</span>
                <span className="ml-auto text-[1.3rem] font-light tracking-[-0.01em] tabular-nums">{c.label}</span>
                <span className="w-13 text-right text-xs text-ink-2 tabular-nums">
                  {c.here ? 'here' : `${diff >= 0 ? '+' : '−'}${Math.abs(diff)}h`}
                </span>
              </div>
              <div className="relative mt-[0.35rem] mb-4 h-2 bg-paper-2" aria-hidden="true">
                <span
                  className="absolute inset-y-0 bg-ink/20"
                  style={{ left: `${(awake[0] / 24) * 100}%`, width: `${((awake[1] - awake[0]) / 24) * 100}%` }}
                />
                <span className="absolute -inset-y-[5px] -ml-px w-[2px] bg-marker" style={{ left: `${pct}%` }} />
              </div>
            </li>
          )
        })}
      </ul>
      <p
        className={cn('font-hand text-[1.45rem] leading-[1.15]', allAwake ? 'text-marker-ink' : 'text-ink-2')}
        aria-live="polite"
      >
        {allAwake
          ? 'Right now, everyone is awake — a good time to call home.'
          : 'Right now, someone is asleep. The call waits.'}
      </p>
    </section>
  )
}

export function useActiveChapter(ids) {
  const [active, setActive] = useState(null)
  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean)
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -54% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [ids])
  return active
}

export function ChapterNav({ chapters, active }) {
  return (
    <nav className="fixed top-1/2 right-5 z-40 hidden -translate-y-1/2 xl:block" aria-label="Chapters">
      <ol className="grid gap-[0.7rem]">
        {chapters.map((c) => (
          <li key={c.id}>
            <a
              href={`#${c.id}`}
              aria-current={active === c.id ? 'location' : undefined}
              className="group flex flex-row-reverse items-center gap-[0.6rem] text-xs tracking-[0.1em] text-ink-2 uppercase no-underline aria-[current]:text-ink"
            >
              <span className="w-[1.6rem] border-b-2 border-transparent pb-[2px] text-center font-semibold tabular-nums group-aria-[current]:border-marker">
                {c.number}
              </span>
              <span className="translate-x-1 bg-paper px-[0.3rem] opacity-0 transition-[opacity,translate] duration-200 ease-[ease] group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100">
                {c.kicker}
              </span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
