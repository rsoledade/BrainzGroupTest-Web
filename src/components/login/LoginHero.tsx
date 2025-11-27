export function LoginHero() {
  return (
    <div className="hidden lg:flex flex-1 relative bg-gradient-to-br from-primary-600 to-secondary-600 items-center justify-center p-12">
      <div className="max-w-lg text-white z-10">
        <h2 className="text-4xl font-bold mb-6">
          Conectando Tecnologia e Educação
        </h2>
        <p className="text-lg text-primary-100 mb-8">
          Desenvolvemos soluções que transformam a gestão escolar, 
          capacitam professores e empoderam instituições de ensino.
        </p>
        <div className="space-y-4">
          <div className="flex items-start">
            <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <div>
              <h3 className="font-semibold mb-1">Gestão Inteligente</h3>
              <p className="text-sm text-primary-100">Automatize processos e organize sua infraestrutura</p>
            </div>
          </div>
          <div className="flex items-start">
            <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <div>
              <h3 className="font-semibold mb-1">Dados em Tempo Real</h3>
              <p className="text-sm text-primary-100">Informações integradas para tomada de decisão</p>
            </div>
          </div>
          <div className="flex items-start">
            <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <div>
              <h3 className="font-semibold mb-1">Suporte Especializado</h3>
              <p className="text-sm text-primary-100">Equipe dedicada para auxiliar sua instituição</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative circles */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-white opacity-10 rounded-full"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-white opacity-5 rounded-full"></div>
    </div>
  )
}
