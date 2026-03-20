import { useInView } from 'react-intersection-observer'
import './FadeIn.css'

export default function FadeIn({ 
  children, 
  delay = 0, 
  direction = 'up', 
  className = '',
  threshold = 0.1 
}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold,
  })

  return (
    <div
      ref={ref}
      className={`fadein fadein--${direction} ${inView ? 'fadein--visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
