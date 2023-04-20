import React from 'react'

const a = () => {
  return (
    <div>
      <div className='relative w-full '>
        <div
          className='flex transition duration-500 ease-in-out'
        >
          {
                images.map((img, i) =>
                  <img
                    className='aspect-4/3 object-cover'
                    key={img[i]}
                    src={img}
                    alt={`imagen tenis ${i}`}
                  />
                )
              }
        </div>
        {/* <img className='w-screen aspect-4/3 md:aspect-square object-cover' src={images[3]} alt='imagen tenis' /> */}
        <button
          className='bg-white flex justify-center items-center w-12 h-12 rounded-full hover:text-cus-orange absolute left-4 top-1/2 transform -translate-y-1/2'
        >
          <IconPrevious />
        </button>
        <button
          className='bg-white flex justify-center items-center w-12 h-12 rounded-full hover:text-cus-orange absolute right-4 top-1/2 transform -translate-y-1/2'
        >
          <IconNext />
        </button>
      </div>
    </div>
  )
}

export default a
