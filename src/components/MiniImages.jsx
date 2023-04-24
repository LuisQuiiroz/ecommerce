export function MiniImages ({ slides, curr, setImg }) {
  return (
    <div className='hidden md:grid grid-flow-row grid-cols-4 auto-cols-max gap-4 py-8 mx-8'>
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
  )
}
