export type WordType = 'noun' | 'verb' | 'particle' | 'adverb' | 'pronoun' | 'adjective'

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
  year?: number
  isNew?: boolean
}

export const SONGS: Song[] = [
  // ── 2025 SONGS ──────────────────────────────────────────────
  {
    id: 5,
    slug: 'kpop-demon-hunters-golden',
    title: 'Golden',
    artist: 'K-pop Demon Hunters',
    group: 'K-pop Demon Hunters',
    level: 'Beginner',
    thumbnail: '✨',
    color: '#FFD700',
    accent: '#FF6B35',
    lessons: 7,
    duration: '40 min',
    tags: ['hopeful', 'anthem', '2025'],
    year: 2025,
    isNew: true,
    lines: [
      {
        korean: '빛나는 순간을 잡아',
        romanized: 'bitnaneun sunganeul jaba',
        translation: 'Catch the shining moment',
        words: [
          { korean: '빛나는', romanized: 'bitnaneun', meaning: 'shining/glowing', type: 'adjective' },
          { korean: '순간', romanized: 'sungan', meaning: 'moment/instant', type: 'noun' },
          { korean: '을', romanized: 'eul', meaning: '[object marker]', type: 'particle' },
          { korean: '잡아', romanized: 'jaba', meaning: 'catch/grab (command)', type: 'verb' },
        ],
        lesson: '빛나다 (to shine) becomes 빛나는 when used to describe a noun — this is called a present participle modifier. 빛나는 순간 = "the shining moment." You\'ll see this -는 + noun pattern constantly in Korean.',
      },
      {
        korean: '우리는 황금빛이야',
        romanized: 'urineun hwanggeumsbisgiya',
        translation: 'We are golden',
        words: [
          { korean: '우리는', romanized: 'urineun', meaning: 'we (topic)', type: 'pronoun' },
          { korean: '황금빛', romanized: 'hwanggeumbit', meaning: 'golden light/golden color', type: 'noun' },
          { korean: '이야', romanized: 'iya', meaning: 'are/is (informal)', type: 'verb' },
        ],
        lesson: '이야 is the informal version of 이에요 (to be). Used with close friends or in casual song lyrics. 황금 means gold, 빛 means light — combined: golden light. Korean often builds meaning by joining two nouns together.',
      },
      {
        korean: '두려움 없이 나아가',
        romanized: 'duryeowum eopsi naaga',
        translation: 'Move forward without fear',
        words: [
          { korean: '두려움', romanized: 'duryeowum', meaning: 'fear', type: 'noun' },
          { korean: '없이', romanized: 'eopsi', meaning: 'without', type: 'adverb' },
          { korean: '나아가', romanized: 'naaga', meaning: 'move forward (command)', type: 'verb' },
        ],
        lesson: '없이 means "without" — it attaches to a noun to say "without [noun]." 두려움 없이 = without fear. 돈 없이 = without money. 너 없이 = without you. Very useful pattern that appears in many K-pop ballads.',
      },
    ],
  },
  {
    id: 6,
    slug: 'nmixx-blue-valentine',
    title: 'Blue Valentine',
    artist: 'NMIXX',
    group: 'NMIXX',
    level: 'Intermediate',
    thumbnail: '💙',
    color: '#4169E1',
    accent: '#E91E8C',
    lessons: 9,
    duration: '50 min',
    tags: ['synth-pop', 'emotional', '2025'],
    year: 2025,
    isNew: true,
    lines: [
      {
        korean: '파란 기억 속에 너가 있어',
        romanized: 'paran gieok soge neoga isseo',
        translation: 'You exist inside my blue memories',
        words: [
          { korean: '파란', romanized: 'paran', meaning: 'blue', type: 'adjective' },
          { korean: '기억', romanized: 'gieok', meaning: 'memory', type: 'noun' },
          { korean: '속에', romanized: 'soge', meaning: 'inside/within', type: 'particle' },
          { korean: '너가', romanized: 'neoga', meaning: 'you (subject)', type: 'pronoun' },
          { korean: '있어', romanized: 'isseo', meaning: 'exist/are (informal)', type: 'verb' },
        ],
        lesson: '속에 means "inside" or "within" — it\'s a location particle. 기억 속에 = inside memories. 마음 속에 = inside (my) heart. 꿈 속에 = inside a dream. It\'s one of the most poetic particles in Korean and shows up constantly in love songs.',
      },
      {
        korean: '잊을 수가 없잖아',
        romanized: 'ijeul suga eopjanha',
        translation: 'I just can\'t forget, you know',
        words: [
          { korean: '잊을', romanized: 'ijeul', meaning: 'to forget (future modifier)', type: 'verb' },
          { korean: '수가', romanized: 'suga', meaning: 'ability/possibility', type: 'noun' },
          { korean: '없잖아', romanized: 'eopjanha', meaning: 'there isn\'t (you know)', type: 'verb' },
        ],
        lesson: 'The pattern ~ㄹ/을 수가 없다 means "there is no way to do [verb]" — a stronger version of just saying "can\'t." 잊을 수가 없다 = there is literally no way to forget. The 잖아 ending adds an emotional "you know?" appeal to the listener.',
      },
    ],
  },
  {
    id: 7,
    slug: 'aespa-rich-man',
    title: 'Rich Man',
    artist: 'aespa',
    group: 'aespa',
    level: 'Intermediate',
    thumbnail: '💎',
    color: '#9B59B6',
    accent: '#F1C40F',
    lessons: 8,
    duration: '45 min',
    tags: ['confidence', 'luxury', '2025'],
    year: 2025,
    isNew: true,
    lines: [
      {
        korean: '내 눈빛만으로 충분해',
        romanized: 'nae nunbikmaneuro chungbunhae',
        translation: 'Just my gaze alone is enough',
        words: [
          { korean: '내', romanized: 'nae', meaning: 'my', type: 'pronoun' },
          { korean: '눈빛', romanized: 'nunbik', meaning: 'gaze/look in one\'s eyes', type: 'noun' },
          { korean: '만으로', romanized: 'maneuro', meaning: 'with just/only', type: 'particle' },
          { korean: '충분해', romanized: 'chungbunhae', meaning: 'is enough/sufficient', type: 'adjective' },
        ],
        lesson: '만 means "only" or "just" — it attaches directly to a noun. 너만 = only you. 눈빛만 = just my gaze. Adding 으로 after 만 creates "with just [noun]." This combination is great for expressing self-confidence, which is why it fits aespa perfectly.',
      },
      {
        korean: '원하는 건 다 가져',
        romanized: 'wonhaneun geon da gajyeo',
        translation: 'Take everything you want',
        words: [
          { korean: '원하는', romanized: 'wonhaneun', meaning: 'wanting/desired', type: 'verb' },
          { korean: '건', romanized: 'geon', meaning: 'thing (contraction of 것은)', type: 'noun' },
          { korean: '다', romanized: 'da', meaning: 'all/everything', type: 'adverb' },
          { korean: '가져', romanized: 'gajyeo', meaning: 'take/have (informal command)', type: 'verb' },
        ],
        lesson: '건 is a shortened form of 것은 (thing + topic marker). 원하는 것 = the thing one wants. Shortening 것은 to 건 is extremely common in spoken Korean and lyrics. 다 meaning "all" before a verb is a powerful intensifier — 다 가져 = take it ALL.',
      },
    ],
  },
  {
    id: 8,
    slug: 'blackpink-jump',
    title: 'Jump',
    artist: 'BLACKPINK',
    group: 'BLACKPINK',
    level: 'Beginner',
    thumbnail: '🖤💗',
    color: '#FF1493',
    accent: '#000000',
    lessons: 7,
    duration: '40 min',
    tags: ['hype', 'girl crush', '2025'],
    year: 2025,
    isNew: true,
    lines: [
      {
        korean: '높이 뛰어올라',
        romanized: 'nopi ttwieolla',
        translation: 'Jump up high',
        words: [
          { korean: '높이', romanized: 'nopi', meaning: 'high/highly', type: 'adverb' },
          { korean: '뛰어올라', romanized: 'ttwieolla', meaning: 'jump up (command)', type: 'verb' },
        ],
        lesson: '높다 (to be high/tall) becomes 높이 when used as an adverb modifying a verb — like adding -ly in English. 높이 뛰다 = jump highly. Korean adjectives transform into adverbs by replacing 다 with 이 or 게. This is one of the most useful grammar patterns to know.',
      },
      {
        korean: '한계는 없어, 날아가',
        romanized: 'hanggyeneun eopseo, nalagga',
        translation: 'There are no limits, fly away',
        words: [
          { korean: '한계', romanized: 'hanggye', meaning: 'limit/boundary', type: 'noun' },
          { korean: '는', romanized: 'neun', meaning: '[topic marker]', type: 'particle' },
          { korean: '없어', romanized: 'eopseo', meaning: 'there isn\'t/don\'t exist', type: 'verb' },
          { korean: '날아가', romanized: 'nalagga', meaning: 'fly away (command)', type: 'verb' },
        ],
        lesson: '없어 is one of the most common Korean words — it means "there isn\'t" or "don\'t have." The opposite is 있어 (there is/have). 한계는 없어 = limits don\'t exist. Using the topic marker 는 after 한계 puts emphasis on "limits" as the subject being addressed.',
      },
      {
        korean: '세상이 두렵지 않아',
        romanized: 'sesangi duryeopji ana',
        translation: 'I\'m not afraid of the world',
        words: [
          { korean: '세상', romanized: 'sesang', meaning: 'world', type: 'noun' },
          { korean: '이', romanized: 'i', meaning: '[subject marker]', type: 'particle' },
          { korean: '두렵지', romanized: 'duryeopji', meaning: 'afraid/fearful', type: 'adjective' },
          { korean: '않아', romanized: 'ana', meaning: 'not (negation)', type: 'verb' },
        ],
        lesson: 'The pattern ~지 않아 is a clean way to negate adjectives and verbs. 두렵지 않아 = not afraid. 좋지 않아 = not good. 슬프지 않아 = not sad. It\'s slightly more formal than just adding 안 before the word, and sounds more natural in song lyrics.',
      },
    ],
  },

  // ── CLASSIC SONGS ──────────────────────────────────────────
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
  { korean: '빛나는', answer: 'shining', options: ['shining', 'falling', 'running', 'sleeping'] },
  { korean: '두려움', answer: 'fear', options: ['joy', 'fear', 'love', 'hope'] },
  { korean: '한계', answer: 'limit', options: ['limit', 'dream', 'path', 'strength'] },
  { korean: '세상', answer: 'world', options: ['sky', 'world', 'heart', 'ocean'] },
  { korean: '기억', answer: 'memory', options: ['memory', 'future', 'present', 'secret'] },
]
