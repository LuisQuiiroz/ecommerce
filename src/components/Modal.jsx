import { useEffect } from 'react'
import ReactDOM from 'react-dom'

export function Modal ({ children }) {
  // Cuando se monta el componete quita el scroll
  // y cuando se desmonta el componente elimina la clase
  // por lo que el scroll vuelve a aparecer
  // clase de tailwind
  useEffect(() => {
    document.body.classList.add('overflow-hidden')
    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [])
  return ReactDOM.createPortal(
    <div>
      {children}
    </div>,
    document.getElementById('modal')
  )
}
