const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api'

async function request<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const url = `${API_BASE}${endpoint}`
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    ...options,
  })

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Terjadi kesalahan pada server' }))
    throw new Error(error.message || `HTTP error! status: ${response.status}`)
  }

  return response.json()
}

export const api = {
  // Quiz endpoints
  quiz: {
    getQuestions: () => request<QuizQuestion[]>('/quiz/questions'),
    submitAnswer: (data: SubmitAnswerPayload) =>
      request<AnswerFeedback>('/quiz/submit', {
        method: 'POST',
        body: JSON.stringify(data),
      }),
    completeSession: (data: CompleteSessionPayload) =>
      request<SessionResult>('/quiz/complete', {
        method: 'POST',
        body: JSON.stringify(data),
      }),
  },

  // Progress endpoints
  progress: {
    createSession: (data: CreateSessionPayload) =>
      request<{ sessionId: string }>('/progress/session', {
        method: 'POST',
        body: JSON.stringify(data),
      }),
    getSession: (id: string) => request<SessionDetail>(`/progress/session/${id}`),
    getHistory: () => request<SessionSummary[]>('/progress/history'),
  },
}

// Types
export interface QuizQuestion {
  id: string
  questionText: string
  imageUrl?: string
  category: string
  objective: number
  options: QuizOption[]
}

export interface QuizOption {
  id: string
  text: string
}

export interface SubmitAnswerPayload {
  questionId: string
  selectedOptionId: string
}

export interface AnswerFeedback {
  isCorrect: boolean
  correctOptionId: string
  explanation: string
}

export interface CompleteSessionPayload {
  sessionId: string
  answers: { questionId: string; selectedOptionId: string; isCorrect: boolean }[]
}

export interface SessionResult {
  sessionId: string
  totalScore: number
  totalCorrect: number
  totalWrong: number
  totalQuestions: number
  percentage: number
}

export interface CreateSessionPayload {
  studentName?: string
}

export interface SessionDetail {
  id: string
  studentName?: string
  totalScore: number
  totalCorrect: number
  totalWrong: number
  totalQuestions: number
  answers: Array<{
    questionId: string
    isCorrect: boolean
  }>
  completedAt?: string
}

export interface SessionSummary {
  id: string
  totalScore: number
  totalCorrect: number
  totalQuestions: number
  completedAt?: string
}
