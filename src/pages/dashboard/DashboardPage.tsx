import { Card } from '@/components/ui/Card'
import { useAuth } from '@/context/AuthContext'

export function DashboardPage() {
  const { user } = useAuth()

  const cards = [
    { title: 'Total de Escolas', value: '750+', icon: '🏫', color: 'text-blue-600' },
    { title: 'Usuários Ativos', value: '5M+', icon: '👥', color: 'text-green-600' },
    { title: 'Professores', value: '250K+', icon: '👨‍🏫', color: 'text-purple-600' },
    { title: 'Alunos', value: '4.8M+', icon: '🎓', color: 'text-orange-600' },
  ]

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Bem-vindo, {user?.name}!
        </h1>
        <p className="text-gray-600 mt-2">
          Aqui está um resumo das suas atividades
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <Card key={index}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">{card.title}</p>
                <p className={`text-3xl font-bold ${card.color}`}>{card.value}</p>
              </div>
              <div className="text-4xl">{card.icon}</div>
            </div>
          </Card>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Atividades Recentes
          </h2>
          <div className="space-y-4">
            {[
              { action: 'Nova escola cadastrada', time: 'Há 2 horas' },
              { action: 'Relatório mensal gerado', time: 'Há 5 horas' },
              { action: '150 novos usuários', time: 'Ontem' },
              { action: 'Atualização de sistema', time: '2 dias atrás' },
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b border-gray-200 last:border-0">
                <span className="text-gray-700">{activity.action}</span>
                <span className="text-sm text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Próximas Tarefas
          </h2>
          <div className="space-y-4">
            {[
              { task: 'Revisar relatórios pendentes', priority: 'Alta' },
              { task: 'Reunião com equipe de TI', priority: 'Média' },
              { task: 'Análise de dados mensais', priority: 'Média' },
              { task: 'Treinamento de professores', priority: 'Baixa' },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b border-gray-200 last:border-0">
                <span className="text-gray-700">{item.task}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  item.priority === 'Alta' ? 'bg-red-100 text-red-600' :
                  item.priority === 'Média' ? 'bg-yellow-100 text-yellow-600' :
                  'bg-green-100 text-green-600'
                }`}>
                  {item.priority}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
