import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from '@/context/AuthContext'
import { ProtectedRoute } from '@/components/ProtectedRoute'
import { HomePage } from '@/pages/home/HomePage'
import { LoginPage } from '@/pages/login/LoginPage'
import { DashboardLayout } from '@/components/layout/DashboardLayout'
import { DashboardPage } from '@/pages/dashboard/DashboardPage'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Rotas públicas */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />

          {/* Rotas protegidas */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<DashboardPage />} />
            <Route path="schools" element={<div className="text-2xl">Escolas (Em desenvolvimento)</div>} />
            <Route path="users" element={<div className="text-2xl">Usuários (Em desenvolvimento)</div>} />
            <Route path="reports" element={<div className="text-2xl">Relatórios (Em desenvolvimento)</div>} />
            <Route path="settings" element={<div className="text-2xl">Configurações (Em desenvolvimento)</div>} />
          </Route>

          {/* Rota padrão */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
