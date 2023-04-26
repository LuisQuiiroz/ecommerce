import { IconNext, IconPrevious } from './Icons'

export function Carousel ({ slides, curr, prev, next, isModal = false }) {
  return (
    <div className={`overflow-hidden relative md:rounded-3xl ${isModal ? '' : 'md:cursor-pointer'}`}>
      <div
        className='flex transition-transform ease-in-out duration-500'
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map(slide => (
          <img className='w-screen aspect-4/3 md:aspect-square object-cover md:rounded-3xl' src={`${import.meta.env.VITE_PUBLIC_URL}${slide}`} key={slide} />
        ))}
      </div>
      <div className={`absolute inset-0 flex items-center justify-between p-4 ${isModal ? '' : 'md:hidden'}`}>
        <button onClick={prev} className='p-1 md:p-2 rounded-full shadow bg-white hover:text-cus-primary'>
          <IconPrevious />
        </button>
        <button onClick={next} className='p-1 md:p-2 rounded-full shadow bg-white hover:text-cus-primary'>
          <IconNext />
        </button>
      </div>
    </div>
  )
}
