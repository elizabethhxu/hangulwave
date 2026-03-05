"use client"
import { useState, useEffect, useRef } from "react";

// ── SONG DATA ──────────────────────────────────────────────────────────────────
const SONGS = [
  {
    id: 5, slug: "kpop-demon-hunters-golden", title: "Golden", artist: "K-pop Demon Hunters",
    group: "K-pop Demon Hunters", level: "Beginner", thumbnail: "✨", color: "#FFD700", accent: "#FF6B35",
    duration: "40 min", tags: ["hopeful", "anthem", "2025"], year: 2025, isNew: true,
    lines: [
      { korean: "빛나는 순간을 잡아", romanized: "bitnaneun sunganeul jaba", translation: "Catch the shining moment",
        words: [
          { korean: "빛나는", romanized: "bitnaneun", meaning: "shining/glowing", type: "adjective" },
          { korean: "순간", romanized: "sungan", meaning: "moment/instant", type: "noun" },
          { korean: "을", romanized: "eul", meaning: "[object marker]", type: "particle" },
          { korean: "잡아", romanized: "jaba", meaning: "catch/grab (command)", type: "verb" },
        ],
        lesson: "빛나다 (to shine) becomes 빛나는 when describing a noun — present participle modifier. The -는 + noun pattern appears constantly in Korean."
      },
      { korean: "우리는 황금빛이야", romanized: "urineun hwanggeumbisgiya", translation: "We are golden",
        words: [
          { korean: "우리는", romanized: "urineun", meaning: "we (topic)", type: "pronoun" },
          { korean: "황금빛", romanized: "hwanggeumbit", meaning: "golden light", type: "noun" },
          { korean: "이야", romanized: "iya", meaning: "are/is (informal)", type: "verb" },
        ],
        lesson: "이야 is the informal version of 이에요 (to be). 황금 = gold, 빛 = light — Korean builds meaning by joining nouns together."
      },
      { korean: "두려움 없이 나아가", romanized: "duryeowum eopsi naaga", translation: "Move forward without fear",
        words: [
          { korean: "두려움", romanized: "duryeowum", meaning: "fear", type: "noun" },
          { korean: "없이", romanized: "eopsi", meaning: "without", type: "adverb" },
          { korean: "나아가", romanized: "naaga", meaning: "move forward (command)", type: "verb" },
        ],
        lesson: "없이 means 'without' — attaches to a noun. 두려움 없이 = without fear. 너 없이 = without you."
      },
    ],
  },
  {
    id: 1, slug: "bts-dynamite", title: "Dynamite", artist: "BTS",
    group: "BTS", level: "Beginner", thumbnail: "🎵", color: "#FF6B6B", accent: "#FFE66D",
    duration: "45 min", tags: ["upbeat", "english mix", "popular"],
    lines: [
      { korean: "신발 끈을 매고", romanized: "sinbal kkeun-eul maego", translation: "Tying my shoelaces",
        words: [
          { korean: "신발", romanized: "sinbal", meaning: "shoes", type: "noun" },
          { korean: "끈", romanized: "kkeun", meaning: "lace/string", type: "noun" },
          { korean: "을", romanized: "eul", meaning: "[object marker]", type: "particle" },
          { korean: "매고", romanized: "maego", meaning: "tying (and...)", type: "verb" },
        ],
        lesson: "Object markers (을/를) attach to the noun receiving the action. This is one of the most fundamental particles in Korean."
      },
      { korean: "전화해 baby", romanized: "jeonhwahae baby", translation: "Call me, baby",
        words: [
          { korean: "전화", romanized: "jeonhwa", meaning: "phone/call", type: "noun" },
          { korean: "해", romanized: "hae", meaning: "do (informal command)", type: "verb" },
        ],
        lesson: "전화하다 (to make a call) → 전화해 is the informal imperative. Mixing Korean with English is very common in K-pop."
      },
      { korean: "불을 켜봐", romanized: "bul-eul kyeobwa", translation: "Try turning on the lights",
        words: [
          { korean: "불", romanized: "bul", meaning: "fire/light", type: "noun" },
          { korean: "을", romanized: "eul", meaning: "[object marker]", type: "particle" },
          { korean: "켜봐", romanized: "kyeobwa", meaning: "try turning on", type: "verb" },
        ],
        lesson: "봐 (-bwa) added to a verb stem means 'try doing something.' 켜다 (to turn on) + 봐 = try turning on."
      },
    ],
  },
  {
    id: 2, slug: "newjeans-attention", title: "Attention", artist: "NewJeans",
    group: "NewJeans", level: "Beginner", thumbnail: "🎀", color: "#A8EDEA", accent: "#FED6E3",
    duration: "35 min", tags: ["y2k", "casual speech", "romance"],
    lines: [
      { korean: "자꾸 웃게 만들잖아", romanized: "jakku utge mandeuljanah", translation: "You keep making me smile",
        words: [
          { korean: "자꾸", romanized: "jakku", meaning: "repeatedly/keeps", type: "adverb" },
          { korean: "웃게", romanized: "utge", meaning: "to smile (causative)", type: "verb" },
          { korean: "만들잖아", romanized: "mandeuljanah", meaning: "you make (don't you?)", type: "verb" },
        ],
        lesson: "자꾸 = 'keeps doing.' 잖아 is a tag question — like 'you know?' Super common in casual Korean speech."
      },
      { korean: "눈을 못 떼겠어", romanized: "nun-eul mot ttegeesseo", translation: "I can't take my eyes off",
        words: [
          { korean: "눈", romanized: "nun", meaning: "eyes", type: "noun" },
          { korean: "못", romanized: "mot", meaning: "can't (inability)", type: "adverb" },
          { korean: "떼겠어", romanized: "ttegeesseo", meaning: "take off/detach", type: "verb" },
        ],
        lesson: "못 before a verb = inability. Different from 안 which means 'won't/don't.' 못 = can't, 안 = don't."
      },
    ],
  },
  {
    id: 3, slug: "blackpink-pink-venom", title: "Pink Venom", artist: "BLACKPINK",
    group: "BLACKPINK", level: "Intermediate", thumbnail: "🖤", color: "#FF006E", accent: "#8338EC",
    duration: "55 min", tags: ["powerful", "slang", "confidence"],
    lines: [
      { korean: "독을 품은 꽃", romanized: "dog-eul pum-eun kkot", translation: "A flower holding venom",
        words: [
          { korean: "독", romanized: "dog", meaning: "poison/venom", type: "noun" },
          { korean: "품은", romanized: "pum-eun", meaning: "holding/harboring", type: "verb" },
          { korean: "꽃", romanized: "kkot", meaning: "flower", type: "noun" },
        ],
        lesson: "Verb + 은/ㄴ creates a noun-modifying clause. 품은 꽃 = 'flower that holds.' This structure appears everywhere in Korean."
      },
    ],
  },
  {
    id: 6, slug: "nmixx-blue-valentine", title: "Blue Valentine", artist: "NMIXX",
    group: "NMIXX", level: "Intermediate", thumbnail: "💙", color: "#4169E1", accent: "#E91E8C",
    duration: "50 min", tags: ["synth-pop", "emotional", "2025"], year: 2025, isNew: true,
    lines: [
      { korean: "파란 기억 속에 너가 있어", romanized: "paran gieok soge neoga isseo", translation: "You exist inside my blue memories",
        words: [
          { korean: "파란", romanized: "paran", meaning: "blue", type: "adjective" },
          { korean: "기억", romanized: "gieok", meaning: "memory", type: "noun" },
          { korean: "속에", romanized: "soge", meaning: "inside/within", type: "particle" },
          { korean: "너가", romanized: "neoga", meaning: "you (subject)", type: "pronoun" },
          { korean: "있어", romanized: "isseo", meaning: "exist/are", type: "verb" },
        ],
        lesson: "속에 means 'inside' or 'within.' 기억 속에 = inside memories. 마음 속에 = inside (my) heart. One of the most poetic particles in Korean."
      },
      { korean: "잊을 수가 없잖아", romanized: "ijeul suga eopjanha", translation: "I just can't forget, you know",
        words: [
          { korean: "잊을", romanized: "ijeul", meaning: "to forget (future modifier)", type: "verb" },
          { korean: "수가", romanized: "suga", meaning: "ability/possibility", type: "noun" },
          { korean: "없잖아", romanized: "eopjanha", meaning: "there isn't (you know)", type: "verb" },
        ],
        lesson: "~ㄹ/을 수가 없다 = 'there is no way to [verb].' Stronger than just 'can't.' The 잖아 ending adds emotional appeal."
      },
    ],
  },
  {
    id: 7, slug: "aespa-rich-man", title: "Rich Man", artist: "aespa",
    group: "aespa", level: "Intermediate", thumbnail: "💎", color: "#9B59B6", accent: "#F1C40F",
    duration: "45 min", tags: ["confidence", "luxury", "2025"], year: 2025, isNew: true,
    lines: [
      { korean: "내 눈빛만으로 충분해", romanized: "nae nunbikmaneuro chungbunhae", translation: "Just my gaze alone is enough",
        words: [
          { korean: "내", romanized: "nae", meaning: "my", type: "pronoun" },
          { korean: "눈빛", romanized: "nunbik", meaning: "gaze/look", type: "noun" },
          { korean: "만으로", romanized: "maneuro", meaning: "with just/only", type: "particle" },
          { korean: "충분해", romanized: "chungbunhae", meaning: "is enough", type: "adjective" },
        ],
        lesson: "만 = 'only/just' attaches to a noun. 너만 = only you. 만으로 = 'with just [noun].' Great for expressing self-confidence."
      },
      { korean: "원하는 건 다 가져", romanized: "wonhaneun geon da gajyeo", translation: "Take everything you want",
        words: [
          { korean: "원하는", romanized: "wonhaneun", meaning: "wanting/desired", type: "verb" },
          { korean: "건", romanized: "geon", meaning: "thing (contraction of 것은)", type: "noun" },
          { korean: "다", romanized: "da", meaning: "all/everything", type: "adverb" },
          { korean: "가져", romanized: "gajyeo", meaning: "take/have (command)", type: "verb" },
        ],
        lesson: "건 is 것은 shortened (thing + topic marker). 다 before a verb = intensifier meaning 'all/everything.'"
      },
    ],
  },
];

// ── MODULES ────────────────────────────────────────────────────────────────────
const MODULES = [
  {
    id: 1,
    title: "Korean Basics",
    subtitle: "Start here",
    description: "Learn the most common particles and sentence structures through upbeat, beginner-friendly songs. No prior Korean needed.",
    icon: "🌱",
    color: "#4ADE80",
    accent: "#052E16",
    songSlugs: ["bts-dynamite", "newjeans-attention", "kpop-demon-hunters-golden"],
    grammarFocus: ["Object markers (을/를)", "Informal commands", "못 vs 안 (can't vs won't)", "Verb + 봐 (try doing)"],
    level: "Beginner",
    xpReward: 150,
  },
  {
    id: 2,
    title: "Nouns & Describing Things",
    subtitle: "Build your vocabulary",
    description: "Expand your noun bank and learn how to attach adjectives and descriptors — the foundation of expressive Korean.",
    icon: "📦",
    color: "#60A5FA",
    accent: "#1E3A5F",
    songSlugs: ["kpop-demon-hunters-golden", "nmixx-blue-valentine"],
    grammarFocus: ["Adjective + noun modification (-는)", "Location particles (속에)", "Color words", "Abstract nouns (기억, 두려움)"],
    level: "Beginner",
    xpReward: 120,
  },
  {
    id: 3,
    title: "Verbs & Actions",
    subtitle: "Express yourself",
    description: "Master Korean verb forms — commands, negation, ability, and causatives — through powerful K-pop lines.",
    icon: "⚡",
    color: "#FACC15",
    accent: "#422006",
    songSlugs: ["bts-dynamite", "blackpink-pink-venom", "aespa-rich-man"],
    grammarFocus: ["Verb-modifying clauses (은/는)", "Causative verbs", "못 / 수가 없다 (inability)", "Informal imperatives"],
    level: "Intermediate",
    xpReward: 180,
  },
  {
    id: 4,
    title: "Particles Deep Dive",
    subtitle: "Unlock sentence structure",
    description: "Particles are the backbone of Korean grammar. This module decodes the most important ones through real lyrics.",
    icon: "🔗",
    color: "#F472B6",
    accent: "#500724",
    songSlugs: ["bts-dynamite", "newjeans-attention", "nmixx-blue-valentine", "aespa-rich-man"],
    grammarFocus: ["Topic marker (는/은)", "Subject marker (이/가)", "Object marker (을/를)", "만 (only), 속에 (inside)"],
    level: "Intermediate",
    xpReward: 200,
  },
  {
    id: 5,
    title: "2025 Hits",
    subtitle: "Stay current",
    description: "The biggest K-pop songs of 2025. Learn the vocabulary and grammar behind this year's chart-toppers.",
    icon: "🔥",
    color: "#FF6EB4",
    accent: "#4A0A2A",
    songSlugs: ["kpop-demon-hunters-golden", "nmixx-blue-valentine", "aespa-rich-man"],
    grammarFocus: ["Modern slang", "Compound nouns", "Confidence expressions", "Emotional grammar"],
    level: "Mixed",
    xpReward: 160,
  },
  {
    id: 6,
    title: "Confidence & Self-Expression",
    subtitle: "Sound like an idol",
    description: "The language of K-pop power — learn how idols express strength, independence, and self-assurance in Korean.",
    icon: "👑",
    color: "#A78BFA",
    accent: "#2E1065",
    songSlugs: ["blackpink-pink-venom", "aespa-rich-man", "kpop-demon-hunters-golden"],
    grammarFocus: ["만 (only/just)", "없이 (without)", "다 (everything)", "Assertive sentence endings"],
    level: "Intermediate",
    xpReward: 175,
  },
];

// ── HELPERS ────────────────────────────────────────────────────────────────────
const ALL_WORDS = [];
SONGS.forEach(song => {
  song.lines.forEach(line => {
    line.words.forEach(w => {
      if (!ALL_WORDS.find(x => x.korean === w.korean))
        ALL_WORDS.push({ ...w, songTitle: song.title });
    });
  });
});

const levelColor = { Beginner: "#4ADE80", Intermediate: "#FACC15", Advanced: "#F87171", Mixed: "#a78bfa" };
const typeColors = { noun: "#60a5fa", verb: "#34d399", particle: "#f59e0b", adverb: "#c084fc", pronoun: "#fb923c", adjective: "#f472b6" };
const groups = ["All", "BTS", "NewJeans", "BLACKPINK", "aespa", "NMIXX", "K-pop Demon Hunters", "Beginner", "Intermediate"];

function speakKorean(text) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utt = new SpeechSynthesisUtterance(text);
  utt.lang = "ko-KR"; utt.rate = 0.85;
  const voices = window.speechSynthesis.getVoices();
  const v = voices.find(v => v.lang.startsWith("ko"));
  if (v) utt.voice = v;
  window.speechSynthesis.speak(utt);
}

const store = {
  getCompleted: () => { try { return JSON.parse(localStorage.getItem("hw_completed") || "[]"); } catch { return []; } },
  addCompleted: (slug) => { const c = store.getCompleted(); if (!c.includes(slug)) { c.push(slug); localStorage.setItem("hw_completed", JSON.stringify(c)); } },
  getXP: () => parseInt(localStorage.getItem("hw_xp") || "0"),
  addXP: (n) => localStorage.setItem("hw_xp", store.getXP() + n),
  getStreak: () => parseInt(localStorage.getItem("hw_streak") || "7"),
  getLearnedWords: () => { try { return JSON.parse(localStorage.getItem("hw_words") || "[]"); } catch { return []; } },
  addWords: (words) => {
    const existing = store.getLearnedWords();
    const existingKorean = existing.map(w => w.korean);
    const newWords = words.filter(w => !existingKorean.includes(w.korean));
    localStorage.setItem("hw_words", JSON.stringify([...existing, ...newWords]));
  },
};

// ── STYLES ─────────────────────────────────────────────────────────────────────
const S = {
  app: { minHeight: "100vh", background: "#0a0a12", color: "#f0e6ff", fontFamily: "'Syne', sans-serif" },
  nav: { position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 32px", background: "rgba(10,10,18,0.9)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,182,255,0.1)" },
  logo: { fontSize: "22px", fontWeight: 800, background: "linear-gradient(135deg, #ff6eb4, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", cursor: "pointer" },
  navBtn: (active) => ({ padding: "8px 16px", borderRadius: "20px", fontSize: "13px", fontWeight: 600, cursor: "pointer", border: "none", background: active ? "rgba(255,110,180,0.2)" : "transparent", color: active ? "#ff6eb4" : "rgba(240,230,255,0.5)" }),
  btnPrimary: { padding: "14px 32px", borderRadius: "14px", fontSize: "15px", fontWeight: 700, background: "linear-gradient(135deg, #ff6eb4, #a78bfa)", border: "none", color: "#fff", cursor: "pointer" },
  btnSecondary: { padding: "12px 24px", borderRadius: "14px", fontSize: "14px", fontWeight: 600, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(240,230,255,0.7)", cursor: "pointer" },
  btnSpeak: { padding: "6px 14px", borderRadius: "20px", fontSize: "12px", fontWeight: 700, background: "rgba(255,110,180,0.12)", border: "1px solid rgba(255,110,180,0.3)", color: "#ff6eb4", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "6px" },
  badge: (color) => ({ padding: "3px 10px", borderRadius: "10px", fontSize: "11px", fontWeight: 700, background: `${color}25`, color, border: `1px solid ${color}40` }),
  modal: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.75)", zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" },
  modalBox: { background: "#13131f", border: "1px solid rgba(255,182,255,0.15)", borderRadius: "24px", padding: "32px", maxWidth: "640px", width: "100%", maxHeight: "82vh", overflowY: "auto" },
};

// ── SONG CARD (reusable) ───────────────────────────────────────────────────────
function SongCard({ song, completed, onClick, compact = false }) {
  const isDone = completed.includes(song.slug);
  return (
    <div onClick={onClick}
      style={{ background: `linear-gradient(135deg, ${song.color}18, ${song.accent}10)`, border: `1px solid ${song.color}30`, borderRadius: "20px", padding: compact ? "18px" : "24px", cursor: "pointer", transition: "transform 0.2s", position: "relative", overflow: "hidden" }}
      onMouseEnter={e => e.currentTarget.style.transform = "translateY(-3px)"}
      onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
      {isDone && <div style={{ position: "absolute", top: "12px", right: "12px", background: "rgba(74,222,128,0.2)", border: "1px solid #4ade80", borderRadius: "20px", padding: "3px 10px", fontSize: "11px", fontWeight: 700, color: "#4ade80" }}>✓ Done</div>}
      {song.isNew && !isDone && <div style={{ position: "absolute", top: "12px", right: "12px", background: "rgba(255,110,180,0.2)", border: "1px solid #ff6eb4", borderRadius: "20px", padding: "3px 10px", fontSize: "11px", fontWeight: 700, color: "#ff6eb4" }}>✦ 2025</div>}
      <div style={{ fontSize: compact ? "28px" : "36px", marginBottom: "10px" }}>{song.thumbnail}</div>
      <div style={{ fontSize: compact ? "15px" : "18px", fontWeight: 800, marginBottom: "3px" }}>{song.title}</div>
      <div style={{ fontSize: "13px", color: "rgba(240,230,255,0.45)", marginBottom: "12px" }}>{song.artist}</div>
      <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap", marginBottom: "10px" }}>
        <span style={S.badge(levelColor[song.level])}>{song.level}</span>
        <span style={S.badge("rgba(240,230,255,0.35)")}>{song.tags[0]}</span>
      </div>
      <div style={{ display: "flex", gap: "16px" }}>
        <span style={{ fontSize: "12px", color: "rgba(240,230,255,0.4)" }}>
          📖 {song.lines.length} {song.lines.length === 1 ? "line" : "lines"}
        </span>
        <span style={{ fontSize: "12px", color: "rgba(240,230,255,0.4)" }}>⏱ {song.duration}</span>
      </div>
    </div>
  );
}

// ── MODULE CARD ────────────────────────────────────────────────────────────────
function ModuleCard({ module, completed, onStart, onExpand, isExpanded }) {
  const moduleSongs = SONGS.filter(s => module.songSlugs.includes(s.slug));
  const doneCount = moduleSongs.filter(s => completed.includes(s.slug)).length;
  const pct = moduleSongs.length > 0 ? Math.round((doneCount / moduleSongs.length) * 100) : 0;
  const isComplete = doneCount === moduleSongs.length;

  return (
    <div style={{ background: `linear-gradient(135deg, ${module.color}10, rgba(255,255,255,0.02))`, border: `1px solid ${module.color}30`, borderRadius: "24px", overflow: "hidden", transition: "all 0.3s" }}>
      {/* Header */}
      <div style={{ padding: "28px", cursor: "pointer" }} onClick={onExpand}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "16px" }}>
          <div style={{ display: "flex", gap: "16px", alignItems: "flex-start", flex: 1 }}>
            <div style={{ fontSize: "36px", lineHeight: 1 }}>{module.icon}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "11px", fontWeight: 700, color: module.color, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "4px" }}>{module.subtitle}</div>
              <div style={{ fontSize: "20px", fontWeight: 800, marginBottom: "6px" }}>{module.title}</div>
              <div style={{ fontSize: "13px", color: "rgba(240,230,255,0.5)", lineHeight: 1.6, marginBottom: "16px" }}>{module.description}</div>
              {/* Grammar focus tags */}
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "16px" }}>
                {module.grammarFocus.map((g, i) => (
                  <span key={i} style={{ padding: "4px 10px", borderRadius: "8px", fontSize: "11px", fontWeight: 600, background: `${module.color}15`, color: module.color, border: `1px solid ${module.color}25` }}>{g}</span>
                ))}
              </div>
              {/* Progress bar */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ flex: 1, height: "6px", background: "rgba(255,255,255,0.08)", borderRadius: "3px" }}>
                  <div style={{ height: "100%", width: `${pct}%`, borderRadius: "3px", background: `linear-gradient(90deg, ${module.color}, ${module.color}88)`, transition: "width 0.5s ease" }} />
                </div>
                <div style={{ fontSize: "12px", color: module.color, fontWeight: 700, whiteSpace: "nowrap" }}>
                  {isComplete ? "✓ Complete" : `${doneCount}/${moduleSongs.length} songs`}
                </div>
              </div>
            </div>
          </div>
          {/* Right side */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "8px", flexShrink: 0 }}>
            <span style={S.badge(levelColor[module.level])}>{module.level}</span>
            <span style={{ fontSize: "12px", color: "rgba(240,230,255,0.4)" }}>⚡ +{module.xpReward} XP</span>
            <span style={{ fontSize: "18px", color: "rgba(240,230,255,0.3)", transition: "transform 0.2s", transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)" }}>▾</span>
          </div>
        </div>
      </div>

      {/* Expanded: songs in module */}
      {isExpanded && (
        <div style={{ padding: "0 28px 28px", borderTop: `1px solid ${module.color}20` }}>
          <div style={{ paddingTop: "20px", marginBottom: "16px" }}>
            <div style={{ fontSize: "11px", fontWeight: 700, color: "rgba(240,230,255,0.35)", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "14px" }}>Songs in this module</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
              {moduleSongs.map(song => (
                <SongCard key={song.slug} song={song} completed={completed} onClick={() => onStart(song)} compact />
              ))}
            </div>
          </div>
          <button style={{ ...S.btnPrimary, fontSize: "14px", padding: "12px 28px" }} onClick={() => {
            const nextSong = moduleSongs.find(s => !completed.includes(s.slug)) || moduleSongs[0];
            onStart(nextSong);
          }}>
            {doneCount === 0 ? `Start module →` : isComplete ? `Review module →` : `Continue module →`}
          </button>
        </div>
      )}
    </div>
  );
}

// ── MAIN APP ───────────────────────────────────────────────────────────────────
export default function HangulWave() {
  const [view, setView] = useState("home");
  const [homeTab, setHomeTab] = useState("modules"); // "modules" | "browse"
  const [activeSong, setActiveSong] = useState(null);
  const [activeLine, setActiveLine] = useState(0);
  const [showBreakdown, setShowBreakdown] = useState(false);
  const [lessonDone, setLessonDone] = useState(false);
  const [filter, setFilter] = useState("All");
  const [expandedModule, setExpandedModule] = useState(1);
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizAnswer, setQuizAnswer] = useState(null);
  const [quizScore, setQuizScore] = useState(0);
  const [quizDone, setQuizDone] = useState(false);
  const [quizPool, setQuizPool] = useState([]);
  const [xp, setXp] = useState(store.getXP());
  const [completed, setCompleted] = useState(store.getCompleted());
  const [learnedWords, setLearnedWords] = useState(store.getLearnedWords());
  const [modal, setModal] = useState(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (view !== "home") return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight;
    const particles = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      r: Math.random() * 2 + 1, dx: (Math.random() - 0.5) * 0.3, dy: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.4 + 0.1,
    }));
    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,182,255,${p.opacity})`; ctx.fill();
        p.x += p.dx; p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(raf);
  }, [view]);

  const openSong = (song) => {
    setActiveSong(song); setActiveLine(0); setShowBreakdown(false); setLessonDone(false);
    setView("lesson");
  };

  const nextFirstIncomplete = () => {
    const s = SONGS.find(s => !completed.includes(s.slug)) || SONGS[0];
    openSong(s);
  };

  const completeLine = () => {
    const line = activeSong.lines[activeLine];
    store.addWords(line.words);
    setLearnedWords(store.getLearnedWords());
    store.addXP(15); setXp(store.getXP());
    if (activeLine < activeSong.lines.length - 1) {
      setActiveLine(activeLine + 1); setShowBreakdown(false);
    } else {
      store.addCompleted(activeSong.slug);
      setCompleted(store.getCompleted());
      setLessonDone(true);
    }
  };

  const startQuiz = () => {
    const completedSongs = SONGS.filter(s => completed.includes(s.slug));
    const source = completedSongs.length > 0 ? completedSongs : SONGS.slice(0, 2);
    const pool = [];
    source.forEach(song => {
      song.lines.forEach(line => {
        line.words.filter(w => w.type !== "particle").forEach(w => {
          if (!pool.find(p => p.korean === w.korean)) {
            const wrong = ALL_WORDS.filter(x => x.korean !== w.korean && x.type !== "particle")
              .map(x => x.meaning).sort(() => Math.random() - 0.5).slice(0, 3);
            const options = [...wrong, w.meaning].sort(() => Math.random() - 0.5);
            pool.push({ korean: w.korean, answer: w.meaning, options, songTitle: song.title });
          }
        });
      });
    });
    const shuffled = pool.sort(() => Math.random() - 0.5).slice(0, Math.min(8, pool.length));
    setQuizPool(shuffled); setQuizIndex(0); setQuizAnswer(null); setQuizScore(0); setQuizDone(false);
    setView("quiz");
  };

  const handleQuizAnswer = (opt) => {
    if (quizAnswer !== null) return;
    setQuizAnswer(opt);
    if (opt === quizPool[quizIndex].answer) setQuizScore(s => s + 1);
  };

  const nextQuizQ = () => {
    if (quizIndex + 1 >= quizPool.length) setQuizDone(true);
    else { setQuizIndex(quizIndex + 1); setQuizAnswer(null); }
  };

  const filtered = filter === "All" ? SONGS : SONGS.filter(s => s.group === filter || s.level === filter);
  const completedSongObjects = SONGS.filter(s => completed.includes(s.slug));

  // ── MODALS ─────────────────────────────────────────────────────────────────
  const WordsModal = () => (
    <div style={S.modal} onClick={() => setModal(null)}>
      <div style={S.modalBox} onClick={e => e.stopPropagation()}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
          <div style={{ fontSize: "20px", fontWeight: 800 }}>Words Learned ({learnedWords.length})</div>
          <button onClick={() => setModal(null)} style={{ ...S.btnSecondary, padding: "6px 14px" }}>✕</button>
        </div>
        {learnedWords.length === 0
          ? <div style={{ color: "rgba(240,230,255,0.4)", textAlign: "center", padding: "40px" }}>Complete a lesson to see your words here!</div>
          : <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
              {learnedWords.map((w, i) => {
                const c = typeColors[w.type] || "#9ca3af";
                return (
                  <div key={i} style={{ background: `${c}10`, border: `1px solid ${c}30`, borderRadius: "12px", padding: "12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <div style={{ fontSize: "18px", fontWeight: 800 }}>{w.korean}</div>
                      <div style={{ fontSize: "11px", color: "rgba(240,230,255,0.4)" }}>{w.romanized}</div>
                      <div style={{ fontSize: "13px", color: "rgba(240,230,255,0.8)", marginTop: "2px" }}>{w.meaning}</div>
                      <div style={{ fontSize: "10px", color: c, fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginTop: "2px" }}>{w.type}</div>
                    </div>
                    <button style={{ ...S.btnSpeak, padding: "6px 10px" }} onClick={() => speakKorean(w.korean)}>🔊</button>
                  </div>
                );
              })}
            </div>
        }
      </div>
    </div>
  );

  const LessonsModal = () => (
    <div style={S.modal} onClick={() => setModal(null)}>
      <div style={S.modalBox} onClick={e => e.stopPropagation()}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
          <div style={{ fontSize: "20px", fontWeight: 800 }}>Completed Lessons ({completedSongObjects.length})</div>
          <button onClick={() => setModal(null)} style={{ ...S.btnSecondary, padding: "6px 14px" }}>✕</button>
        </div>
        {completedSongObjects.length === 0
          ? <div style={{ color: "rgba(240,230,255,0.4)", textAlign: "center", padding: "40px" }}>Complete your first lesson to see it here!</div>
          : <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {completedSongObjects.map(song => (
                <div key={song.slug} style={{ background: `${song.color}12`, border: `1px solid ${song.color}30`, borderRadius: "16px", padding: "16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
                    <span style={{ fontSize: "28px" }}>{song.thumbnail}</span>
                    <div>
                      <div style={{ fontWeight: 700 }}>{song.title}</div>
                      <div style={{ fontSize: "13px", color: "rgba(240,230,255,0.45)" }}>{song.artist}</div>
                      <div style={{ fontSize: "11px", color: "#4ade80", marginTop: "2px" }}>✓ {song.lines.length} {song.lines.length === 1 ? "line" : "lines"} completed</div>
                    </div>
                  </div>
                  <button onClick={() => { setModal(null); openSong(song); }} style={{ ...S.btnSecondary, fontSize: "12px", padding: "8px 14px" }}>Review →</button>
                </div>
              ))}
            </div>
        }
      </div>
    </div>
  );

  // ── LESSON VIEW ────────────────────────────────────────────────────────────
  if (view === "lesson" && activeSong) {
    if (lessonDone) return (
      <div style={S.app}>
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&display=swap" rel="stylesheet" />
        <nav style={S.nav}><span style={S.logo} onClick={() => setView("home")}>한글Wave</span><span style={{ fontSize: "13px", color: "#a78bfa", fontWeight: 700 }}>⚡ {xp} XP</span></nav>
        <div style={{ padding: "120px 32px", textAlign: "center" }}>
          <div style={{ fontSize: "72px", marginBottom: "20px" }}>🎉</div>
          <div style={{ fontSize: "36px", fontWeight: 800, marginBottom: "12px" }}>Lesson Complete!</div>
          <div style={{ fontSize: "16px", color: "rgba(240,230,255,0.5)", marginBottom: "32px" }}>
            You learned {activeSong.lines.length} lines from <strong style={{ color: "#ff6eb4" }}>{activeSong.title}</strong>
          </div>
          <div style={{ display: "flex", gap: "24px", justifyContent: "center", marginBottom: "40px" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "32px", fontWeight: 800, color: "#4ade80" }}>+{activeSong.lines.length * 15} XP</div>
              <div style={{ fontSize: "12px", color: "rgba(240,230,255,0.4)", textTransform: "uppercase", letterSpacing: "1px" }}>earned</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "32px", fontWeight: 800, color: "#ff6eb4" }}>{activeSong.lines.reduce((a, l) => a + l.words.length, 0)}</div>
              <div style={{ fontSize: "12px", color: "rgba(240,230,255,0.4)", textTransform: "uppercase", letterSpacing: "1px" }}>new words</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
            <button style={S.btnPrimary} onClick={startQuiz}>Practice vocabulary →</button>
            <button style={S.btnSecondary} onClick={() => setView("home")}>Back to modules</button>
          </div>
        </div>
      </div>
    );

    const line = activeSong.lines[activeLine];
    const pct = (activeLine / activeSong.lines.length) * 100;
    return (
      <div style={S.app}>
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&display=swap" rel="stylesheet" />
        <nav style={S.nav}><span style={S.logo} onClick={() => setView("home")}>한글Wave</span><span style={{ fontSize: "13px", color: "#a78bfa", fontWeight: 700 }}>⚡ {xp} XP</span></nav>
        <div style={{ padding: "100px 32px 40px", maxWidth: "800px", margin: "0 auto" }}>
          <button style={{ ...S.btnSecondary, fontSize: "13px", padding: "8px 16px", marginBottom: "20px" }} onClick={() => setView("home")}>← Back</button>
          <div style={{ fontSize: "13px", fontWeight: 700, color: "rgba(240,230,255,0.4)", marginBottom: "8px" }}>
            {activeSong.artist} · {activeSong.title} · Line {activeLine + 1} of {activeSong.lines.length}
          </div>
          <div style={{ height: "4px", background: "rgba(255,255,255,0.08)", borderRadius: "2px", marginBottom: "32px" }}>
            <div style={{ height: "100%", width: `${pct}%`, borderRadius: "2px", background: "linear-gradient(90deg, #ff6eb4, #a78bfa)", transition: "width 0.4s ease" }} />
          </div>
          <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,182,255,0.12)", borderRadius: "24px", padding: "40px", marginBottom: "20px", textAlign: "center" }}>
            <div style={{ fontSize: "clamp(28px,5vw,48px)", fontWeight: 800, marginBottom: "8px", letterSpacing: "-1px" }}>{line.korean}</div>
            <div style={{ fontSize: "16px", color: "rgba(240,230,255,0.4)", marginBottom: "12px", fontStyle: "italic" }}>{line.romanized}</div>
            <div style={{ display: "inline-block", padding: "8px 20px", borderRadius: "12px", background: "rgba(255,110,180,0.1)", border: "1px solid rgba(255,110,180,0.2)", fontSize: "15px", color: "#ff6eb4", fontWeight: 600, marginBottom: "16px" }}>{line.translation}</div>
            <div><button style={S.btnSpeak} onClick={() => speakKorean(line.korean)}>🔊 Hear this line</button></div>
            {showBreakdown && (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: "12px", marginTop: "24px" }}>
                {line.words.map((w, i) => {
                  const c = typeColors[w.type] || "#9ca3af";
                  return (
                    <div key={i} style={{ background: `${c}10`, border: `1px solid ${c}30`, borderRadius: "14px", padding: "14px", textAlign: "center" }}>
                      <div style={{ fontSize: "22px", fontWeight: 800, marginBottom: "2px" }}>{w.korean}</div>
                      <div style={{ fontSize: "11px", color: "rgba(240,230,255,0.4)", marginBottom: "4px" }}>{w.romanized}</div>
                      <div style={{ fontSize: "13px", fontWeight: 600, marginBottom: "4px" }}>{w.meaning}</div>
                      <div style={{ fontSize: "10px", color: c, fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>{w.type}</div>
                      <button style={{ ...S.btnSpeak, fontSize: "11px", padding: "4px 10px" }} onClick={() => speakKorean(w.korean)}>🔊 {w.korean}</button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          {showBreakdown && (
            <div style={{ background: "rgba(167,139,250,0.08)", border: "1px solid rgba(167,139,250,0.2)", borderRadius: "16px", padding: "20px", marginBottom: "20px" }}>
              <div style={{ fontSize: "11px", fontWeight: 700, color: "#a78bfa", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "8px" }}>Grammar Note</div>
              <div style={{ fontSize: "15px", lineHeight: 1.7, color: "rgba(240,230,255,0.75)" }}>{line.lesson}</div>
            </div>
          )}
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", marginTop: "24px" }}>
            {!showBreakdown
              ? <button style={S.btnSecondary} onClick={() => setShowBreakdown(true)}>Break it down →</button>
              : <button style={S.btnPrimary} onClick={completeLine}>{activeLine < activeSong.lines.length - 1 ? "Next line →" : "Complete lesson ✓"}</button>
            }
          </div>
        </div>
      </div>
    );
  }

  // ── QUIZ VIEW ──────────────────────────────────────────────────────────────
  if (view === "quiz") {
    if (quizPool.length === 0) return (
      <div style={S.app}>
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&display=swap" rel="stylesheet" />
        <nav style={S.nav}><span style={S.logo} onClick={() => setView("home")}>한글Wave</span></nav>
        <div style={{ padding: "120px 32px", textAlign: "center" }}>
          <div style={{ fontSize: "48px", marginBottom: "16px" }}>📚</div>
          <div style={{ fontSize: "22px", fontWeight: 700, marginBottom: "12px" }}>Complete a lesson first!</div>
          <div style={{ fontSize: "15px", color: "rgba(240,230,255,0.45)", marginBottom: "32px" }}>The quiz draws from songs you've actually studied.</div>
          <button style={S.btnPrimary} onClick={() => setView("home")}>Choose a song →</button>
        </div>
      </div>
    );

    const q = quizPool[quizIndex];
    return (
      <div style={S.app}>
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&display=swap" rel="stylesheet" />
        <nav style={S.nav}><span style={S.logo} onClick={() => setView("home")}>한글Wave</span><button style={S.navBtn(false)} onClick={() => setView("home")}>← Home</button></nav>
        <div style={{ padding: "100px 32px 40px", maxWidth: "600px", margin: "0 auto" }}>
          <div style={{ fontSize: "13px", fontWeight: 700, color: "rgba(240,230,255,0.35)", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "6px" }}>Vocabulary Quiz · {quizIndex + 1} / {quizPool.length}</div>
          <div style={{ fontSize: "12px", color: "rgba(240,230,255,0.3)", marginBottom: "24px" }}>From: {q.songTitle}</div>
          {!quizDone ? (
            <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,182,255,0.1)", borderRadius: "24px", padding: "40px", textAlign: "center" }}>
              <div style={{ fontSize: "56px", fontWeight: 800, marginBottom: "4px" }}>{q.korean}</div>
              <button style={{ ...S.btnSpeak, margin: "8px auto 24px" }} onClick={() => speakKorean(q.korean)}>🔊 Hear it</button>
              <div style={{ fontSize: "14px", color: "rgba(240,230,255,0.4)", marginBottom: "28px" }}>What does this mean in English?</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "24px" }}>
                {q.options.map(opt => {
                  const revealed = quizAnswer !== null;
                  const isCorrect = opt === q.answer;
                  const isSelected = opt === quizAnswer;
                  let bg = "rgba(255,255,255,0.05)", border = "1px solid rgba(255,255,255,0.1)", color = "rgba(240,230,255,0.8)";
                  if (revealed) {
                    if (isCorrect) { bg = "rgba(74,222,128,0.15)"; border = "1px solid #4ade80"; color = "#4ade80"; }
                    else if (isSelected) { bg = "rgba(248,113,113,0.15)"; border = "1px solid #f87171"; color = "#f87171"; }
                  }
                  return <button key={opt} onClick={() => handleQuizAnswer(opt)} style={{ padding: "16px", borderRadius: "14px", fontSize: "15px", fontWeight: 600, cursor: revealed ? "default" : "pointer", background: bg, border, color, transition: "all 0.2s" }}>{opt}</button>;
                })}
              </div>
              {quizAnswer && <button style={S.btnPrimary} onClick={nextQuizQ}>{quizIndex + 1 < quizPool.length ? "Next →" : "See results"}</button>}
            </div>
          ) : (
            <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,182,255,0.1)", borderRadius: "24px", padding: "48px", textAlign: "center" }}>
              <div style={{ fontSize: "64px", marginBottom: "16px" }}>{quizScore >= quizPool.length * 0.8 ? "🌟" : quizScore >= quizPool.length * 0.5 ? "👍" : "💪"}</div>
              <div style={{ fontSize: "32px", fontWeight: 800, marginBottom: "8px" }}>{quizScore} / {quizPool.length}</div>
              <div style={{ fontSize: "16px", color: "rgba(240,230,255,0.5)", marginBottom: "32px" }}>
                {quizScore >= quizPool.length * 0.8 ? "Excellent!" : quizScore >= quizPool.length * 0.5 ? "Good effort!" : "Keep practicing!"}
              </div>
              <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
                <button style={S.btnPrimary} onClick={startQuiz}>Try again</button>
                <button style={S.btnSecondary} onClick={() => setView("home")}>Back to modules</button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // ── DASHBOARD VIEW ─────────────────────────────────────────────────────────
  if (view === "dashboard") {
    return (
      <div style={S.app}>
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&display=swap" rel="stylesheet" />
        {modal === "words" && <WordsModal />}
        {modal === "lessons" && <LessonsModal />}
        <nav style={S.nav}>
          <span style={S.logo} onClick={() => setView("home")}>한글Wave</span>
          <div style={{ display: "flex", gap: "8px" }}>
            <button style={S.navBtn(false)} onClick={() => setView("home")}>Learn</button>
            <button style={S.navBtn(true)}>Progress</button>
            <button style={S.navBtn(false)} onClick={startQuiz}>Quiz</button>
          </div>
        </nav>
        <div style={{ padding: "100px 32px 40px", maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ fontSize: "28px", fontWeight: 800, marginBottom: "8px" }}>Your Progress</div>
          <div style={{ fontSize: "14px", color: "rgba(240,230,255,0.4)", marginBottom: "32px" }}>Keep the streak alive 🔥</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "16px", marginBottom: "32px" }}>
            {[
              { label: "Day Streak", value: store.getStreak(), color: "#ff6eb4", clickable: false },
              { label: "Total XP", value: xp, color: "#a78bfa", clickable: false },
              { label: "Words Learned", value: learnedWords.length, color: "#4ade80", clickable: true, modalKey: "words", hint: "click to see list" },
              { label: "Lessons Done", value: completed.length, color: "#facc15", clickable: true, modalKey: "lessons", hint: "click to see which" },
            ].map(item => (
              <div key={item.label} onClick={() => item.clickable && setModal(item.modalKey)}
                style={{ background: `${item.color}12`, border: `1px solid ${item.color}30`, borderRadius: "20px", padding: "24px", cursor: item.clickable ? "pointer" : "default", transition: "transform 0.2s" }}
                onMouseEnter={e => item.clickable && (e.currentTarget.style.transform = "translateY(-2px)")}
                onMouseLeave={e => item.clickable && (e.currentTarget.style.transform = "translateY(0)")}>
                <div style={{ fontSize: "36px", fontWeight: 800, color: item.color }}>{item.value}</div>
                <div style={{ fontSize: "12px", color: "rgba(240,230,255,0.4)", textTransform: "uppercase", letterSpacing: "1px", marginTop: "4px" }}>{item.label}</div>
                {item.clickable && <div style={{ fontSize: "10px", color: item.color, marginTop: "6px", opacity: 0.7 }}>↗ {item.hint}</div>}
              </div>
            ))}
          </div>
          {/* Module progress */}
          <div style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "3px", color: "rgba(240,230,255,0.3)", textTransform: "uppercase", marginBottom: "16px" }}>Module Progress</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "32px" }}>
            {MODULES.map(mod => {
              const modSongs = SONGS.filter(s => mod.songSlugs.includes(s.slug));
              const doneCnt = modSongs.filter(s => completed.includes(s.slug)).length;
              const pct = modSongs.length > 0 ? Math.round((doneCnt / modSongs.length) * 100) : 0;
              return (
                <div key={mod.id} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "14px", padding: "16px", display: "flex", alignItems: "center", gap: "16px" }}>
                  <span style={{ fontSize: "22px" }}>{mod.icon}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: "13px", fontWeight: 700, marginBottom: "6px" }}>{mod.title}</div>
                    <div style={{ height: "4px", background: "rgba(255,255,255,0.08)", borderRadius: "2px" }}>
                      <div style={{ height: "100%", width: `${pct}%`, borderRadius: "2px", background: `linear-gradient(90deg, ${mod.color}, ${mod.color}88)`, transition: "width 0.5s" }} />
                    </div>
                  </div>
                  <div style={{ fontSize: "12px", color: mod.color, fontWeight: 700, whiteSpace: "nowrap" }}>{doneCnt}/{modSongs.length}</div>
                </div>
              );
            })}
          </div>
          <button style={S.btnPrimary} onClick={() => setView("home")}>Continue learning →</button>
        </div>
      </div>
    );
  }

  // ── HOME VIEW ──────────────────────────────────────────────────────────────
  return (
    <div style={S.app}>
      <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&display=swap" rel="stylesheet" />
      <canvas ref={canvasRef} style={{ position: "fixed", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 0 }} />
      {modal === "words" && <WordsModal />}
      {modal === "lessons" && <LessonsModal />}

      <nav style={S.nav}>
        <span style={S.logo}>한글Wave</span>
        <div style={{ display: "flex", gap: "8px" }}>
          <button style={S.navBtn(true)}>Learn</button>
          <button style={S.navBtn(false)} onClick={() => setView("dashboard")}>Progress</button>
          <button style={S.navBtn(false)} onClick={startQuiz}>Quiz</button>
        </div>
        <button style={{ ...S.btnPrimary, fontSize: "13px", padding: "10px 20px" }} onClick={nextFirstIncomplete}>
          {completed.length > 0 ? "Continue →" : "Start Free"}
        </button>
      </nav>

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* HERO */}
        <div style={{ paddingTop: "120px", paddingBottom: "48px", textAlign: "center" }}>
          <div style={{ display: "inline-block", padding: "6px 16px", borderRadius: "20px", background: "rgba(255,110,180,0.15)", border: "1px solid rgba(255,110,180,0.3)", fontSize: "12px", fontWeight: 700, color: "#ff6eb4", letterSpacing: "2px", marginBottom: "24px", textTransform: "uppercase" }}>✦ Learn Korean through K-pop</div>
          <h1 style={{ fontSize: "clamp(42px,7vw,80px)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-2px", marginBottom: "20px" }}>
            <span style={{ display: "block" }}>Learn Korean</span>
            <span style={{ background: "linear-gradient(135deg, #ff6eb4 20%, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>through the music</span>
            <span style={{ display: "block" }}>you already love.</span>
          </h1>
          <p style={{ fontSize: "17px", color: "rgba(240,230,255,0.55)", maxWidth: "500px", margin: "0 auto 32px", lineHeight: 1.7 }}>Structured modules. Real lyrics. Hear every word pronounced.</p>
        </div>

        {/* TAB SWITCHER */}
        <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginBottom: "40px" }}>
          {[["modules", "📚 Learning Modules"], ["browse", "🎵 Browse All Songs"]].map(([tab, label]) => (
            <button key={tab} onClick={() => setHomeTab(tab)}
              style={{ padding: "12px 24px", borderRadius: "30px", fontSize: "14px", fontWeight: 700, cursor: "pointer", border: homeTab === tab ? "1px solid #ff6eb4" : "1px solid rgba(255,255,255,0.1)", background: homeTab === tab ? "rgba(255,110,180,0.15)" : "transparent", color: homeTab === tab ? "#ff6eb4" : "rgba(240,230,255,0.45)", transition: "all 0.2s" }}>
              {label}
            </button>
          ))}
        </div>

        {/* MODULES TAB */}
        {homeTab === "modules" && (
          <div style={{ padding: "0 32px 60px", maxWidth: "900px", margin: "0 auto" }}>
            <div style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "3px", color: "rgba(240,230,255,0.35)", textTransform: "uppercase", marginBottom: "20px" }}>
              Your Learning Path · {completed.length} songs completed
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {MODULES.map(mod => (
                <ModuleCard
                  key={mod.id}
                  module={mod}
                  completed={completed}
                  onStart={openSong}
                  onExpand={() => setExpandedModule(expandedModule === mod.id ? null : mod.id)}
                  isExpanded={expandedModule === mod.id}
                />
              ))}
            </div>
          </div>
        )}

        {/* BROWSE TAB */}
        {homeTab === "browse" && (
          <div style={{ padding: "0 32px 60px", maxWidth: "1100px", margin: "0 auto" }}>
            <div style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "3px", color: "rgba(240,230,255,0.35)", textTransform: "uppercase", marginBottom: "20px" }}>All Songs</div>
            <div style={{ display: "flex", gap: "8px", marginBottom: "28px", flexWrap: "wrap" }}>
              {groups.map(g => <button key={g} style={S.filterBtn(filter === g)} onClick={() => setFilter(g)}>{g}</button>)}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "16px" }}>
              {filtered.map(song => <SongCard key={song.id} song={song} completed={completed} onClick={() => openSong(song)} />)}
            </div>
          </div>
        )}

        {/* CTA */}
        <div style={{ padding: "0 32px 80px", maxWidth: completed.length > 0 ? "0" : "1100px", margin: "0 auto" }}>
          {completed.length === 0 && (
            <div style={{ background: "linear-gradient(135deg, rgba(255,110,180,0.08), rgba(167,139,250,0.08))", border: "1px solid rgba(255,182,255,0.1)", borderRadius: "28px", padding: "56px 40px", textAlign: "center" }}>
              <div style={{ fontSize: "32px", fontWeight: 800, marginBottom: "12px" }}>Ready to start stanning <em>and</em> studying?</div>
              <div style={{ fontSize: "16px", color: "rgba(240,230,255,0.45)", marginBottom: "32px" }}>Free forever. Pick a module and go.</div>
              <button style={{ ...S.btnPrimary, fontSize: "16px", padding: "16px 40px" }} onClick={nextFirstIncomplete}>Start your first lesson →</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ── filterBtn (needed in browse tab) ──────────────────────────────────────────
function filterBtn(active) {
  return { padding: "7px 16px", borderRadius: "20px", fontSize: "12px", fontWeight: 700, cursor: "pointer", border: active ? "1px solid #ff6eb4" : "1px solid rgba(255,255,255,0.1)", background: active ? "rgba(255,110,180,0.15)" : "transparent", color: active ? "#ff6eb4" : "rgba(240,230,255,0.45)" };
}
