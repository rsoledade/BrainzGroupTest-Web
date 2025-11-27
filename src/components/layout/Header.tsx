import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-10 w-10 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">BG</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Brainz Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-primary-600 transition-colors">Home</a>
            <a href="#solutions" className="text-gray-700 hover:text-primary-600 transition-colors">Soluções</a>
            <a href="#about" className="text-gray-700 hover:text-primary-600 transition-colors">Sobre</a>
            <a href="#contact" className="text-gray-700 hover:text-primary-600 transition-colors">Contato</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="outline" size="sm">Login</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-primary-600 transition-colors">Home</a>
              <a href="#solutions" className="text-gray-700 hover:text-primary-600 transition-colors">Soluções</a>
              <a href="#about" className="text-gray-700 hover:text-primary-600 transition-colors">Sobre</a>
              <a href="#contact" className="text-gray-700 hover:text-primary-600 transition-colors">Contato</a>
              <Link to="/login">
                <Button variant="outline" size="sm" className="w-full">Login</Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
