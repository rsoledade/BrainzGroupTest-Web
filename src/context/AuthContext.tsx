import { createContext, useContext, useState, useEffect } from 'react'
import type { ReactNode } from 'react'

interface User {
  id: string
  name: string
  email: string
}

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  async function login(email: string, _password: string) {
    setIsLoading(true)
    try {
      // Simular chamada API
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Mock de usuário
      const mockUser: User = {
        id: '1',
        name: 'Usuário Teste',
        email: email,
      }
      
      setUser(mockUser)
      localStorage.setItem('user', JSON.stringify(mockUser))
    } catch (error) {
      throw new Error('Falha ao fazer login')
    } finally {
      setIsLoading(false)
    }
  }

  function logout() {
    setUser(null)
    localStorage.removeItem('user')
  }

  return (
    <AuthContext.Provider
      value={{
        user,
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
