export function MiniImages ({ slides, curr, setImg }) {
  return (
    <div className='hidden md:grid grid-flow-row grid-cols-4 auto-cols-max gap-4 py-8 mx-8'>
      {slides.map((img, i) => {
        return (
          <div
            key={img}
            className={`rounded-2xl border-[3px] ${i === curr ? ' border-cus-primary' : 'border-transparent '}`}
          >
            <div className='bg-white rounded-xl'>
              <img
                className={`aspect-square object-cover rounded-xl cursor-pointer hover:opacity-50 ${i === curr ? 'opacity-50' : ''}`}
                src={`${import.meta.env.VITE_PUBLIC_URL}${img}`}
                onClick={() => setImg(i)}
              />
            </div>
          </div>

        )
      })}
    </div>
  )
}
