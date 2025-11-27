import { Card } from '@/components/ui/Card'

export function ServicesSection() {
  const services = [
    {
      title: 'Gestão Escolar',
      description: 'Soluções completas para administração e gestão da sua instituição de ensino.',
      icon: '📚',
    },
    {
      title: 'Infraestrutura de TI',
      description: 'Automatização de processos e organização da infraestrutura tecnológica.',
      icon: '💻',
    },
    {
      title: 'Capacitação de Professores',
      description: 'Treinamentos para melhor uso da tecnologia em sala de aula.',
      icon: '👨‍🏫',
    },
    {
      title: 'Integração de Dados',
      description: 'Informações em tempo real para facilitar a tomada de decisão.',
      icon: '📊',
    },
  ]

  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossas Soluções
          </h2>
          <p className="text-lg text-gray-600">
            Tecnologia que transforma a educação
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} hover className="cursor-pointer">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
