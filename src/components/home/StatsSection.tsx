import { Card } from '@/components/ui/Card'

export function StatsSection() {
  const stats = [
    { value: '+5 milhões', label: 'Usuários ativos', description: 'Alunos e professores' },
    { value: '+300', label: 'Escolas privadas', description: 'Instituições atendidas' },
    { value: '+450', label: 'Escolas públicas', description: 'Rede pública' },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            O Brainz Group
          </h2>
          <p className="text-lg text-gray-600">
            Números que demonstram nosso impacto na educação
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                {stat.value}
              </div>
              <div className="text-xl font-semibold text-gray-900 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-600">
                {stat.description}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
