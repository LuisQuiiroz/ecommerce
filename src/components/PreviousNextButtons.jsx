import { IconNext, IconPrevious } from './Icons'

export function PreviousNextButtons ({ prev, next }) {
  return (
    <div className='absolute inset-0 flex items-center justify-between p-4'>
      <button onClick={prev} className='p-1 rounded-full shadow bg-cus-white text-cus-very-dark-blue hover:text-cus-orange'>
        <IconPrevious />
      </button>
      <button onClick={next} className='p-1 rounded-full shadow bg-cus-white text-cus-very-dark-blue hover:text-cus-orange'>
        <IconNext />
      </button>
    </div>
  )
}
