export interface AuthResponse {
  accessToken: string
  refreshToken: string
}

export interface User {
  email: string
  name: string
}

export interface Item {
  itemId: string
  userId: string
  name: string
  description: string
  createdAt: string
}

export interface ChatResponse {
  reply: string
}

export interface ApiError {
  detail?: {
    error?: string
    message?: string
  }
  message?: string
}
