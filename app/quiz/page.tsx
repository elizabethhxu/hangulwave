'use client'
import { useState } from 'react'
import Link from 'next/link'
import { VOCAB_QUIZ } from '@/lib/songs'

export default function QuizPage() {
  const [index, setIndex] = useState(0)
  const [answer, setAnswer] = useState<string | null>(null)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)

  const q = VOCAB_QUIZ[index]

  const handleAnswer = (opt: string) => {
    if (answer !== null) return
    setAnswer(opt)
    if (opt === q.answer) setScore(s => s + 1)
  }

  const next = () => {
    if (index + 1 >= VOCAB_QUIZ.length) { setDone(true) }
    else { setIndex(index + 1); setAnswer(null) }
  }

  const reset = () => { setIndex(0); setAnswer(null); setScore(0); setDone(false) }

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a12', color: '#f0e6ff', fontFamily: "'Syne', sans-serif" }}>
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 32px', background: 'rgba(10,10,18,0.85)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,182,255,0.1)' }}>
        <span style={{ fontSize: '22px', fontWeight: 800, background: 'linear-gradient(135deg, #ff6eb4, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>한글Wave</span>
        <Link href="/" style={{ padding: '8px 16px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, color: 'rgba(240,230,255,0.5)' }}>← Home</Link>
      </nav>

      <div style={{ padding: '100px 32px 40px', maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ fontSize: '13px', fontWeight: 700, color: 'rgba(240,230,255,0.35)', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '24px' }}>
          Vocabulary Quiz · {index + 1} / {VOCAB_QUIZ.length}
        </div>

        {!done ? (
          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,182,255,0.1)', borderRadius: '24px', padding: '40px', textAlign: 'center' }}>
            <div style={{ fontSize: '56px', fontWeight: 800, marginBottom: '8px' }}>{q.korean}</div>
            <div style={{ fontSize: '14px', color: 'rgba(240,230,255,0.4)', marginBottom: '32px' }}>What does this mean in English?</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
              {q.options.map(opt => {
                const revealed = answer !== null
                const isCorrect = opt === q.answer
                const isSelected = opt === answer
                let bg = 'rgba(255,255,255,0.05)'
                let border = '1px solid rgba(255,255,255,0.1)'
                let color = 'rgba(240,230,255,0.8)'
                if (revealed) {
                  if (isCorrect) { bg = 'rgba(74,222,128,0.15)'; border = '1px solid #4ade80'; color = '#4ade80' }
                  else if (isSelected) { bg = 'rgba(248,113,113,0.15)'; border = '1px solid #f87171'; color = '#f87171' }
                }
                return (
                  <button key={opt} onClick={() => handleAnswer(opt)} style={{ padding: '16px', borderRadius: '14px', fontSize: '15px', fontWeight: 600, cursor: revealed ? 'default' : 'pointer', background: bg, border, color, transition: 'all 0.2s' }}>{opt}</button>
                )
              })}
            </div>
            {answer && (
              <button onClick={next} style={{ padding: '14px 32px', borderRadius: '14px', fontSize: '15px', fontWeight: 700, background: 'linear-gradient(135deg, #ff6eb4, #a78bfa)', border: 'none', color: '#fff', cursor: 'pointer' }}>
                {index + 1 < VOCAB_QUIZ.length ? 'Next →' : 'See results'}
              </button>
            )}
          </div>
        ) : (
          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,182,255,0.1)', borderRadius: '24px', padding: '48px', textAlign: 'center' }}>
            <div style={{ fontSize: '64px', marginBottom: '16px' }}>{score >= 4 ? '🌟' : score >= 2 ? '👍' : '💪'}</div>
            <div style={{ fontSize: '32px', fontWeight: 800, marginBottom: '8px' }}>{score} / {VOCAB_QUIZ.length}</div>
            <div style={{ fontSize: '16px', color: 'rgba(240,230,255,0.5)', marginBottom: '32px' }}>
              {score >= 4 ? 'Excellent work!' : score >= 2 ? 'Good effort, keep going!' : 'Keep practicing — you\'ll get it!'}
            </div>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
              <button onClick={reset} style={{ padding: '14px 32px', borderRadius: '14px', fontSize: '15px', fontWeight: 700, background: 'linear-gradient(135deg, #ff6eb4, #a78bfa)', border: 'none', color: '#fff', cursor: 'pointer' }}>Try again</button>
              <Link href="/" style={{ padding: '14px 24px', borderRadius: '14px', fontSize: '14px', fontWeight: 700, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(240,230,255,0.7)' }}>Back to songs</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
