import { useState } from 'react'
import { Carousel } from './Carousel'

export function ImgsItem ({ slides }) {
  const [curr, setCurr] = useState(0)

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))

  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

  const setImg = (i) => {
    setCurr(i)
  }
  return (
    <>
      <Carousel curr={curr} prev={prev} next={next}>
        {slides.map(slide => (
          <img className='w-screen aspect-4/3 md:aspect-square object-cover md:rounded-3xl' src={slide} key={slide} />
        ))}
      </Carousel>
      <div className='hidden md:grid grid-flow-row grid-cols-4 auto-cols-max gap-4 py-8 '>
        {slides.map((img, i) => {
          return (
            <div
              key={img}
              className={`rounded-2xl border-[3px] ${i === curr ? ' border-cus-orange' : 'border-transparent '}`}
            >
              <img
                className={`aspect-square object-cover rounded-xl cursor-pointer hover:opacity-50 ${i === curr ? 'opacity-50' : ''}`}
                src={img}
                onClick={() => setImg(i)}
              />
            </div>
          )
        })}
      </div>
    </>

  )
}
