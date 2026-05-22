"use client";

import { ReactNode } from "react";
import { LangProvider, LangToggle, T, useLang } from "./lang";
import { SECTIONS, PANELS, SCIENCE_NET, COLLECTIVE_NET } from "./content";
import IdeaCanvas from "./IdeaCanvas";
import CreationGallery from "./CreationGallery";
import RecombinationGraph from "./RecombinationGraph";
import Timeline from "./Timeline";
import InfluenceTree from "./InfluenceTree";
import NetworkGraph from "./NetworkGraph";
import MathToggle from "./MathToggle";
import MemeMutation from "./MemeMutation";
import AICompare from "./AICompare";
import CreativityModel from "./CreativityModel";

const VIS: Record<string, ReactNode> = {
  origin: <Timeline />,
  recombine: <RecombinationGraph />,
  art: <InfluenceTree />,
  science: <NetworkGraph net={SCIENCE_NET} />,
  math: <MathToggle />,
  memes: <MemeMutation />,
  collective: <NetworkGraph net={COLLECTIVE_NET} />,
  ai: <AICompare />,
};

function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between border-b border-ink-100/10 bg-void-950/80 px-5 py-3 backdrop-blur md:px-9">
      <div className="flex items-center gap-3">
        <div className="grid h-8 w-8 place-items-center rounded-md border border-iris-500/30 bg-void-800">
          <svg viewBox="0 0 32 32" className="h-5 w-5">
            <circle cx="10" cy="11" r="3" fill="none" stroke="#7c5cff" strokeWidth="1.7" />
            <circle cx="22" cy="11" r="3" fill="none" stroke="#33d6e8" strokeWidth="1.7" />
            <path d="M11.7 13.3 L16 19 L20.3 13.3" fill="none" stroke="#c6bff0" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="16" cy="22" r="3.4" fill="#ffc94d" />
          </svg>
        </div>
        <div className="leading-tight">
          <div className="display text-base text-ink-50">Creativity Engine</div>
          <div className="zh text-[0.6rem] text-ink-500">创造力引擎</div>
        </div>
      </div>
      <nav className="hidden gap-5 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-ink-500 lg:flex">
        <a href="#origin" className="hover:text-iris-400">Origin</a>
        <a href="#recombine" className="hover:text-iris-400">Recombine</a>
        <a href="#art" className="hover:text-iris-400">Art</a>
        <a href="#science" className="hover:text-iris-400">Science</a>
        <a href="#ai" className="hover:text-iris-400">AI</a>
        <a href="#model" className="hover:text-iris-400">Model</a>
      </nav>
      <div className="flex items-center gap-3">
        <LangToggle />
        <a href="https://psyverse.fun" className="hidden font-mono text-[0.6rem] uppercase tracking-[0.18em] text-cyan-400 hover:text-iris-400 sm:block">← Psyverse</a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="absolute inset-0 z-0">
        <IdeaCanvas />
      </div>
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-void-950/20 via-transparent to-void-950" />
      <div className="relative z-20 mx-auto w-full max-w-6xl px-6 md:px-12">
        <div className="label-mono">Psyverse · The creativity engine</div>
        <div className="mt-2 font-mono text-[0.6rem] uppercase tracking-[0.3em] text-ink-500">
          EN · 中文 · recombination × abstraction × novelty × cross-domain synthesis
        </div>
        <h1 className="display mt-6 text-6xl leading-[0.92] text-ink-50 md:text-8xl">
          Creativity <span className="spark-text">Engine</span>
        </h1>
        <h2 className="zh mt-3 text-3xl text-ink-200 md:text-5xl">创造力引擎</h2>

        <p className="mt-9 max-w-2xl font-serif text-lg leading-relaxed text-ink-100 md:text-xl">
          <T v={{
            en: "Creativity is not magic. It is the capacity to combine distant concepts, mutate patterns, simulate alternatives, and generate novelty — to rearrange what already exists into structures that did not. This is an atlas of that engine, running across biology, play, art, mathematics, science, the internet, and AI.",
            zh: "创造力不是魔法。它是一种能力：组合遥远的概念、变异既有的模式、模拟可能的替代、生成新颖之物——把已经存在的东西，重排成此前不存在的结构。这是一张关于那台引擎的图志，它运行于生物、游戏、艺术、数学、科学、互联网与 AI 之间。",
          }} />
        </p>

        <div className="mt-10 max-w-2xl idea rounded-lg p-6">
          <div className="label-mono">Central thesis · 核心论点</div>
          <p className="mt-3 font-serif text-xl leading-relaxed text-ink-50 md:text-2xl">
            <T v={{
              en: "Creativity is the process by which intelligence generates new realities from existing structures.",
              zh: "创造力，是智能从既有结构中生成新现实的过程。",
            }} />
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-2 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ink-500">
          <span>10 systems · 十大系统</span>
          <span>10 creations · 十项创造</span>
          <span>recombination · imagination · invention · emergence</span>
        </div>
      </div>
    </section>
  );
}

function SectionBlock({ num, id, title, sub, body, vis }: { num: string; id: string; title: any; sub: any; body: any; vis?: ReactNode; }) {
  return (
    <section id={id} className="relative border-t border-ink-100/8 px-6 py-24 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-baseline gap-4">
          <span className="display text-5xl text-iris-500/30">{num}</span>
          <div>
            <h2 className="display text-4xl text-ink-50 md:text-5xl"><T v={title} /></h2>
            <h3 className="mt-1 text-lg text-cyan-400"><T v={sub} /></h3>
          </div>
        </div>
        <div className="mt-5 h-px rule-iris opacity-60" />
        <p className="mt-8 max-w-3xl font-serif text-lg leading-relaxed text-ink-200"><T v={body} /></p>
        {vis && <div className="mt-12">{vis}</div>}
      </div>
    </section>
  );
}

function ConceptPanels({ id }: { id: string }) {
  const { lang } = useLang();
  const set = PANELS[id];
  if (!set) return null;
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {set.map((c, i) => (
        <div key={i} className="idea rounded-xl p-5">
          <div key={lang} className={`display text-xl text-iris-300 lang-fade ${lang === "zh" ? "zh" : ""}`}>{c.t[lang]}</div>
          <p key={`d-${lang}`} className={`mt-2 text-sm leading-relaxed text-ink-300 lang-fade ${lang === "zh" ? "zh" : ""}`}>{c.d[lang]}</p>
        </div>
      ))}
    </div>
  );
}

function sectionProps(id: string) {
  const s = SECTIONS.find((x) => x.id === id)!;
  return { num: s.num, id: s.id, title: s.title, sub: s.sub, body: s.body };
}

function Body() {
  const { lang } = useLang();
  return (
    <main className="relative bg-void-950 text-ink-100">
      <Header />
      <Hero />

      <div className="border-y border-ink-100/10 bg-void-900 py-2.5 overflow-hidden">
        <div className="whitespace-nowrap font-mono text-[0.65rem] uppercase tracking-[0.3em] text-iris-400/80">
          {(lang === "zh"
            ? "重组 · 抽象 · 模拟 · 跨域迁移 · 类比 · 新颖生成 · 涌现 · 创造力，是智能重排现实的方式 · "
            : "RECOMBINATION · ABSTRACTION · SIMULATION · CROSS-DOMAIN TRANSFER · ANALOGY · NOVELTY · EMERGENCE · CREATIVITY IS HOW INTELLIGENCE REARRANGES REALITY · ").repeat(2)}
        </div>
      </div>

      {/* The creations gallery */}
      <section id="creations" className="relative border-t border-ink-100/8 px-6 py-24 md:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="label-mono">The specimens · 标本</div>
          <h2 className="display mt-3 text-4xl text-ink-50 md:text-5xl">
            <T v={{ en: "Ten creations, dissected", zh: "十项创造，逐一拆解" }} />
          </h2>
          <p className="mt-6 max-w-3xl font-serif text-lg leading-relaxed text-ink-200">
            <T v={{
              en: "Pick apart almost any landmark — an aircraft, a print press, an art movement, a number system — and you find it was assembled from older parts joined in a new relationship. Open each to see what it recombined, what the genuine leap was, and what it did to the world.",
              zh: "拆解几乎任何一座里程碑——一架飞机、一台印刷机、一场艺术运动、一套数系——你都会发现，它是由更古老的部件，以一种新的关系拼装而成。展开任意一项，看它重组了什么、真正的飞跃在哪里、又对世界做了什么。",
            }} />
          </p>
          <div className="mt-12"><CreationGallery /></div>
        </div>
      </section>

      {/* Sections 01–10 */}
      {SECTIONS.map((s) => (
        <SectionBlock key={s.id} {...sectionProps(s.id)} vis={VIS[s.id] ?? <ConceptPanels id={s.id} />} />
      ))}

      {/* Meta-model */}
      <section id="model" className="relative border-t border-ink-100/8 px-6 py-24 md:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="label-mono">Meta-model · 元模型</div>
          <h2 className="display mt-3 text-4xl text-ink-50 md:text-5xl">
            <T v={{ en: "The Creativity-Capacity model", zh: "创造力容量模型" }} />
          </h2>
          <p className="mt-6 max-w-3xl font-serif text-lg leading-relaxed text-ink-200">
            <T v={{
              en: "If creativity is a process, it has components. Score any creation across seven capacities — pattern recognition, symbolic recombination, abstraction, simulation depth, cross-domain transfer, emotional modelling, novelty generation — and its distinctive shape appears. Mathematics spikes on abstraction; jazz on emotion; the blockchain on recombination.",
              zh: "如果创造力是一个过程，它便有其组分。把任意一项创造在七种容量上打分——模式识别、符号重组、抽象能力、模拟深度、跨域迁移、情感建模、新颖生成——它独特的形状便会显现。数学在抽象上尖峰，爵士在情感上尖峰，区块链在重组上尖峰。",
            }} />
          </p>
          <div className="mt-12"><CreativityModel /></div>
        </div>
      </section>

      {/* Closing */}
      <section className="relative border-t border-ink-100/8 px-6 py-32 md:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="display text-4xl leading-snug text-ink-50 md:text-6xl">
            <T v={{ en: "Civilisation advances because humans generate realities that did not previously exist.", zh: "文明之所以前进，因为人类能生成此前并不存在的现实。" }} />
          </h2>
          <p className="mx-auto mt-8 max-w-2xl font-serif text-lg leading-relaxed text-ink-300">
            <T v={{
              en: "Every invention, theory, artwork, technology, myth and startup began as a creative restructuring of existing patterns into something radically new. Creativity is not merely expression — it is one of the deepest mechanisms by which intelligence transforms the universe, and the next phase of it will be run, in part, by minds we are only now learning to build.",
              zh: "每一项发明、每一种理论、每一件艺术、每一项技术、每一则神话、每一家创业公司，都始于把既有模式创造性地重构为某种全然崭新之物。创造力不仅是表达——它是智能改造宇宙最深层的机制之一；而它的下一阶段，将部分地，由我们如今才刚刚学会建造的心智来运行。",
            }} />
          </p>
          <div className="mx-auto mt-10 max-w-xl rounded-lg border border-iris-500/25 bg-void-900 p-5">
            <p className="text-xs leading-relaxed text-ink-500">
              <T v={{
                en: "A conceptual and educational resource on the structure of creativity, drawing on cognitive science, art history, the history of science and technology. Interpretive, not the last word — creativity remains gloriously unsettled.",
                zh: "一份关于创造力之结构的概念性、教育性资料，取材于认知科学、艺术史、科学与技术史。它是诠释，而非定论——创造力，依旧光荣地悬而未决。",
              }} />
            </p>
          </div>
          <div className="mx-auto mt-12 h-px w-40 rule-iris" />
          <p className="mt-6 font-mono text-[0.6rem] uppercase tracking-[0.4em] text-cyan-400/70">
            Creativity Engine · 创造力引擎 · Psyverse · 2026
          </p>
        </div>
      </section>

      <footer className="border-t border-ink-100/10 bg-void-950 px-6 py-16 md:px-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <div className="display text-xl text-ink-50">Creativity Engine</div>
            <div className="zh mt-1 text-sm text-ink-300">创造力引擎</div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-500">
              <T v={{ en: "The nature of creativity, innovation, novelty, symbolic recombination and human creation systems.", zh: "创造力、创新、新颖性、符号重组与人类创造系统的本质。" }} />
            </p>
          </div>
          <div>
            <div className="label-mono">Systems · 系统</div>
            <ul className="mt-4 space-y-1.5 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-ink-500">
              {SECTIONS.slice(0, 6).map((s) => (
                <li key={s.id}><a href={`#${s.id}`} className="hover:text-iris-400">{s.num} · <T v={s.title} /></a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="label-mono">Companion archives</div>
            <ul className="mt-4 space-y-1.5 text-sm text-ink-300">
              <li><a href="https://innovation-engines.psyverse.fun" className="hover:text-iris-300">Innovation Engines · 创新引擎</a></li>
              <li><a href="https://mind-vs-machine.psyverse.fun" className="hover:text-iris-300">Mind vs Machine · 心智与机器</a></li>
              <li><a href="https://vision-stack.psyverse.fun" className="hover:text-iris-300">Vision Stack · 视觉栈</a></li>
              <li className="pt-3"><a href="https://psyverse.fun" className="text-cyan-400 hover:text-iris-300">↩ All Psyverse archives</a></li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-12 h-px max-w-7xl rule-iris" />
        <div className="mx-auto mt-6 flex max-w-7xl items-center justify-between text-[0.58rem] uppercase tracking-[0.3em] text-ink-500">
          <div>© 2026 Gewenbo · Psyverse</div>
          <div>EN · 中文 · educational</div>
        </div>
      </footer>
    </main>
  );
}

export default function CreativityEngine() {
  return (
    <LangProvider>
      <Body />
    </LangProvider>
  );
}
