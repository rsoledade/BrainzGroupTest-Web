import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { useAuth } from '@/context/AuthContext'

const loginSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'Senha deve ter no mínimo 6 caracteres'),
})

interface LoginFormProps {
  onSuccess?: () => void
}

export function LoginForm({ onSuccess }: LoginFormProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  
  const { login } = useAuth()
  const navigate = useNavigate()

  function validateField(field: 'email' | 'password', value: string) {
    try {
      loginSchema.shape[field].parse(value)
      setErrors(prev => ({ ...prev, [field]: undefined }))
    } catch (error) {
      if (error instanceof z.ZodError) {
        const zodError = error as z.ZodError<{ email?: string; password?: string }>
        setErrors(prev => ({ ...prev, [field]: zodError.issues[0].message }))
      }
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitError('')
    
    try {
      loginSchema.parse({ email, password })
      setErrors({})
      
      setIsSubmitting(true)
      await login(email, password)
      
      if (onSuccess) {
        onSuccess()
      } else {
        navigate('/dashboard')
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: { email?: string; password?: string } = {}
        error.issues.forEach((err: z.ZodIssue) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as 'email' | 'password'] = err.message
          }
        })
        setErrors(fieldErrors)
      } else if (error instanceof Error) {
        setSubmitError(error.message)
      } else {
        setSubmitError('Erro ao fazer login. Tente novamente.')
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        label="Email"
        type="email"
        placeholder="seu@email.com"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value)
          validateField('email', e.target.value)
        }}
        error={errors.email}
        required
      />
      
      <Input
        label="Senha"
        type="password"
        placeholder="Digite sua senha"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value)
          validateField('password', e.target.value)
        }}
        error={errors.password}
        required
      />
      
      <div className="flex items-center justify-between">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            className="mr-2 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
          />
          <span className="text-sm text-gray-700">Lembrar-me</span>
        </label>
        
        <a
          href="#"
          className="text-sm text-primary-600 hover:text-primary-700 hover:underline"
        >
          Esqueci minha senha
        </a>
      </div>
      
      {submitError && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-sm text-red-600">{submitError}</p>
        </div>
      )}
      
      <Button
        type="submit"
        variant="primary"
        size="lg"
        loading={isSubmitting}
        className="w-full"
      >
        Entrar
      </Button>
      
      <p className="text-center text-sm text-gray-600">
        Não tem uma conta?{' '}
        <a
          href="#"
          className="text-primary-600 hover:text-primary-700 hover:underline font-medium"
        >
          Criar conta
        </a>
      </p>
    </form>
  )
}
