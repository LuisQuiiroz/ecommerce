import { useState } from 'react'
import { Carousel } from './Carousel'
import { MiniImages } from './MiniImages'
import { ModalItem } from './ModalItem'

export function ImgsItem ({ slides }) {
  const [openModal, setOpenModal] = useState(false)
  const [curr, setCurr] = useState(0)

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))

  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

  const setImg = (i) => {
    setCurr(i)
  }
  const openModalOnLargeDevices = () => {
    if (window.matchMedia('(min-width: 768px)').matches) {
      setOpenModal(prev => !prev)
    }
  }
  return (
    <>
      {/* <div onClick={() => setOpenModal(prev => !prev)}> */}
      <div className='overflow-hidden relative md:cursor-pointer' onClick={openModalOnLargeDevices}>
        <Carousel curr={curr} prev={prev} next={next} slides={slides} />
      </div>
      <MiniImages curr={curr} slides={slides} setImg={setImg} />

      {
        !!openModal && <ModalItem slides={slides} modal={() => setOpenModal(prev => !prev)} initial={curr} />
      }
    </>

  )
}
