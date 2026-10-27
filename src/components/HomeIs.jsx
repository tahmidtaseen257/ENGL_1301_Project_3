import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { cn } from '@/lib/utils'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import Seg from './Seg'
import { ways } from '../content'
import Grid from './Grid'

export default function HomeIs({ hint, people }) {
  const [sel, setSel] = useState(people[0].id)
  const reduce = useReducedMotion()
  const p = people.find((q) => q.id === sel) ?? people[0]
  const label = (id) => ways.find((w) => w.id === id)?.label ?? id
  const count = (id) => people.filter((q) => q.ways.includes(id)).length

  return (
    <Grid as="section" className="mt-[clamp(3rem,8vh,5rem)] items-start gap-y-10" aria-labelledby="homeis-title">
      <div className="md:col-[1/7]">
        <h3 id="homeis-title" className="text-xs font-semibold tracking-[0.14em] uppercase">
          Home, for me now, is…
        </h3>
        <p className="mt-1 mb-4 text-xs text-ink-2">{hint}</p>

        <Seg value={sel} onChange={setSel} options={people.map((q) => [q.id, q.name])} label="Choose a student" />

        <div className="mt-6 min-h-64 border-t-2 border-ink pt-4" aria-live="polite">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={p.id}
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0, transition: { duration: 0 } } : { opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-xs font-semibold tracking-[0.14em] text-marker-ink uppercase">
                {p.name} · {p.from}
              </p>
              <p className="mt-4 font-serif text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.08] tracking-[-0.01em] italic">
                Home is {p.definition}.
              </p>
              <p className="mt-5 text-xs font-semibold tracking-[0.14em] text-ink-2 uppercase">
                Keeps in touch through
              </p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {p.ways.map((id) => (
                  <li key={id} className="rounded-full border-[1.5px] border-ink px-[0.8rem] py-[0.2rem] text-sm">
                    {label(id)}
                  </li>
                ))}
              </ul>
              <p className="mt-4 max-w-[46ch] text-sm">{p.detail}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="md:col-[8/-1]">
        <h3 className="mb-2 text-xs font-semibold tracking-[0.14em] uppercase">How each keeps in touch</h3>
        <Table className="text-xs">
          <caption className="sr-only">
            Which of six ways each student keeps in touch with home. The last row counts how many students use each way.
          </caption>
          <TableHeader>
            <TableRow className="border-ink hover:bg-transparent">
              <TableHead className="h-auto px-0 py-2">
                <span className="sr-only">Student</span>
              </TableHead>
              {ways.map((w) => (
                <TableHead
                  key={w.id}
                  className="h-auto px-0 py-2 text-center text-[0.58rem] font-semibold tracking-normal text-ink uppercase md:text-[0.65rem] md:tracking-[0.06em]"
                >
                  <span aria-hidden="true">{w.short}</span>
                  <span className="sr-only">{w.label}</span>
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {people.map((q) => (
              <TableRow key={q.id} className={cn('border-rule hover:bg-paper-2', q.id === sel && 'bg-paper-2')}>
                <TableCell className="p-0">
                  <button
                    type="button"
                    aria-pressed={q.id === sel}
                    onClick={() => setSel(q.id)}
                    className="w-full py-2 pr-2 text-left text-sm font-medium"
                  >
                    {q.name}
                  </button>
                </TableCell>
                {ways.map((w) => (
                  <TableCell key={w.id} className="px-0 py-2 text-center">
                    {q.ways.includes(w.id) ? (
                      <>
                        <span aria-hidden="true" className="inline-block size-3 rounded-full bg-marker" />
                        <span className="sr-only">yes</span>
                      </>
                    ) : (
                      <>
                        <span aria-hidden="true" className="text-ink-2">
                          –
                        </span>
                        <span className="sr-only">no</span>
                      </>
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
            <TableRow className="border-t-2 border-ink font-semibold hover:bg-transparent">
              <TableCell className="px-0 py-2 text-xs tracking-[0.06em] uppercase">All {people.length}</TableCell>
              {ways.map((w) => (
                <TableCell key={w.id} className="px-0 py-2 text-center tabular-nums">
                  {count(w.id)}
                </TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
        <p className="mt-3 text-xs text-ink-2">
          Dot = this student named it. Bottom row = how many of {people.length}.
        </p>
      </div>
    </Grid>
  )
}
