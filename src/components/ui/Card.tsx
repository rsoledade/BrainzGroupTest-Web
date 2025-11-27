import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-lg border border-gray-200 p-6 shadow-sm',
        hover && 'transition-transform duration-200 hover:scale-105 hover:shadow-md',
        className
      )}
    >
      {children}
    </div>
  )
}
