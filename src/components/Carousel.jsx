import { IconNext, IconPrevious } from './Icons'

export function Carousel ({ children: slides, curr, prev, next }) {
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
