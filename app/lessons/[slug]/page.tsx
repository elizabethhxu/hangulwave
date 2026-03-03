import { SONGS } from '@/lib/songs'
import LessonClient from './LessonClient'

export default async function LessonPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const song = SONGS.find(s => s.slug === slug) ?? null
  return <LessonClient song={song} />
}
