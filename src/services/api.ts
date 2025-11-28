import { config } from '@/config'
import type { Student, StudentWithEvents } from '@/types/student'

const API_BASE_URL = config.apiBaseUrl

interface LoginResponse {
  token: string
}

interface LoginRequest {
  email: string
  password: string
}

export class ApiError extends Error {
  status: number

  constructor(status: number, message: string) {
    super(message)
    this.name = 'ApiError'
    this.status = status
  }
}

export const api = {
  async login(credentials: LoginRequest): Promise<LoginResponse> {
    const response = await fetch(`${API_BASE_URL}/Auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'accept': '*/*'
      },
      body: JSON.stringify(credentials)
    })

    if (!response.ok) {
      throw new ApiError(
        response.status,
        response.status === 401 
          ? 'Email ou senha inválidos' 
          : 'Erro ao fazer login'
      )
    }

    return response.json()
  },

  async getStudents(token: string): Promise<Student[]> {
    const response = await fetch(`${API_BASE_URL}/Students`, {
      method: 'GET',
      headers: {
        'accept': '*/*',
        'Authorization': `Bearer ${token}`
      }
    })

    if (!response.ok) {
      throw new ApiError(
        response.status,
        response.status === 401 
          ? 'Não autorizado. Faça login novamente.' 
          : 'Erro ao buscar estudantes'
      )
    }

    return response.json()
  },

  async getStudentById(studentId: string, token: string): Promise<StudentWithEvents> {
    const response = await fetch(`${API_BASE_URL}/Students/${studentId}`, {
      method: 'GET',
      headers: {
        'accept': '*/*',
        'Authorization': `Bearer ${token}`
      }
    })

    if (!response.ok) {
      throw new ApiError(
        response.status,
        response.status === 401 
          ? 'Não autorizado. Faça login novamente.' 
          : 'Erro ao buscar dados do estudante'
      )
    }

    return response.json()
  }
}
