'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { SONGS } from '@/lib/songs'

const levelColor: Record<string, string> = {
  Beginner: '#4ADE80',
  Intermediate: '#FACC15',
  Advanced: '#F87171',
}

const groups = ['All', 'BTS', 'NewJeans', 'BLACKPINK', 'aespa', 'Beginner', 'Intermediate']

export default function Home() {
  const [filter, setFilter] = useState('All')
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 1,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.5 + 0.1,
    }))
    let raf: number
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,182,255,${p.opacity})`
        ctx.fill()
        p.x += p.dx; p.y += p.dy
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1
      })
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => cancelAnimationFrame(raf)
  }, [])

  const filtered = filter === 'All' ? SONGS : SONGS.filter(s => s.group === filter || s.level === filter)

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a12', color: '#f0e6ff', fontFamily: "'Syne', sans-serif", position: 'relative' }}>
      <canvas ref={canvasRef} style={{ position: 'fixed', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }} />

      {/* NAV */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 32px', background: 'rgba(10,10,18,0.85)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,182,255,0.1)' }}>
        <span style={{ fontSize: '22px', fontWeight: 800, background: 'linear-gradient(135deg, #ff6eb4, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>한글Wave</span>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Link href="/dashboard" style={{ padding: '8px 16px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, color: 'rgba(240,230,255,0.5)' }}>Progress</Link>
          <Link href="/quiz" style={{ padding: '8px 16px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, color: 'rgba(240,230,255,0.5)' }}>Quiz</Link>
        </div>
        <Link href="/quiz" style={{ padding: '10px 20px', borderRadius: '14px', fontSize: '13px', fontWeight: 700, background: 'linear-gradient(135deg, #ff6eb4, #a78bfa)', color: '#fff' }}>Start Free</Link>
      </nav>

      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* HERO */}
        <div style={{ paddingTop: '120px', paddingBottom: '60px', textAlign: 'center' }}>
          <div style={{ display: 'inline-block', padding: '6px 16px', borderRadius: '20px', background: 'rgba(255,110,180,0.15)', border: '1px solid rgba(255,110,180,0.3)', fontSize: '12px', fontWeight: 700, color: '#ff6eb4', letterSpacing: '2px', marginBottom: '24px', textTransform: 'uppercase' }}>✦ Learn Korean through K-pop</div>
          <h1 style={{ fontSize: 'clamp(42px, 7vw, 80px)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-2px', marginBottom: '20px' }}>
            <span style={{ display: 'block' }}>Learn Korean</span>
            <span style={{ background: 'linear-gradient(135deg, #ff6eb4 20%, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>through the music</span>
            <span style={{ display: 'block' }}>you already love.</span>
          </h1>
          <p style={{ fontSize: '17px', color: 'rgba(240,230,255,0.55)', maxWidth: '500px', margin: '0 auto 40px', lineHeight: 1.7 }}>Decode lyrics line by line. Learn real grammar from real songs. Built for fans, by fans.</p>
          <div style={{ display: 'flex', gap: '32px', justifyContent: 'center', marginBottom: '60px', flexWrap: 'wrap' }}>
            {[['10K+', 'Active Learners'], ['200+', 'Song Lessons'], ['4.9★', 'Rating'], ['Free', 'To Start']].map(([num, label]) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '32px', fontWeight: 800, background: 'linear-gradient(135deg, #ff6eb4, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{num}</div>
                <div style={{ fontSize: '12px', color: 'rgba(240,230,255,0.4)', letterSpacing: '1px', textTransform: 'uppercase' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* SONGS */}
        <div style={{ padding: '0 32px 60px', maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '3px', color: 'rgba(240,230,255,0.35)', textTransform: 'uppercase', marginBottom: '20px' }}>Browse Songs</div>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '28px', flexWrap: 'wrap' }}>
            {groups.map(g => (
              <button key={g} onClick={() => setFilter(g)} style={{ padding: '7px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: 700, cursor: 'pointer', border: filter === g ? '1px solid #ff6eb4' : '1px solid rgba(255,255,255,0.1)', background: filter === g ? 'rgba(255,110,180,0.15)' : 'transparent', color: filter === g ? '#ff6eb4' : 'rgba(240,230,255,0.45)' }}>{g}</button>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '16px' }}>
            {filtered.map(song => (
              <Link key={song.id} href={`/lessons/${song.slug}`} style={{ textDecoration: 'none' }}>
                <div style={{ background: `linear-gradient(135deg, ${song.color}18, ${song.accent}10)`, border: `1px solid ${song.color}30`, borderRadius: '20px', padding: '24px', cursor: 'pointer', transition: 'transform 0.2s', color: '#f0e6ff' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-4px)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}>
                  <div style={{ fontSize: '36px', marginBottom: '12px' }}>{song.thumbnail}</div>
                  <div style={{ fontSize: '18px', fontWeight: 800, marginBottom: '4px' }}>{song.title}</div>
                  <div style={{ fontSize: '13px', color: 'rgba(240,230,255,0.45)', marginBottom: '16px' }}>{song.artist}</div>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
                    <span style={{ padding: '3px 10px', borderRadius: '10px', fontSize: '11px', fontWeight: 700, background: `${levelColor[song.level]}25`, color: levelColor[song.level], border: `1px solid ${levelColor[song.level]}40` }}>{song.level}</span>
                    <span style={{ padding: '3px 10px', borderRadius: '10px', fontSize: '11px', fontWeight: 700, background: 'rgba(240,230,255,0.05)', color: 'rgba(240,230,255,0.4)', border: '1px solid rgba(240,230,255,0.1)' }}>{song.tags[0]}</span>
                  </div>
                  <div style={{ display: 'flex', gap: '16px', marginTop: '16px' }}>
                    <span style={{ fontSize: '12px', color: 'rgba(240,230,255,0.4)' }}>📖 {song.lessons} lessons</span>
                    <span style={{ fontSize: '12px', color: 'rgba(240,230,255,0.4)' }}>⏱ {song.duration}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ padding: '0 32px 80px', maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ background: 'linear-gradient(135deg, rgba(255,110,180,0.08), rgba(167,139,250,0.08))', border: '1px solid rgba(255,182,255,0.1)', borderRadius: '28px', padding: '56px 40px' }}>
            <div style={{ fontSize: '32px', fontWeight: 800, marginBottom: '12px' }}>Ready to start stanning <em>and</em> studying?</div>
            <div style={{ fontSize: '16px', color: 'rgba(240,230,255,0.45)', marginBottom: '32px' }}>Free forever. Upgrade when you&apos;re ready.</div>
            <Link href={`/lessons/${SONGS[0].slug}`} style={{ display: 'inline-block', padding: '16px 40px', borderRadius: '14px', fontSize: '16px', fontWeight: 700, background: 'linear-gradient(135deg, #ff6eb4, #a78bfa)', color: '#fff' }}>Start your first lesson →</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
