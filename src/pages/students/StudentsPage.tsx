import { useState, useEffect } from 'react'
import { useAuth } from '@/context/AuthContext'
import { api } from '@/services/api'
import type { Student, StudentWithEvents } from '@/types/student'
import { Card } from '@/components/ui/Card'
import { User, Mail, Calendar, Loader2, AlertCircle } from 'lucide-react'

export function StudentsPage() {
  const { token } = useAuth()
  const [students, setStudents] = useState<Student[]>([])
  const [selectedStudent, setSelectedStudent] = useState<StudentWithEvents | null>(null)
  const [isLoadingStudents, setIsLoadingStudents] = useState(true)
  const [isLoadingEvents, setIsLoadingEvents] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    loadStudents()
  }, [])

  async function loadStudents() {
    if (!token) return

    setIsLoadingStudents(true)
    setError(null)

    try {
      const data = await api.getStudents(token)
      setStudents(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao carregar estudantes')
    } finally {
      setIsLoadingStudents(false)
    }
  }

  async function handleSelectStudent(studentId: string) {
    if (!token) return

    setIsLoadingEvents(true)
    setError(null)

    try {
      const data = await api.getStudentById(studentId, token)
      setSelectedStudent(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao carregar dados do estudante')
    } finally {
      setIsLoadingEvents(false)
    }
  }

  function formatDateTime(dateTimeString: string) {
    const date = new Date(dateTimeString)
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Estudantes</h1>
          <p className="mt-2 text-gray-600">
            Selecione um estudante para visualizar seus eventos programados
          </p>
        </div>

        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <p className="text-red-800">{error}</p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Lista de Estudantes */}
          <div>
            <Card>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Lista de Estudantes
                </h2>

                {isLoadingStudents ? (
                  <div className="flex items-center justify-center py-12">
                    <Loader2 className="w-8 h-8 animate-spin text-primary-600" />
                  </div>
                ) : students.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">
                    Nenhum estudante encontrado
                  </p>
                ) : (
                  <div className="space-y-3">
                    {students.map((student) => (
                      <button
                        key={student.id}
                        onClick={() => handleSelectStudent(student.id)}
                        className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                          selectedStudent?.id === student.id
                            ? 'border-primary-600 bg-primary-50'
                            : 'border-gray-200 hover:border-primary-300 bg-white'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className="p-2 bg-primary-100 rounded-lg">
                            <User className="w-5 h-5 text-primary-600" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-medium text-gray-900 truncate">
                              {student.displayName}
                            </h3>
                            <div className="flex items-center gap-1 mt-1 text-sm text-gray-600">
                              <Mail className="w-4 h-4" />
                              <span className="truncate">{student.mail}</span>
                            </div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </Card>
          </div>

          {/* Detalhes do Estudante e Eventos */}
          <div>
            <Card>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Eventos Programados
                </h2>

                {!selectedStudent && !isLoadingEvents && (
                  <div className="text-center py-12">
                    <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">
                      Selecione um estudante para ver seus eventos
                    </p>
                  </div>
                )}

                {isLoadingEvents && (
                  <div className="flex items-center justify-center py-12">
                    <Loader2 className="w-8 h-8 animate-spin text-primary-600" />
                  </div>
                )}

                {selectedStudent && !isLoadingEvents && (
                  <div>
                    <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                      <h3 className="font-semibold text-gray-900">
                        {selectedStudent.displayName}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {selectedStudent.mail}
                      </p>
                    </div>

                    {selectedStudent.events && selectedStudent.events.length > 0 ? (
                      <div className="space-y-4">
                        {selectedStudent.events.map((event) => (
                          <div
                            key={event.id}
                            className="p-4 bg-white border border-gray-200 rounded-lg"
                          >
                            <h4 className="font-medium text-gray-900 mb-2">
                              {event.subject}
                            </h4>
                            <div className="space-y-1 text-sm text-gray-600">
                              <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>Início: {formatDateTime(event.start.dateTime)}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>Fim: {formatDateTime(event.end.dateTime)}</span>
                              </div>
                              {event.location?.displayName && (
                                <div className="mt-2 text-gray-700">
                                  📍 {event.location.displayName}
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-500 text-center py-8">
                        Nenhum evento encontrado para este estudante
                      </p>
                    )}
                  </div>
                )}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
