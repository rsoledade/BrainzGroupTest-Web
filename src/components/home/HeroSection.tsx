import { Button } from '@/components/ui/Button'

export function HeroSection() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-primary-600 to-secondary-600 text-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            CONECTAMOS A MELHOR TECNOLOGIA PARA FAZER SUA INSTITUIÇÃO DE ENSINO CRESCER
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-primary-100">
            Desenvolvemos tecnologia própria que atende a gestão escolar, 
            TI e coordenação pedagógica
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              className="bg-white text-primary-600 hover:bg-primary-50"
            >
              Conheça a Big Brain
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600"
            >
              Conheça a Reeducation
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto text-white">
          <path 
            fill="currentColor" 
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  )
}
