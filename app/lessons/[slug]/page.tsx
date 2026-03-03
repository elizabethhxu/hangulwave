
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { SONGS } from '@/lib/songs'

const typeColors: Record<string, string> = {
  noun: '#60a5fa', verb: '#34d399', particle: '#f59e0b', adverb: '#c084fc', pronoun: '#fb923c',
}

export default function LessonPage({ params }: { params: { slug: string } }) {
  const router = useRouter()
  const song = SONGS.find(s => s.slug === params.slug)
  const [activeLine, setActiveLine] = useState(0)
  const [showBreakdown, setShowBreakdown] = useState(false)
  const [xp, setXp] = useState(0)
  const [done, setDone] = useState(false)

  if (!song) return (
    <div style={{ minHeight: '100vh', background: '#0a0a12', color: '#f0e6ff', fontFamily: "'Syne', sans-serif", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎵</div>
        <div style={{ fontSize: '20px', marginBottom: '16px' }}>Song not found</div>
        <Link href="/" style={{ color: '#ff6eb4' }}>← Back home</Link>
      </div>
    </div>
  )

  const line = song.lines[activeLine]
  const pct = (activeLine / song.lines.length) * 100

  const nextLine = () => {
    setXp(x => x + 15)
    if (activeLine < song.lines.length - 1) {
      setActiveLine(activeLine + 1)
      setShowBreakdown(false)
    } else {
      setDone(true)
    }
  }

  if (done) return (
    <div style={{ minHeight: '100vh', background: '#0a0a12', color: '#f0e6ff', fontFamily: "'Syne', sans-serif" }}>
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 32px', background: 'rgba(10,10,18,0.85)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,182,255,0.1)' }}>
        <span style={{ fontSize: '22px', fontWeight: 800, background: 'linear-gradient(135deg, #ff6eb4, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>한글Wave</span>
      </nav>
      <div style={{ padding: '120px 32px', textAlign: 'center' }}>
        <div style={{ fontSize: '72px', marginBottom: '20px' }}>🎉</div>
        <div style={{ fontSize: '36px', fontWeight: 800, marginBottom: '12px' }}>Lesson Complete!</div>
        <div style={{ fontSize: '16px', color: 'rgba(240,230,255,0.5)', marginBottom: '32px' }}>
          You learned {song.lines.length} lines from <strong style={{ color: '#ff6eb4' }}>{song.title}</strong>
        </div>
        <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', marginBottom: '40px' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '32px', fontWeight: 800, color: '#4ade80' }}>+{xp} XP</div>
            <div style={{ fontSize: '12px', color: 'rgba(240,230,255,0.4)', textTransform: 'uppercase', letterSpacing: '1px' }}>earned</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '32px', fontWeight: 800, color: '#ff6eb4' }}>{song.lines.length * 3}</div>
            <div style={{ fontSize: '12px', color: 'rgba(240,230,255,0.4)', textTransform: 'uppercase', letterSpacing: '1px' }}>new words</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
          <Link href="/quiz" style={{ padding: '14px 32px', borderRadius: '14px', fontSize: '15px', fontWeight: 700, background: 'linear-gradient(135deg, #ff6eb4, #a78bfa)', color: '#fff' }}>Practice vocabulary →</Link>
          <Link href="/" style={{ padding: '14px 24px', borderRadius: '14px', fontSize: '14px', fontWeight: 700, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(240,230,255,0.7)' }}>More songs</Link>
        </div>
      </div>
    </div>
  )

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a12', color: '#f0e6ff', fontFamily: "'Syne', sans-serif" }}>
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 32px', background: 'rgba(10,10,18,0.85)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,182,255,0.1)' }}>
        <span style={{ fontSize: '22px', fontWeight: 800, background: 'linear-gradient(135deg, #ff6eb4, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>한글Wave</span>
        <div style={{ fontSize: '13px', color: '#a78bfa', fontWeight: 700 }}>⚡ {xp} XP</div>
      </nav>

      <div style={{ padding: '100px 32px 40px', maxWidth: '800px', margin: '0 auto' }}>
        <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '20px', fontSize: '13px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(240,230,255,0.6)', marginBottom: '20px' }}>← Back to songs</Link>

        <div style={{ fontSize: '13px', fontWeight: 700, color: 'rgba(240,230,255,0.4)', marginBottom: '8px' }}>
          {song.artist} · {song.title} · Line {activeLine + 1} of {song.lines.length}
        </div>
        <div style={{ height: '4px', background: 'rgba(255,255,255,0.08)', borderRadius: '2px', marginBottom: '32px' }}>
          <div style={{ height: '100%', width: `${pct}%`, borderRadius: '2px', background: 'linear-gradient(90deg, #ff6eb4, #a78bfa)', transition: 'width 0.4s ease' }} />
        </div>

        {/* Lyric card */}
        <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,182,255,0.12)', borderRadius: '24px', padding: '40px', marginBottom: '20px', textAlign: 'center' }}>
          <div style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 800, marginBottom: '8px', letterSpacing: '-1px' }}>{line.korean}</div>
          <div style={{ fontSize: '16px', color: 'rgba(240,230,255,0.4)', marginBottom: '12px', fontStyle: 'italic' }}>{line.romanized}</div>
          <div style={{ display: 'inline-block', padding: '8px 20px', borderRadius: '12px', background: 'rgba(255,110,180,0.1)', border: '1px solid rgba(255,110,180,0.2)', fontSize: '15px', color: '#ff6eb4', fontWeight: 600 }}>{line.translation}</div>

          {showBreakdown && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '12px', marginTop: '24px' }}>
              {line.words.map((w, i) => {
                const c = typeColors[w.type] || '#9ca3af'
                return (
                  <div key={i} style={{ background: `${c}10`, border: `1px solid ${c}30`, borderRadius: '14px', padding: '14px', textAlign: 'center' }}>
                    <div style={{ fontSize: '22px', fontWeight: 800, marginBottom: '4px' }}>{w.korean}</div>
                    <div style={{ fontSize: '11px', color: 'rgba(240,230,255,0.4)', marginBottom: '6px' }}>{w.romanized}</div>
                    <div style={{ fontSize: '13px', fontWeight: 600 }}>{w.meaning}</div>
                    <div style={{ fontSize: '10px', color: c, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginTop: '4px' }}>{w.type}</div>
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {showBreakdown && (
          <div style={{ background: 'rgba(167,139,250,0.08)', border: '1px solid rgba(167,139,250,0.2)', borderRadius: '16px', padding: '20px', marginBottom: '20px' }}>
            <div style={{ fontSize: '11px', fontWeight: 700, color: '#a78bfa', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>Grammar Note</div>
            <div style={{ fontSize: '15px', lineHeight: 1.7, color: 'rgba(240,230,255,0.75)' }}>{line.lesson}</div>
          </div>
        )}

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginTop: '24px' }}>
          {!showBreakdown ? (
            <button onClick={() => setShowBreakdown(true)} style={{ padding: '14px 24px', borderRadius: '14px', fontSize: '14px', fontWeight: 700, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(240,230,255,0.7)', cursor: 'pointer' }}>Break it down →</button>
          ) : (
            <button onClick={nextLine} style={{ padding: '14px 32px', borderRadius: '14px', fontSize: '15px', fontWeight: 700, background: 'linear-gradient(135deg, #ff6eb4, #a78bfa)', border: 'none', color: '#fff', cursor: 'pointer' }}>
              {activeLine < song.lines.length - 1 ? 'Next line →' : 'Complete lesson ✓'}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
