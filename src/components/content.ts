import { Bi } from "./lang";

/* ============================================================
   THE CREATIONS — famous recombinations
   Each is shown in the gallery + drives the recombination graph.
   The seven scores are the brief's Creativity-Capacity dimensions.
   ============================================================ */
export type Creation = {
  key: string;
  name: Bi;
  domain: Bi;
  glyph: string;            // procedural glyph archetype
  formula: Bi;              // the recombination, read as an equation
  sources: Bi[];            // source patterns fused (drives the graph)
  leap: Bi;                 // the creative leap — what was genuinely new
  impact: Bi;               // what it did to civilisation
  // 0–100 across the seven creativity-capacity dimensions
  pattern: number; recombine: number; abstract: number; simulate: number;
  transfer: number; emotion: number; novelty: number;
  accent: string;
};

export const CREATIONS: Creation[] = [
  {
    key: "airplane",
    name: { en: "The Airplane", zh: "飞机" },
    domain: { en: "Engineering · 1903", zh: "工程 · 1903" },
    glyph: "wave",
    formula: { en: "soaring birds + lift theory + light engine + bicycle control", zh: "翱翔的鸟 + 升力理论 + 轻型引擎 + 自行车式操控" },
    sources: [
      { en: "Birds & gliding flight", zh: "鸟类与滑翔" },
      { en: "Bernoulli / lift theory", zh: "伯努利 / 升力理论" },
      { en: "Lightweight petrol engine", zh: "轻型汽油引擎" },
      { en: "Bicycle balance & control", zh: "自行车的平衡与操控" },
    ],
    leap: { en: "The Wrights' real invention was not power but control — warping the wing to steer in three axes, treating flight as a balance problem like a bicycle, not a brute-force one.", zh: "莱特兄弟真正的发明并非动力，而是操控——通过翘曲机翼实现三轴转向，把飞行当作类似骑车的平衡问题，而非蛮力问题。" },
    impact: { en: "Within a single lifetime, an idea built from birds and bicycles shrank the planet and rewrote war, trade and migration.", zh: "在一代人的时间里，一个由鸟与自行车拼接出的想法，缩小了整个星球，重写了战争、贸易与迁徙。" },
    pattern: 80, recombine: 88, abstract: 70, simulate: 82, transfer: 92, emotion: 55, novelty: 84, accent: "#33d6e8",
  },
  {
    key: "press",
    name: { en: "The Printing Press", zh: "印刷机" },
    domain: { en: "Technology · c.1440", zh: "技术 · 约1440" },
    glyph: "lattice",
    formula: { en: "wine press + coin punch + movable metal type + paper", zh: "葡萄榨汁机 + 钱币冲压 + 活字金属字模 + 纸" },
    sources: [
      { en: "Screw press (wine / olives)", zh: "螺旋压榨机（酒 / 橄榄）" },
      { en: "Coin punch & metallurgy", zh: "钱币冲压与冶金" },
      { en: "Paper (China → Islam → Europe)", zh: "纸（中国 → 伊斯兰 → 欧洲）" },
      { en: "Block printing & ink", zh: "雕版印刷与油墨" },
    ],
    leap: { en: "Gutenberg's leap was reusable, recombinable units — cast-metal letters that could be set, inked, pressed and re-sorted, turning a wine press into a machine for copying minds.", zh: "古腾堡的飞跃在于「可复用、可重组的单元」——铸造的金属字母可被排版、上墨、压印、再拆解，把一台榨酒机变成了复制思想的机器。" },
    impact: { en: "Reproducible text detonated the Reformation, the scientific revolution and mass literacy. The recombinable unit became civilisation's master pattern.", zh: "可复制的文本引爆了宗教改革、科学革命与大众识字。「可重组的单元」由此成为文明的母版模式。" },
    pattern: 75, recombine: 95, abstract: 72, simulate: 60, transfer: 90, emotion: 40, novelty: 86, accent: "#9b7cff",
  },
  {
    key: "cubism",
    name: { en: "Cubism", zh: "立体主义" },
    domain: { en: "Art · 1907", zh: "艺术 · 1907" },
    glyph: "fold",
    formula: { en: "Cézanne's facets + African masks + simultaneity − single viewpoint", zh: "塞尚的切面 + 非洲面具 + 同时性 − 单一视点" },
    sources: [
      { en: "Cézanne's faceted form", zh: "塞尚的切面化造型" },
      { en: "African & Iberian masks", zh: "非洲与伊比利亚面具" },
      { en: "Simultaneous viewpoints", zh: "多重同时视点" },
      { en: "Photography's challenge", zh: "摄影的挑战" },
    ],
    leap: { en: "Picasso and Braque showed an object from many viewpoints at once on a flat plane — abolishing the single fixed eye that had ruled European painting for five centuries.", zh: "毕加索与布拉克在同一平面上同时呈现物体的多重视点——废除了统治欧洲绘画五百年的那只固定的眼睛。" },
    impact: { en: "Once representation was no longer obliged to copy a single view, the door to abstraction, collage and the whole of modern art swung open.", zh: "一旦再现不再受制于「复制单一视角」，通往抽象、拼贴乃至整个现代艺术的大门便随之敞开。" },
    pattern: 70, recombine: 82, abstract: 90, simulate: 75, transfer: 80, emotion: 88, novelty: 95, accent: "#ff5fa2",
  },
  {
    key: "calculus",
    name: { en: "Calculus", zh: "微积分" },
    domain: { en: "Mathematics · c.1670", zh: "数学 · 约1670" },
    glyph: "spiral",
    formula: { en: "Greek exhaustion + coordinate geometry + physics of motion + the infinitesimal", zh: "希腊穷竭法 + 坐标几何 + 运动物理 + 无穷小" },
    sources: [
      { en: "Greek method of exhaustion", zh: "希腊穷竭法" },
      { en: "Cartesian coordinates", zh: "笛卡尔坐标" },
      { en: "Physics of motion & change", zh: "运动与变化的物理" },
      { en: "The infinitesimal", zh: "无穷小量" },
    ],
    leap: { en: "Newton and Leibniz built a symbolic machine for two impossible-seeming questions: the instantaneous rate of change, and the exact sum of infinitely many infinitely small parts.", zh: "牛顿与莱布尼茨为两个看似不可能的问题造出一台符号机器：瞬时变化率，与无穷多个无穷小部分的精确总和。" },
    impact: { en: "Calculus became the native language of change — without it there is no physics, no engineering, no modern economics, no rocket and no climate model.", zh: "微积分成为「变化」的母语——没有它，便没有物理、没有工程、没有现代经济学、没有火箭，也没有气候模型。" },
    pattern: 82, recombine: 80, abstract: 98, simulate: 88, transfer: 90, emotion: 30, novelty: 90, accent: "#3fe3a8",
  },
  {
    key: "jazz",
    name: { en: "Jazz", zh: "爵士乐" },
    domain: { en: "Music · c.1900s", zh: "音乐 · 约1900年代" },
    glyph: "flow",
    formula: { en: "West-African polyrhythm + European harmony + the blues + live improvisation", zh: "西非复节奏 + 欧洲和声 + 蓝调 + 即兴现场" },
    sources: [
      { en: "West-African polyrhythm", zh: "西非复节奏" },
      { en: "European harmony & instruments", zh: "欧洲和声与乐器" },
      { en: "The blues", zh: "蓝调" },
      { en: "Improvisation as composition", zh: "即兴即作曲" },
    ],
    leap: { en: "Jazz collapsed the wall between composer and performer: the solo is composition happening in real time, novelty generated live, once, and never the same way twice.", zh: "爵士乐推倒了作曲者与演奏者之间的墙：独奏即是实时发生的作曲——新颖性当场生成，只此一次，永不重复。" },
    impact: { en: "It reshaped twentieth-century music and exported a new ideal: the artist as an improvising, recombining intelligence rather than a faithful interpreter.", zh: "它重塑了二十世纪的音乐，并输出了一种新理想：艺术家是即兴、重组的智能，而非忠实的诠释者。" },
    pattern: 78, recombine: 90, abstract: 65, simulate: 70, transfer: 84, emotion: 95, novelty: 86, accent: "#ffc94d",
  },
  {
    key: "blockchain",
    name: { en: "The Blockchain", zh: "区块链" },
    domain: { en: "Systems · 2008", zh: "系统 · 2008" },
    glyph: "orbit",
    formula: { en: "public-key crypto + hash chains + Byzantine consensus + economic incentive", zh: "公钥密码 + 哈希链 + 拜占庭共识 + 经济激励" },
    sources: [
      { en: "Public-key cryptography", zh: "公钥密码学" },
      { en: "Merkle trees & hash chains", zh: "默克尔树与哈希链" },
      { en: "Byzantine fault tolerance", zh: "拜占庭容错" },
      { en: "Game-theoretic incentives", zh: "博弈论激励" },
    ],
    leap: { en: "Nakamoto fused decades-old, separately useless pieces into one thing none of them could do alone: agreement among strangers with no trusted authority in the middle.", zh: "中本聪把数十年来各自无用的零件融合为一件它们单独都做不到的事：陌生人之间无需中心信任方即可达成共识。" },
    impact: { en: "Whatever one thinks of its excesses, it reframed money, ownership and coordination as problems a recombination of old maths could re-solve.", zh: "无论如何评价其泡沫，它都把货币、所有权与协调，重新定义为「旧数学的重组」可以重解的问题。" },
    pattern: 80, recombine: 96, abstract: 85, simulate: 78, transfer: 88, emotion: 35, novelty: 82, accent: "#33d6e8",
  },
  {
    key: "transistor",
    name: { en: "The Transistor", zh: "晶体管" },
    domain: { en: "Science · 1947", zh: "科学 · 1947" },
    glyph: "burst",
    formula: { en: "quantum solids + semiconductor doping + the tube's switch/amplify role", zh: "固体量子论 + 半导体掺杂 + 电子管的开关/放大功能" },
    sources: [
      { en: "Quantum mechanics of solids", zh: "固体的量子力学" },
      { en: "Semiconductor doping", zh: "半导体掺杂" },
      { en: "Vacuum tube: switch & amplify", zh: "真空管：开关与放大" },
      { en: "Materials: germanium / silicon", zh: "材料：锗 / 硅" },
    ],
    leap: { en: "Bardeen, Brattain and Shockley moved the vacuum tube's function — switching and amplifying current — into a sliver of solid crystal with no moving parts and no glowing filament.", zh: "巴丁、布拉顿与肖克利把真空管的功能——开关与放大电流——搬进了一小片固态晶体，既无运动部件，也无炽热灯丝。" },
    impact: { en: "The transistor is the atom of computation. Every chip, phone, server and neural network is a vast city built from billions of copies of this single idea.", zh: "晶体管是计算的原子。每一枚芯片、每一部手机、每一台服务器、每一个神经网络，都是由这一个想法的数十亿份拷贝筑成的庞大城市。" },
    pattern: 85, recombine: 84, abstract: 90, simulate: 80, transfer: 95, emotion: 25, novelty: 88, accent: "#9b7cff",
  },
  {
    key: "cinema",
    name: { en: "Cinema", zh: "电影" },
    domain: { en: "Art · Tech · 1895", zh: "艺术 · 技术 · 1895" },
    glyph: "mirror",
    formula: { en: "photography + persistence of vision + projection + narrative", zh: "摄影 + 视觉暂留 + 投影 + 叙事" },
    sources: [
      { en: "Photography", zh: "摄影" },
      { en: "Persistence of vision", zh: "视觉暂留" },
      { en: "Magic lantern & projection", zh: "幻灯与投影" },
      { en: "Theatrical narrative", zh: "戏剧叙事" },
    ],
    leap: { en: "Run still photographs fast enough and frozen instants become living time. Cinema discovered that motion, and then meaning, could be assembled out of a sequence of dead frames.", zh: "把静态照片播放得足够快，凝固的瞬间便成为流动的时间。电影发现：运动，乃至意义，可以由一连串「死的画格」拼装而成。" },
    impact: { en: "A century later, the assembled-image is humanity's dominant storytelling medium — and the cut, the montage, became a new grammar of thought.", zh: "一个世纪后，「拼装的影像」成为人类主导的叙事媒介——而剪辑与蒙太奇，则成为一种新的思维语法。" },
    pattern: 72, recombine: 88, abstract: 68, simulate: 80, transfer: 82, emotion: 92, novelty: 85, accent: "#ff5fa2",
  },
  {
    key: "imaginary",
    name: { en: "Imaginary Numbers", zh: "虚数" },
    domain: { en: "Mathematics · 16th c.", zh: "数学 · 16世纪" },
    glyph: "fusion",
    formula: { en: "cubic equations + the impossible √−1 + the number line + algebraic nerve", zh: "三次方程 + 不可能的 √−1 + 数轴 + 代数的胆识" },
    sources: [
      { en: "Solving cubic equations", zh: "求解三次方程" },
      { en: "The stubborn √−1", zh: "顽固的 √−1" },
      { en: "The number line", zh: "数轴" },
      { en: "Algebraic formalism", zh: "代数形式主义" },
    ],
    leap: { en: "Faced with the 'impossible' square root of a negative number, mathematicians did the audacious thing: they declared it a legal symbol, gave it a name, and learned to compute with it.", zh: "面对负数「不可能」的平方根，数学家做了一件大胆之事：宣布它是合法的符号，给它命名，并学会与之运算。" },
    impact: { en: "The impossible became indispensable — complex numbers now underpin electrical engineering, signal processing and quantum mechanics. Pure invention, later found everywhere.", zh: "不可能之物成了不可或缺之物——复数如今支撑着电气工程、信号处理与量子力学。纯粹的发明，后来却无处不在。" },
    pattern: 78, recombine: 75, abstract: 99, simulate: 82, transfer: 88, emotion: 28, novelty: 92, accent: "#3fe3a8",
  },
  {
    key: "meme",
    name: { en: "The Internet Meme", zh: "互联网模因" },
    domain: { en: "Internet culture · 1990s →", zh: "互联网文化 · 1990年代 →" },
    glyph: "branch",
    formula: { en: "image + caption template + remix culture + variation & selection + virality", zh: "图像 + 配文模板 + 混剪文化 + 变异与选择 + 病毒传播" },
    sources: [
      { en: "Image + caption template", zh: "图像 + 配文模板" },
      { en: "Copy-and-remix culture", zh: "复制—混剪文化" },
      { en: "Variation & selection", zh: "变异与选择" },
      { en: "Networked virality", zh: "网络病毒传播" },
    ],
    leap: { en: "The meme is a reusable template anyone can refill — a unit of culture engineered to mutate. Creativity here is collective, anonymous, and runs an evolutionary loop at network speed.", zh: "模因是一个人人皆可重新填充的可复用模板——一种被设计来变异的文化单元。这里的创造力是集体的、匿名的，以网络的速度运行着一个进化循环。" },
    impact: { en: "It turned the whole connected public into a single, distributed, real-time creative engine — folk art recombining and selecting itself faster than any prior medium.", zh: "它把整个连接起来的公众，变成了一台分布式的实时创造引擎——一种以快于以往任何媒介的速度自我重组、自我筛选的民间艺术。" },
    pattern: 68, recombine: 92, abstract: 60, simulate: 55, transfer: 78, emotion: 80, novelty: 70, accent: "#ffc94d",
  },
];

/* ============================================================
   THE TEN SYSTEMS (sections)
   ============================================================ */
export type Section = { num: string; id: string; title: Bi; sub: Bi; body: Bi };

export const SECTIONS: Section[] = [
  {
    num: "01", id: "origin",
    title: { en: "The Origin of the Creative Mind", zh: "创造性心智的起源" },
    sub: { en: "How a primate became a novelty-generating engine", zh: "一种灵长类如何变成新颖性的生成引擎" },
    body: { en: "Tool use, the hunt, play, imitation and above all language and symbolic thought slowly assembled a brain that could imagine what is not, recombine what is, and pass each new pattern to the next mind. No other animal runs this loop at scale. Creativity is the deep adaptation that made us a species that remakes its own world.", zh: "工具使用、狩猎、游戏、模仿，尤其是语言与符号思维，缓慢拼装出一颗能够想象「不存在之物」、重组「已有之物」、并把每一个新模式传给下一颗心智的大脑。没有其他动物能大规模运行这一循环。创造力，是那项让我们成为「重塑自身世界」之物种的深层适应。" },
  },
  {
    num: "02", id: "recombine",
    title: { en: "The Idea Recombination Engine", zh: "想法重组引擎" },
    sub: { en: "Most new things are old things, freshly joined", zh: "大多数新事物，是旧事物的新结合" },
    body: { en: "Look closely at almost any invention and it dissolves into parts that already existed, joined in a relationship that did not. Airplane = bird + engine + control. Printing = winepress + coin punch + paper. Creativity is less a bolt from the void than a search through the combinatorial space of what is already known.", zh: "仔细审视几乎任何一项发明，它都会分解为「早已存在的部件」，被组合进一种「此前不存在的关系」。飞机 = 鸟 + 引擎 + 操控；印刷 = 榨酒机 + 钱币冲压 + 纸。创造力与其说是来自虚空的闪电，不如说是在「已知之物的组合空间」中进行的一次搜索。" },
  },
  {
    num: "03", id: "art",
    title: { en: "The Artistic Creation Engine", zh: "艺术创造引擎" },
    sub: { en: "Turning emotion into transmissible symbolic form", zh: "把情感转化为可传递的符号形式" },
    body: { en: "Painting, music, cinema, poetry, architecture, fashion, game design — art is the technology for encoding an inner state into an outer object so that a stranger, decades or centuries later, can feel a structured echo of it. Each movement inherits a vocabulary, breaks one rule, and hands the new grammar forward.", zh: "绘画、音乐、电影、诗歌、建筑、时装、游戏设计——艺术是一种技术：把一种内在状态编码进一个外在客体，使得一个陌生人，在数十乃至数百年后，能感受到它那经过结构化的回响。每一场运动都继承一套词汇、打破一条规则，再把新的语法传递下去。" },
  },
  {
    num: "04", id: "science",
    title: { en: "Scientific & Technological Creativity", zh: "科学与技术的创造力" },
    sub: { en: "Discovery as imagination disciplined by reality", zh: "发现，是被现实约束的想象" },
    body: { en: "Geometry, calculus, electricity, computing, rockets, semiconductors, AI — each began as a guess about how reality might be structured, then was filtered hard against evidence. Science is not the opposite of imagination; it is imagination plus a brutal, honest test. The constraint is what makes the novelty real.", zh: "几何、微积分、电、计算、火箭、半导体、人工智能——每一项都始于「对现实可能如何构成」的一次猜测，再经由证据被严苛地筛选。科学不是想象的反面，而是想象，加上一场残酷而诚实的检验。正是那约束，使新颖性成为真实。" },
  },
  {
    num: "05", id: "math",
    title: { en: "Mathematics & Abstract Creation", zh: "数学与抽象创造" },
    sub: { en: "Discovered, or invented? The deepest creative question", zh: "被发现，还是被发明？最深的创造之问" },
    body: { en: "Numbers, algebra, imaginary units, topology, the infinite, formal systems — mathematics is creativity at its purest, building objects with no physical referent at all. And it forces the hardest question on this whole site: when we make a new mathematics, are we inventing a fiction, or uncovering something that was always true?", zh: "数与代数、虚数单位、拓扑、无穷、形式系统——数学是最纯粹的创造，构筑着全无物理对应物的客体。它也向整个网站抛出最艰难的问题：当我们造出一种新数学，我们是在发明一则虚构，还是在揭示某种本就为真之物？" },
  },
  {
    num: "06", id: "memes",
    title: { en: "Memes & Internet Creativity", zh: "模因与互联网创造力" },
    sub: { en: "Culture mutating at the speed of the network", zh: "以网络速度变异的文化" },
    body: { en: "The internet industrialised recombination. Remix culture, the meme template, viral aesthetics and collaborative tools turned billions of people into a single, distributed creative organism running variation-and-selection in public, in real time. It is folk creativity, sped up a million-fold and made visible.", zh: "互联网把「重组」工业化了。混剪文化、模因模板、病毒美学与协作工具，把数十亿人变成一个分布式的创造性有机体——在公开场合、实时地运行着「变异与选择」。这是民间创造力，被加速百万倍，并被显形。" },
  },
  {
    num: "07", id: "play",
    title: { en: "The Childhood & Play Engine", zh: "童年与游戏引擎" },
    sub: { en: "Play is the safe simulator where invention is rehearsed", zh: "游戏，是预演发明的安全模拟器" },
    body: { en: "Pretend, exploration, improvisation, experiment — play is how a young mind runs cheap, consequence-free simulations of reality and recombines its parts for fun. The same loop, kept alive into adulthood, is exactly what invention requires. Cultures and companies that protect play tend to keep generating the new.", zh: "假装、探索、即兴、试验——游戏，是一颗年幼的心智运行廉价、无后果的现实模拟、并出于乐趣重组其部件的方式。同样的循环，若被保留至成年，正是发明之所需。那些守护游戏的文化与公司，往往持续地生成新事物。" },
  },
  {
    num: "08", id: "collective",
    title: { en: "The Collective Intelligence System", zh: "集体智能系统" },
    sub: { en: "Why ideas have sex in cities, not in solitude", zh: "为何想法在城市中交配，而非在孤独中" },
    body: { en: "The lone genius is mostly a myth. Cities, trade routes, scientific communities, open-source projects and the internet are recombination machines — they raise the rate at which distant ideas collide, and the more ideas meet, the more novel offspring appear. Creativity scales with connection.", zh: "孤胆天才大多是一则神话。城市、贸易路线、科学共同体、开源项目与互联网，都是重组机器——它们提高了「遥远的想法相互碰撞」的速率；而想法相遇得越多，新颖的后代便越多。创造力，随连接而扩展。" },
  },
  {
    num: "09", id: "ai",
    title: { en: "AI & Synthetic Creativity", zh: "AI 与合成创造力" },
    sub: { en: "Does the machine create, or only interpolate?", zh: "机器是在创造，还是仅在插值？" },
    body: { en: "Generative models recombine across a space of human work larger than any one person could hold, and out come images, music and text that no human made. Is that genuine novelty or sophisticated averaging? The honest answer is: it is real combinatorial creativity without intention, stakes, or a self that cares — which forces us to ask which of those creativity actually needs.", zh: "生成模型在一个比任何个人所能容纳都更庞大的「人类作品空间」中进行重组，由此产出无人亲手制作的图像、音乐与文本。这是真正的新颖，还是精巧的平均？诚实的回答是：它是真实的组合式创造，却没有意图、没有利害、也没有一个在乎的「自我」——这逼我们去问：上述哪一项，是创造力真正需要的？" },
  },
  {
    num: "10", id: "future",
    title: { en: "The Future Creation Engine", zh: "未来创造引擎" },
    sub: { en: "When civilisation becomes a planetary creativity machine", zh: "当文明成为一台行星级的创造机器" },
    body: { en: "Human–AI co-creation, neural interfaces, generative worlds, autonomous invention systems and infinite simulation engines point toward one thing: a civilisation whose central output is novelty itself, generated faster than any single mind can review it. The question shifts from 'can we create more?' to 'what is worth creating, and who decides?'", zh: "人机协同创作、神经接口、生成式世界、自主发明系统与无限模拟引擎，共同指向一件事：一个以「新颖性本身」为核心产出的文明——其生成速度，快过任何单一心智所能审阅。问题于是从「我们能否创造得更多？」转向「什么值得被创造，又由谁来决定？」" },
  },
];

/* ============================================================
   THE SEVEN CREATIVITY-CAPACITY DIMENSIONS (meta-model radar)
   ============================================================ */
export const CREATIVITY_DIMS: { key: keyof Creation; label: Bi }[] = [
  { key: "pattern", label: { en: "Pattern recognition", zh: "模式识别" } },
  { key: "recombine", label: { en: "Symbolic recombination", zh: "符号重组" } },
  { key: "abstract", label: { en: "Abstraction ability", zh: "抽象能力" } },
  { key: "simulate", label: { en: "Simulation depth", zh: "模拟深度" } },
  { key: "transfer", label: { en: "Cross-domain transfer", zh: "跨域迁移" } },
  { key: "emotion", label: { en: "Emotional modelling", zh: "情感建模" } },
  { key: "novelty", label: { en: "Novelty generation", zh: "新颖生成" } },
];

/* ============================================================
   TIMELINE — the long arc of human creative leaps
   ============================================================ */
export type Era = { year: Bi; title: Bi; note: Bi };
export const TIMELINE: Era[] = [
  { year: { en: "~3.3 Mya", zh: "约 330 万年前" }, title: { en: "First stone tools", zh: "最早的石器" }, note: { en: "Matter deliberately reshaped for a purpose — the first externalised idea.", zh: "为目的而有意重塑的物质——第一个被外化的想法。" } },
  { year: { en: "~1.5 Mya", zh: "约 150 万年前" }, title: { en: "Symmetric hand-axe & fire", zh: "对称手斧与火" }, note: { en: "Imposed form and controlled energy: design beyond bare function.", zh: "被赋予的形式与被掌控的能量：超越纯粹功能的设计。" } },
  { year: { en: "~100 kya", zh: "约 10 万年前" }, title: { en: "Pigment, beads & ornament", zh: "颜料、珠饰与装饰" }, note: { en: "Meaning detaches from utility — the birth of the symbol.", zh: "意义脱离实用——符号的诞生。" } },
  { year: { en: "~40 kya", zh: "约 4 万年前" }, title: { en: "Cave painting & figurines", zh: "洞穴壁画与雕像" }, note: { en: "Imagination externalised onto rock; the unreal made shareable.", zh: "想象被外化到岩壁；不真实之物变得可共享。" } },
  { year: { en: "~10 kya", zh: "约 1 万年前" }, title: { en: "Agriculture & the first cities", zh: "农业与最初的城市" }, note: { en: "Ecology recombined; dense human contact multiplies idea collisions.", zh: "生态被重组；密集的人类接触，倍增了想法的碰撞。" } },
  { year: { en: "~3000 BCE", zh: "约公元前 3000" }, title: { en: "Writing", zh: "文字" }, note: { en: "Thought made storable, copyable and recombinable across time.", zh: "思想得以被储存、复制，并跨越时间重组。" } },
  { year: { en: "~500 BCE", zh: "约公元前 500" }, title: { en: "Geometry & philosophy", zh: "几何与哲学" }, note: { en: "Abstraction becomes a disciplined method, not just a flash.", zh: "抽象成为一种有纪律的方法，而不只是一闪念。" } },
  { year: { en: "c.1440", zh: "约 1440" }, title: { en: "The printing press", zh: "印刷机" }, note: { en: "Ideas copied at scale; the recombinable unit conquers culture.", zh: "想法被规模化复制；可重组的单元征服了文化。" } },
  { year: { en: "1600s", zh: "17 世纪" }, title: { en: "The scientific method", zh: "科学方法" }, note: { en: "Imagination plus a brutal test — novelty that must survive reality.", zh: "想象，加上一场残酷的检验——必须在现实中存活的新颖。" } },
  { year: { en: "1900s", zh: "20 世纪初" }, title: { en: "Flight, relativity, electronics", zh: "飞行、相对论、电子学" }, note: { en: "The modern explosion: cross-domain transfer at industrial speed.", zh: "现代的爆发：以工业速度进行的跨域迁移。" } },
  { year: { en: "1950s", zh: "20 世纪 50 年代" }, title: { en: "The computer", zh: "计算机" }, note: { en: "A general machine for manipulating symbols — creativity's new substrate.", zh: "一台操纵符号的通用机器——创造力的新基底。" } },
  { year: { en: "2020s →", zh: "2020 年代 →" }, title: { en: "Generative AI", zh: "生成式 AI" }, note: { en: "Machines that recombine the human archive at planetary scale.", zh: "以行星规模重组人类档案的机器。" } },
];

/* ============================================================
   NETWORK GRAPHS — reused for Science (04) and Collective (08)
   ============================================================ */
export type Node = { id: string; x: number; y: number; label: Bi; tag: Bi; accent: string };
export type Edge = { from: string; to: string };
export type Net = { nodes: Node[]; edges: Edge[]; caption: Bi };

export const SCIENCE_NET: Net = {
  caption: { en: "How one field's idea becomes another's instrument — the discovery network is a recombination graph.", zh: "一个领域的想法如何成为另一领域的工具——发现网络，本身就是一张重组图。" },
  nodes: [
    { id: "math", x: 130, y: 80, label: { en: "Mathematics", zh: "数学" }, tag: { en: "the substrate", zh: "基底" }, accent: "#3fe3a8" },
    { id: "physics", x: 320, y: 70, label: { en: "Physics", zh: "物理" }, tag: { en: "laws of matter", zh: "物质定律" }, accent: "#9b7cff" },
    { id: "optics", x: 130, y: 220, label: { en: "Optics", zh: "光学" }, tag: { en: "telescope · microscope", zh: "望远镜 · 显微镜" }, accent: "#33d6e8" },
    { id: "chem", x: 320, y: 230, label: { en: "Chemistry", zh: "化学" }, tag: { en: "materials", zh: "材料" }, accent: "#ff5fa2" },
    { id: "electro", x: 500, y: 120, label: { en: "Electricity", zh: "电" }, tag: { en: "field & current", zh: "场与电流" }, accent: "#ffc94d" },
    { id: "quantum", x: 510, y: 300, label: { en: "Quantum theory", zh: "量子论" }, tag: { en: "solids & light", zh: "固体与光" }, accent: "#9b7cff" },
    { id: "transistor", x: 690, y: 220, label: { en: "Transistor", zh: "晶体管" }, tag: { en: "solid-state switch", zh: "固态开关" }, accent: "#33d6e8" },
    { id: "computing", x: 740, y: 90, label: { en: "Computing", zh: "计算" }, tag: { en: "universal machine", zh: "通用机器" }, accent: "#3fe3a8" },
    { id: "ai", x: 760, y: 360, label: { en: "AI", zh: "人工智能" }, tag: { en: "learned function", zh: "习得的函数" }, accent: "#ff5fa2" },
  ],
  edges: [
    { from: "math", to: "physics" }, { from: "math", to: "optics" }, { from: "math", to: "computing" },
    { from: "physics", to: "electro" }, { from: "physics", to: "quantum" }, { from: "optics", to: "physics" },
    { from: "chem", to: "quantum" }, { from: "electro", to: "transistor" }, { from: "quantum", to: "transistor" },
    { from: "transistor", to: "computing" }, { from: "computing", to: "ai" }, { from: "transistor", to: "ai" },
  ],
};

export const COLLECTIVE_NET: Net = {
  caption: { en: "Every great burst of creation has an address — a place or network where distant minds were forced into contact.", zh: "每一次伟大的创造爆发都有一个地址——一个迫使遥远心智彼此接触的地方或网络。" },
  nodes: [
    { id: "athens", x: 120, y: 110, label: { en: "Athens", zh: "雅典" }, tag: { en: "philosophy · −400", zh: "哲学 · 前400" }, accent: "#ffc94d" },
    { id: "baghdad", x: 300, y: 70, label: { en: "House of Wisdom", zh: "智慧宫" }, tag: { en: "Baghdad · 800s", zh: "巴格达 · 9世纪" }, accent: "#3fe3a8" },
    { id: "florence", x: 250, y: 240, label: { en: "Florence", zh: "佛罗伦萨" }, tag: { en: "Renaissance · 1500", zh: "文艺复兴 · 1500" }, accent: "#ff5fa2" },
    { id: "royal", x: 470, y: 110, label: { en: "Royal Society", zh: "皇家学会" }, tag: { en: "science · 1660", zh: "科学 · 1660" }, accent: "#9b7cff" },
    { id: "vienna", x: 460, y: 300, label: { en: "Vienna", zh: "维也纳" }, tag: { en: "music · physics · 1900", zh: "音乐 · 物理 · 1900" }, accent: "#33d6e8" },
    { id: "bell", x: 640, y: 90, label: { en: "Bell Labs", zh: "贝尔实验室" }, tag: { en: "invention · 1940s", zh: "发明 · 1940年代" }, accent: "#ffc94d" },
    { id: "valley", x: 700, y: 250, label: { en: "Silicon Valley", zh: "硅谷" }, tag: { en: "tech · 1970s", zh: "技术 · 1970年代" }, accent: "#3fe3a8" },
    { id: "internet", x: 500, y: 200, label: { en: "The Internet", zh: "互联网" }, tag: { en: "everyone · now", zh: "所有人 · 当下" }, accent: "#b79bff" },
    { id: "oss", x: 760, y: 400, label: { en: "Open source", zh: "开源" }, tag: { en: "distributed making", zh: "分布式创造" }, accent: "#ff5fa2" },
  ],
  edges: [
    { from: "athens", to: "baghdad" }, { from: "baghdad", to: "florence" }, { from: "florence", to: "royal" },
    { from: "royal", to: "vienna" }, { from: "royal", to: "bell" }, { from: "bell", to: "valley" },
    { from: "vienna", to: "bell" }, { from: "internet", to: "valley" }, { from: "internet", to: "oss" },
    { from: "valley", to: "oss" }, { from: "florence", to: "vienna" },
  ],
};

/* ============================================================
   ART INFLUENCE TREE (Section 03)
   layered DAG of movements; each cites its parents
   ============================================================ */
export type ArtNode = { id: string; col: number; row: number; label: Bi; year: string; parents: string[]; accent: string };
export const ART_TREE: ArtNode[] = [
  { id: "realism", col: 0, row: 1, label: { en: "Realism", zh: "现实主义" }, year: "1850", parents: [], accent: "#8e86bd" },
  { id: "impression", col: 1, row: 1, label: { en: "Impressionism", zh: "印象派" }, year: "1870", parents: ["realism"], accent: "#33d6e8" },
  { id: "post", col: 2, row: 1, label: { en: "Post-Impressionism", zh: "后印象派" }, year: "1890", parents: ["impression"], accent: "#3fe3a8" },
  { id: "cubism", col: 3, row: 0, label: { en: "Cubism", zh: "立体主义" }, year: "1907", parents: ["post"], accent: "#ff5fa2" },
  { id: "fauvism", col: 3, row: 2, label: { en: "Fauvism", zh: "野兽派" }, year: "1905", parents: ["post"], accent: "#ffc94d" },
  { id: "abstract", col: 4, row: 1, label: { en: "Abstraction", zh: "抽象艺术" }, year: "1915", parents: ["cubism", "fauvism"], accent: "#9b7cff" },
  { id: "surreal", col: 4, row: 2, label: { en: "Surrealism", zh: "超现实主义" }, year: "1924", parents: ["cubism"], accent: "#b79bff" },
  { id: "abex", col: 5, row: 0, label: { en: "Abstract Expressionism", zh: "抽象表现主义" }, year: "1945", parents: ["abstract", "surreal"], accent: "#33d6e8" },
  { id: "pop", col: 5, row: 2, label: { en: "Pop Art", zh: "波普艺术" }, year: "1956", parents: ["abstract"], accent: "#ff5fa2" },
  { id: "digital", col: 6, row: 1, label: { en: "Digital / Generative", zh: "数字 / 生成艺术" }, year: "1990 →", parents: ["abex", "pop"], accent: "#3fe3a8" },
];

/* ============================================================
   MEME MUTATION TREE (Section 06)
   ============================================================ */
export type MemeNode = { id: string; depth: number; pos: number; label: Bi; parent: string | null; fit: number };
export const MEME_TREE: MemeNode[] = [
  { id: "root", depth: 0, pos: 0.5, label: { en: "Template", zh: "模板" }, parent: null, fit: 1 },
  { id: "a", depth: 1, pos: 0.28, label: { en: "Caption swap", zh: "替换配文" }, parent: "root", fit: 0.8 },
  { id: "b", depth: 1, pos: 0.72, label: { en: "Image swap", zh: "替换图像" }, parent: "root", fit: 0.6 },
  { id: "a1", depth: 2, pos: 0.14, label: { en: "Ironic twist", zh: "反讽变体" }, parent: "a", fit: 0.95 },
  { id: "a2", depth: 2, pos: 0.4, label: { en: "Niche in-joke", zh: "小圈梗" }, parent: "a", fit: 0.5 },
  { id: "b1", depth: 2, pos: 0.86, label: { en: "Format mashup", zh: "格式混搭" }, parent: "b", fit: 0.75 },
  { id: "a1x", depth: 3, pos: 0.1, label: { en: "Viral mutation", zh: "病毒变异" }, parent: "a1", fit: 1 },
  { id: "a1y", depth: 3, pos: 0.22, label: { en: "Dead variant", zh: "灭绝变体" }, parent: "a1", fit: 0.15 },
];

/* ============================================================
   MATH: discovered vs invented (Section 05)
   ============================================================ */
export type MathObj = { name: Bi; discovered: Bi; invented: Bi; accent: string };
export const MATH_OBJECTS: MathObj[] = [
  {
    name: { en: "Prime numbers", zh: "质数" },
    discovered: { en: "Primes are out there whether or not anyone counts — their distribution is a fact we uncover, not a choice we make.", zh: "无论是否有人计数，质数都在那里——它们的分布是我们揭示的事实，而非我们做出的选择。" },
    invented: { en: "But 'number' itself is a human abstraction layered onto a world of separate things. No counting minds, no primes.", zh: "但「数」本身，是人类叠加在「分立之物的世界」上的抽象。没有计数的心智，便没有质数。" },
    accent: "#3fe3a8",
  },
  {
    name: { en: "π (pi)", zh: "圆周率 π" },
    discovered: { en: "Every circle in the universe already obeys this ratio; we merely found and named it.", zh: "宇宙中每一个圆，早已服从这一比值；我们只是找到并命名了它。" },
    invented: { en: "Yet the perfect circle is an idealisation that exists nowhere in matter — we invented the object π measures.", zh: "然而完美的圆，是一种在物质中无处存在的理想化——我们发明了 π 所度量的那个对象。" },
    accent: "#33d6e8",
  },
  {
    name: { en: "√−1 (imaginary unit)", zh: "√−1（虚数单位）" },
    discovered: { en: "It turned out to describe AC circuits and quantum states so well that it feels less invented than found.", zh: "它恰好如此精准地描述交流电路与量子态，以至于显得不像被发明，更像被发现。" },
    invented: { en: "It was an outright fiction — a 'legal' answer to an impossible equation — that only later proved useful.", zh: "它本是彻头彻尾的虚构——为一个不可能的方程给出的「合法」答案——直到后来才被证明有用。" },
    accent: "#9b7cff",
  },
  {
    name: { en: "Non-Euclidean geometry", zh: "非欧几何" },
    discovered: { en: "Spacetime really is curved; Einstein needed exactly this geometry, as if it had been waiting.", zh: "时空确实是弯曲的；爱因斯坦恰好需要这门几何，仿佛它一直在等待。" },
    invented: { en: "It began as pure rebellion — denying Euclid's parallel postulate just to see what happened.", zh: "它始于纯粹的反叛——仅仅为了「看会发生什么」，而否定欧几里得的平行公设。" },
    accent: "#ff5fa2",
  },
  {
    name: { en: "Infinity (ℵ)", zh: "无穷（ℵ）" },
    discovered: { en: "Cantor showed there are different, ordered sizes of infinity — structure too rigid to be mere taste.", zh: "康托尔证明存在不同的、有序的无穷大小——这种结构过于刚硬，不可能只是品味。" },
    invented: { en: "Or: a daring formal game whose rules we wrote, and which nearly drove its inventor and others mad.", zh: "又或者：一场我们亲手写下规则的大胆形式游戏——它几乎逼疯了它的发明者与其他人。" },
    accent: "#ffc94d",
  },
];

/* ============================================================
   AI vs HUMAN comparator (Section 09)
   ============================================================ */
export type CompareRow = { dim: Bi; human: number; ai: number; note: Bi };
export const AI_COMPARE: CompareRow[] = [
  { dim: { en: "Combinatorial breadth", zh: "组合广度" }, human: 2, ai: 3, note: { en: "AI holds far more of the human archive in mind at once than any person can.", zh: "AI 能同时调动远超任何个人的人类作品档案。" } },
  { dim: { en: "Speed & scale", zh: "速度与规模" }, human: 1, ai: 3, note: { en: "Thousands of variants per minute — recombination at industrial throughput.", zh: "每分钟数千个变体——以工业吞吐进行的重组。" } },
  { dim: { en: "Genuine novelty", zh: "真正的新颖" }, human: 3, ai: 2, note: { en: "Models interpolate brilliantly inside the trained space; truly leaving it is still rare.", zh: "模型在训练空间内出色地插值；真正走出该空间仍属罕见。" } },
  { dim: { en: "Intention & stakes", zh: "意图与利害" }, human: 3, ai: 0, note: { en: "A human means it, and something is at risk. The model wants nothing.", zh: "人类是认真的，且有所担当；模型一无所求。" } },
  { dim: { en: "Embodied experience", zh: "具身经验" }, human: 3, ai: 0, note: { en: "Grief, a body, a deadline, a life — the source of much human art is unavailable to the model.", zh: "悲伤、身体、截止日、一生——人类艺术的诸多源头，对模型不可得。" } },
  { dim: { en: "Taste & self-selection", zh: "品味与自我筛选" }, human: 3, ai: 1, note: { en: "Knowing which of a thousand outputs is good still mostly needs a human eye.", zh: "在千个产出中辨别哪个好，多半仍需一双人类的眼睛。" } },
];

/* ============================================================
   CONCEPT PANELS — for sections without a bespoke visual
   ============================================================ */
export type Panel = { t: Bi; d: Bi };
export const PANELS: Record<string, Panel[]> = {
  play: [
    { t: { en: "Pretend play", zh: "假装游戏" }, d: { en: "Running 'what if' on reality with no penalty for being wrong — the cleanest model of counterfactual thought.", zh: "在现实上运行「如果……会怎样」，犯错却无代价——反事实思维最干净的模型。" } },
    { t: { en: "Exploration", zh: "探索" }, d: { en: "Curiosity is a search heuristic: it pushes a mind toward the not-yet-known parts of the space.", zh: "好奇心是一种搜索启发式：它把心智推向空间中尚未被知晓的部分。" } },
    { t: { en: "Improvisation", zh: "即兴" }, d: { en: "Generating and committing in real time — the same muscle a jazz solo and a startup pivot both use.", zh: "实时地生成并投入——爵士独奏与创业转向所调用的，是同一块肌肉。" } },
    { t: { en: "Experiment", zh: "试验" }, d: { en: "Breaking a toy to see how it works is the infant form of the scientific method.", zh: "把玩具拆坏以看其原理，是科学方法的婴儿形态。" } },
  ],
  future: [
    { t: { en: "Human–AI co-creation", zh: "人机协同创作" }, d: { en: "The model proposes a thousand moves; the human chooses, steers and means it. A new division of creative labour.", zh: "模型提出千种走法；人类选择、引导，并赋予其认真。一种新的创造性分工。" } },
    { t: { en: "Generative worlds", zh: "生成式世界" }, d: { en: "Not assets but entire explorable realities, conjured on demand and never twice the same.", zh: "不再是素材，而是按需召唤、永不重复的、可探索的完整现实。" } },
    { t: { en: "Autonomous invention", zh: "自主发明" }, d: { en: "Systems that hypothesise, simulate, test and iterate with shrinking human supervision.", zh: "在人类监督不断缩减的情况下，自行假设、模拟、检验与迭代的系统。" } },
    { t: { en: "The curation crisis", zh: "策展危机" }, d: { en: "When novelty is infinite and cheap, the scarce, valuable act becomes judgement: choosing what deserves to exist.", zh: "当新颖性变得无限而廉价，稀缺而宝贵的行为便成了判断：选择什么配得上存在。" } },
  ],
};
