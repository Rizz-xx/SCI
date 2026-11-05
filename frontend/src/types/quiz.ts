/**
 * Definisi Tipe Data Kuis Evaluasi Pemahaman
 * Kurikulum Biologi SMA Kelas XI - Sistem Pencernaan Manusia
 */

export type QuizCategory = 'organ' | 'proses' | 'enzim' | 'penyerapan' | 'lab'
export type QuizObjective = 1 | 2 | 3 | 4 | 5

export interface QuizOption {
  id: string
  text: string
  isCorrect?: boolean
  explanation?: string
}

export interface QuizQuestion {
  id: string
  questionText: string
  imageUrl?: string
  category: QuizCategory
  objective: QuizObjective
  options: QuizOption[]
  explanation?: string
}

export interface AnswerFeedback {
  isCorrect: boolean
  correctOptionId: string
  explanation: string
}

export interface QuizState {
  questions: QuizQuestion[]
  currentIndex: number
  answers: Record<string, string> // questionId -> selectedOptionId
  feedbacks: Record<string, AnswerFeedback>
  sessionId: string | null
  isLoading: boolean
  isCompleted: boolean
  error: string | null
}

export interface QuizResult {
  totalScore: number
  totalCorrect: number
  totalWrong: number
  totalQuestions: number
  percentage: number
}

// Payload untuk integrasi API backend
export interface SubmitAnswerPayload {
  questionId: string
  selectedOptionId: string
}

export interface CompleteSessionPayload {
  sessionId: string
  answers: {
    questionId: string
    selectedOptionId: string
    isCorrect: boolean
  }[]
}

export interface CreateSessionPayload {
  studentName?: string
}
