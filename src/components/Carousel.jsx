import { useState } from 'react'
import { IconNext, IconPrevious } from './Icons'

export function Carousel ({ children: slides }) {
  const [curr, setCurr] = useState(0)

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))

  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))
  return (
    <div className='overflow-hidden relative'>
      <div
        className='flex transition-transform ease-in-out duration-500'
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      <div className='absolute inset-0 flex items-center justify-between p-4'>
        <button onClick={prev} className='p-1 rounded-full shadow bg-cus-white text-cus-very-dark-blue hover:text-cus-orange'>
          <IconPrevious />
        </button>
        <button onClick={next} className='p-1 rounded-full shadow bg-cus-white text-cus-very-dark-blue hover:text-cus-orange'>
          <IconNext />
        </button>
      </div>
    </div>
  )
}
