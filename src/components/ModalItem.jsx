import { useState } from 'react'
import { Modal } from './Modal'
import { Carousel } from './Carousel'
import { MiniImages } from './MiniImages'

export function ModalItem ({ slides, modal }) {
  const [curr, setCurr] = useState(0)

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))

  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

  const setImg = (i) => {
    setCurr(i)
  }
  return (
    <Modal>
      <div className='fixed inset-0 flex items-center justify-center z-50 bg-cus-black/80' onClick={modal}>
        <div
          className='w-[500px]' onClick={(event) => event.stopPropagation()}
        >
          <Carousel curr={curr} prev={prev} next={next} slides={slides} isModal />
          <MiniImages curr={curr} slides={slides} setImg={setImg} />
        </div>
      </div>

    </Modal>
  )
}
