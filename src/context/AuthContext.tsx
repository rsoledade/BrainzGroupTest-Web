import { createContext, useContext, useState, useEffect } from 'react'
import type { ReactNode } from 'react'
import { api, ApiError } from '@/services/api'

interface User {
  id: string
  name: string
  email: string
}

interface AuthContextType {
  user: User | null
  token: string | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    const storedToken = localStorage.getItem('token')
    
    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser))
      setToken(storedToken)
    }
    setIsLoading(false)
  }, [])

  async function login(email: string, password: string) {
    setIsLoading(true)
    try {
      const response = await api.login({ email, password })
      
      // Criar objeto de usuário com os dados do email
      const userData: User = {
        id: email, // Temporariamente usando email como ID até termos mais dados
        name: email.split('@')[0],
        email: email,
      }
      
      setUser(userData)
      setToken(response.token)
      localStorage.setItem('user', JSON.stringify(userData))
      localStorage.setItem('token', response.token)
    } catch (error) {
      if (error instanceof ApiError) {
        throw new Error(error.message)
      }
      throw new Error('Falha ao fazer login. Verifique sua conexão.')
    } finally {
      setIsLoading(false)
    }
  }

  function logout() {
    setUser(null)
    setToken(null)
    localStorage.removeItem('user')
    localStorage.removeItem('token')
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
