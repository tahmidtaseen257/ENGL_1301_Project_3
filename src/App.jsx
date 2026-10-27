import { MotionConfig } from 'motion/react'
import { cn } from '@/lib/utils'
import { meta, chapters, method, worksCited } from './content'
import Figure from './components/Figure'
import Doodle, { Mark } from './components/Doodle'
import Grid from './components/Grid'
import HomeIs from './components/HomeIs'
import Reveal from './components/Reveal'
import Scrolly from './components/Scrolly'
import { ChapterHead, PullQuote, ProgressBar } from './components/Blocks'
import { RichText, Distance, Compare, Pantry, Clocks, ChapterNav, useActiveChapter } from './components/Interactive'

const byId = Object.fromEntries(chapters.map((c) => [c.id, c]))
const chapterIds = chapters.map((c) => c.id)
const colophonHead = 'mb-[0.9rem] border-t border-paper pt-3 text-xs font-semibold tracking-[0.14em] uppercase'

function Prose({ paragraphs, className = '' }) {
  return (
    <div className={cn('max-w-[62ch] md:col-[4/10] [&>p+p]:mt-[1.1em]', className)}>
      {paragraphs.map((p, i) => (
        <Reveal as="p" key={i} delay={i * 0.04}>
          <RichText text={p} />
        </Reveal>
      ))}
    </div>
  )
}

function Statement({ title, note, sections }) {
  return (
    <section
      id="statement"
      className="mt-[clamp(5rem,12vh,8rem)] border-y-2 border-ink bg-paper-2 py-section"
      aria-labelledby="statement-title"
    >
      <Grid className="gap-y-10">
        <div className="md:col-[1/5]">
          <p className="-rotate-2 font-hand text-[1.6rem] leading-[1.1] text-marker-ink">behind the project</p>
          <h2
            id="statement-title"
            className="mt-3 max-w-[14ch] font-serif text-[clamp(2rem,3.2vw,2.8rem)] leading-[1.03] font-normal"
          >
            {title}
          </h2>
          <p className="mt-4 max-w-[28ch] text-xs leading-normal text-ink-2">{note}</p>
        </div>
        <ol className="border-t-2 border-ink md:col-[5/12]">
          {sections.map((s, i) => (
            <li
              key={s.heading}
              className="grid gap-x-gutter gap-y-2 border-b border-rule py-6 md:grid-cols-[3.5rem_1fr]"
            >
              <span className="text-xs font-semibold tracking-[0.14em] text-ink-2 tabular-nums">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="mb-2 text-xs font-semibold tracking-[0.14em] uppercase">{s.heading}</h3>
                <div className="max-w-[62ch] [&>p+p]:mt-[1.1em]">
                  {s.body.map((p, k) => (
                    <p key={k}>
                      <RichText text={p} />
                    </p>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Grid>
    </section>
  )
}

function Hero() {
  return (
    <Grid
      as="section"
      className="items-start gap-y-10 pt-[clamp(3rem,8vh,6rem)] pb-section md:grid-rows-[auto_auto]"
      aria-labelledby="title"
    >
      <div className="md:col-[1/8] md:row-1">
        <h1
          id="title"
          className="font-serif text-[clamp(2.4rem,5.2vw,4.8rem)] leading-[0.9] font-normal tracking-[-0.025em]"
        >
          <span className="block">{meta.title[0]}</span>
          <span className="block pl-[0.7em] italic">
            <Mark shape="underline" delay={0.6} className="block">
              {meta.title[1]}
            </Mark>
          </span>
        </h1>
        <p className="mt-8 max-w-[34ch] text-lead leading-[1.45]">{meta.deck}</p>
      </div>

      <div className="md:col-[8/-1] md:row-[1/3]">
        <Figure {...meta.heroFigure} tape="top" tilt={1.5} className="w-full" />
        <Distance {...meta.distance} />
      </div>

      <dl className="grid grid-cols-2 gap-x-gutter gap-y-4 border-t border-ink pt-3 md:col-[1/8] md:row-2 md:grid-cols-4">
        {meta.byline.map(([k, v]) => (
          <div key={k}>
            <dt className="text-xs tracking-[0.1em] text-ink-2 uppercase">{k}</dt>
            <dd className="text-sm font-medium">{v}</dd>
          </div>
        ))}
      </dl>
    </Grid>
  )
}

export default function App() {
  const active = useActiveChapter(chapterIds)
  const current = byId[active]
  const { leaving, ideas, kitchen, call, reflection } = byId

  return (
    <MotionConfig reducedMotion="user">
      <a
        className="absolute -top-16 left-4 z-100 bg-ink px-4 py-[0.6rem] text-sm text-paper no-underline focus:top-4"
        href="#story"
      >
        Skip to story
      </a>
      <ProgressBar />

      <header className="sticky top-0 z-50 h-masthead border-b border-rule bg-paper/90 text-xs tracking-[0.1em] uppercase backdrop-blur-sm">
        <Grid className="h-full items-center">
          <span className="font-semibold md:col-[1/7]">{meta.title.join(' ')}</span>
          <span className="hidden text-ink-2 md:col-[7/-1] md:block md:justify-self-end" aria-live="off">
            {current ? `${current.number} — ${current.kicker}` : 'ENGL 1301 — Project 3'}
          </span>
        </Grid>
      </header>

      <ChapterNav chapters={chapters} active={active} />

      <main id="story">
        <Hero />

        <section id="leaving" className="pb-section" aria-labelledby="leaving-title">
          <ChapterHead {...leaving} />
          <Grid>
            <Prose paragraphs={leaving.body} className="md:col-[5/11]" />
          </Grid>
          <Grid className="mt-[clamp(3rem,8vh,5rem)]">
            <Compare {...leaving.compare} />
          </Grid>
        </section>

        <section id="ideas" className="pb-section" aria-labelledby="ideas-title">
          <ChapterHead {...ideas} />
          <Grid>
            <Prose paragraphs={ideas.body} />
          </Grid>
          <HomeIs {...ideas.explorer} />
        </section>

        <section id="kitchen" className="pb-section" aria-labelledby="kitchen-title">
          <ChapterHead {...kitchen} />
          <Scrolly steps={kitchen.steps} />
          <Pantry {...kitchen.pantry} />
        </section>

        <section id="call" className="pb-section" aria-labelledby="call-title">
          <ChapterHead {...call} />
          <Grid>
            <Prose paragraphs={call.body} />
          </Grid>
          <PullQuote {...call.quote} />
          <Grid>
            <div className="md:col-[4/10]">
              <Clocks {...call.clocks} />
            </div>
          </Grid>
        </section>

        <section id="reflection" className="pb-section" aria-labelledby="reflection-title">
          <ChapterHead {...reflection} />
          <Grid>
            <Prose paragraphs={reflection.body} />
          </Grid>
          <div className="mt-16 grid place-items-center" aria-hidden="true">
            <Doodle shape="scribble" strokeWidth={2.5} className="h-[24px] w-[120px]" />
          </div>
        </section>

        <Statement {...reflection.statement} />
      </main>

      <footer className="bg-ink pt-16 pb-12 text-paper">
        <Grid className="gap-y-10">
          <div className="md:col-[1/6]">
            <h2 className={colophonHead}>Method &amp; consent</h2>
            <p className="text-sm text-[#d9d4ca]">{method}</p>
          </div>
          <div className="md:col-[7/-1]">
            <h2 className={colophonHead}>Works Cited</h2>
            <ul className="list-disc pl-[1.1rem] text-sm text-[#d9d4ca] [&>li+li]:mt-[0.4rem]">
              {worksCited.map((w, i) => (
                <li key={i}>{w}</li>
              ))}
            </ul>
          </div>
          <p className="font-hand text-[1.4rem] text-paper">Built by hand with React, Vite and Motion.</p>
        </Grid>
      </footer>
    </MotionConfig>
  )
}
