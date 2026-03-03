'use client'
import Link from 'next/link'

export default function DashboardPage() {
  const stats = [
    { label: 'Day Streak', value: 7, unit: 'days', color: '#ff6eb4' },
    { label: 'Total XP', value: 340, unit: 'xp', color: '#a78bfa' },
    { label: 'Words Learned', value: 47, unit: 'words', color: '#4ade80' },
    { label: 'Lessons Done', value: 12, unit: 'lessons', color: '#facc15' },
  ]
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
  const activity = [60, 80, 40, 90, 70, 30, 50]

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a12', color: '#f0e6ff', fontFamily: "'Syne', sans-serif" }}>
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 32px', background: 'rgba(10,10,18,0.85)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,182,255,0.1)' }}>
        <span style={{ fontSize: '22px', fontWeight: 800, background: 'linear-gradient(135deg, #ff6eb4, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>한글Wave</span>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Link href="/" style={{ padding: '8px 16px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, color: 'rgba(240,230,255,0.5)' }}>Songs</Link>
          <Link href="/quiz" style={{ padding: '8px 16px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, color: 'rgba(240,230,255,0.5)' }}>Quiz</Link>
        </div>
      </nav>

      <div style={{ padding: '100px 32px 40px', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ fontSize: '28px', fontWeight: 800, marginBottom: '8px' }}>Your Progress</div>
        <div style={{ fontSize: '14px', color: 'rgba(240,230,255,0.4)', marginBottom: '32px' }}>Keep the streak alive 🔥</div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '16px', marginBottom: '32px' }}>
          {stats.map(item => (
            <div key={item.label} style={{ background: `${item.color}12`, border: `1px solid ${item.color}30`, borderRadius: '20px', padding: '24px' }}>
              <div style={{ fontSize: '36px', fontWeight: 800, color: item.color }}>{item.value}</div>
              <div style={{ fontSize: '12px', color: 'rgba(240,230,255,0.4)', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '4px' }}>{item.label}</div>
            </div>
          ))}
        </div>

        <div style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '3px', color: 'rgba(240,230,255,0.3)', textTransform: 'uppercase', marginBottom: '16px' }}>Weekly Activity</div>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-end', marginBottom: '40px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', padding: '24px' }}>
          {days.map((d, i) => (
            <div key={i} style={{ flex: 1, textAlign: 'center' }}>
              <div style={{ height: `${activity[i]}px`, background: i < 5 ? 'linear-gradient(180deg, #ff6eb4, #a78bfa)' : 'rgba(255,255,255,0.08)', borderRadius: '6px 6px 0 0', marginBottom: '8px', transition: 'height 0.3s' }} />
              <div style={{ fontSize: '11px', color: 'rgba(240,230,255,0.3)' }}>{d}</div>
            </div>
          ))}
        </div>

        <Link href="/" style={{ display: 'inline-block', padding: '14px 32px', borderRadius: '14px', fontSize: '15px', fontWeight: 700, background: 'linear-gradient(135deg, #ff6eb4, #a78bfa)', color: '#fff' }}>Continue learning →</Link>
      </div>
    </div>
  )
}
