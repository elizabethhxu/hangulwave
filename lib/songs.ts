export type WordType = 'noun' | 'verb' | 'particle' | 'adverb' | 'pronoun'

export interface Word {
  korean: string
  romanized: string
  meaning: string
  type: WordType
}

export interface LyricLine {
  korean: string
  romanized: string
  translation: string
  words: Word[]
  lesson: string
}

export interface Song {
  id: number
  slug: string
  title: string
  artist: string
  group: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  thumbnail: string
  color: string
  accent: string
  lessons: number
  duration: string
  tags: string[]
  lines: LyricLine[]
}

export const SONGS: Song[] = [
  {
    id: 1,
    slug: 'bts-dynamite',
    title: 'Dynamite',
    artist: 'BTS',
    group: 'BTS',
    level: 'Beginner',
    thumbnail: '🎵',
    color: '#FF6B6B',
    accent: '#FFE66D',
    lessons: 8,
    duration: '45 min',
    tags: ['upbeat', 'english mix', 'popular'],
    lines: [
      {
        korean: '신발 끈을 매고',
        romanized: 'sinbal kkeun-eul maego',
        translation: 'Tying my shoelaces',
        words: [
          { korean: '신발', romanized: 'sinbal', meaning: 'shoes', type: 'noun' },
          { korean: '끈', romanized: 'kkeun', meaning: 'lace/string', type: 'noun' },
          { korean: '을', romanized: 'eul', meaning: '[object marker]', type: 'particle' },
          { korean: '매고', romanized: 'maego', meaning: 'tying (and...)', type: 'verb' },
        ],
        lesson: 'Object markers (을/를) attach to the noun receiving the action. Here 끈을 means "the lace" as the thing being tied.',
      },
      {
        korean: '전화해 baby',
        romanized: 'jeonhwahae baby',
        translation: 'Call me, baby',
        words: [
          { korean: '전화', romanized: 'jeonhwa', meaning: 'phone/call', type: 'noun' },
          { korean: '해', romanized: 'hae', meaning: 'do (informal command)', type: 'verb' },
        ],
        lesson: '전화하다 (to make a call) → 전화해 is the informal imperative. Mixing Korean with English words like "baby" is very common in K-pop.',
      },
      {
        korean: '불을 켜봐',
        romanized: 'bul-eul kyeobwa',
        translation: 'Try turning on the lights',
        words: [
          { korean: '불', romanized: 'bul', meaning: 'fire/light', type: 'noun' },
          { korean: '을', romanized: 'eul', meaning: '[object marker]', type: 'particle' },
          { korean: '켜봐', romanized: 'kyeobwa', meaning: 'try turning on', type: 'verb' },
        ],
        lesson: '봐 (-bwa) added to a verb stem means "try doing something." 켜다 (to turn on) + 봐 = try turning on.',
      },
    ],
  },
  {
    id: 2,
    slug: 'newjeans-attention',
    title: 'Attention',
    artist: 'NewJeans',
    group: 'NewJeans',
    level: 'Beginner',
    thumbnail: '🎀',
    color: '#A8EDEA',
    accent: '#FED6E3',
    lessons: 6,
    duration: '35 min',
    tags: ['y2k', 'casual speech', 'romance'],
    lines: [
      {
        korean: '자꾸 웃게 만들잖아',
        romanized: 'jakku utge mandeuljanah',
        translation: 'You keep making me smile',
        words: [
          { korean: '자꾸', romanized: 'jakku', meaning: 'repeatedly/keeps', type: 'adverb' },
          { korean: '웃게', romanized: 'utge', meaning: 'to smile (causative form)', type: 'verb' },
          { korean: '만들잖아', romanized: 'mandeuljanah', meaning: 'you make (don\'t you?)', type: 'verb' },
        ],
        lesson: '자꾸 is a super common word meaning "keeps doing" or "repeatedly." 잖아 at the end is a tag question implying shared knowledge — like "you know?"',
      },
      {
        korean: '눈을 못 떼겠어',
        romanized: 'nun-eul mot ttegeesseo',
        translation: 'I can\'t take my eyes off',
        words: [
          { korean: '눈', romanized: 'nun', meaning: 'eyes', type: 'noun' },
          { korean: '못', romanized: 'mot', meaning: 'can\'t (inability)', type: 'adverb' },
          { korean: '떼겠어', romanized: 'ttegeesseo', meaning: 'take off/detach', type: 'verb' },
        ],
        lesson: '못 before a verb = inability. 못 가다 (can\'t go), 못 먹다 (can\'t eat). Different from 안 which means "won\'t/don\'t."',
      },
    ],
  },
  {
    id: 3,
    slug: 'blackpink-pink-venom',
    title: 'Pink Venom',
    artist: 'BLACKPINK',
    group: 'BLACKPINK',
    level: 'Intermediate',
    thumbnail: '🖤',
    color: '#FF006E',
    accent: '#8338EC',
    lessons: 10,
    duration: '55 min',
    tags: ['powerful', 'slang', 'confidence'],
    lines: [
      {
        korean: '독을 품은 꽃',
        romanized: 'dog-eul pum-eun kkot',
        translation: 'A flower holding venom',
        words: [
          { korean: '독', romanized: 'dog', meaning: 'poison/venom', type: 'noun' },
          { korean: '품은', romanized: 'pum-eun', meaning: 'holding/harboring', type: 'verb' },
          { korean: '꽃', romanized: 'kkot', meaning: 'flower', type: 'noun' },
        ],
        lesson: 'Verb + 은/ㄴ creates a noun-modifying clause. 품은 꽃 = "flower that holds" — the verb phrase describes the noun. This structure is everywhere in Korean.',
      },
    ],
  },
  {
    id: 4,
    slug: 'aespa-spicy',
    title: 'SPICY',
    artist: 'aespa',
    group: 'aespa',
    level: 'Intermediate',
    thumbnail: '🌶️',
    color: '#FF4500',
    accent: '#00D4FF',
    lessons: 9,
    duration: '50 min',
    tags: ['futuristic', 'slang', 'cool vibes'],
    lines: [
      {
        korean: '나는 내가 제일 좋아',
        romanized: 'na-neun naega jeil joa',
        translation: 'I like myself the most',
        words: [
          { korean: '나는', romanized: 'na-neun', meaning: 'I (topic)', type: 'pronoun' },
          { korean: '내가', romanized: 'naega', meaning: 'I (subject)', type: 'pronoun' },
          { korean: '제일', romanized: 'jeil', meaning: 'the most/number one', type: 'adverb' },
          { korean: '좋아', romanized: 'joa', meaning: 'like/good', type: 'verb' },
        ],
        lesson: 'Korean has two "I" words: 나는 (topic, what we\'re talking about) and 내가 (subject, who does the action). Using both emphasizes self-reference strongly.',
      },
    ],
  },
]

export const VOCAB_QUIZ = [
  { korean: '신발', answer: 'shoes', options: ['shoes', 'hat', 'bag', 'jacket'] },
  { korean: '자꾸', answer: 'repeatedly', options: ['slowly', 'quietly', 'repeatedly', 'quickly'] },
  { korean: '눈', answer: 'eyes', options: ['ears', 'eyes', 'mouth', 'nose'] },
  { korean: '꽃', answer: 'flower', options: ['tree', 'water', 'flower', 'sky'] },
  { korean: '불', answer: 'fire/light', options: ['water', 'fire/light', 'wind', 'earth'] },
]
