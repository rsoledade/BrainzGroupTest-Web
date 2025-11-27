import { LoginForm } from '@/components/login/LoginForm'
import { LoginHero } from '@/components/login/LoginHero'

export function LoginPage() {
  return (
    <div className="min-h-screen flex">
      {/* Coluna do formulário */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-white">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <div className="mx-auto h-12 w-12 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">BG</span>
            </div>
            <h2 className="mt-6 text-3xl font-bold text-gray-900">
              Bem-vindo de volta
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Faça login para continuar
            </p>
          </div>
          
          <LoginForm />
        </div>
      </div>
      
      {/* Coluna da imagem (oculta em mobile) */}
      <LoginHero />
    </div>
  )
}
