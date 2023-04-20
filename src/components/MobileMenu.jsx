import { Modal } from './Modal'
import { IconClose } from './Icons'

export function MobileMenu ({ toggleModal }) {
  return (
    <div>
      <Modal>
        <div className='w-screen h-screen fixed flex top-0 left-0 z-50 overflow-hidden'>
          <div className='w-2/3 bg-cus-white px-8 py-5 h-screen'>

            <button
              onClick={toggleModal}
            >
              <IconClose className='hover:text-cus-orange' />
            </button>
            <a className='block font-k-bold py-2 hover:text-cus-orange' href='#'>Collections</a>
            <a className='block font-k-bold py-2 hover:text-cus-orange' href='#'>Men</a>
            <a className='block font-k-bold py-2 hover:text-cus-orange' href='#'>Women</a>
            <a className='block font-k-bold py-2 hover:text-cus-orange' href='#'>About</a>
            <a className='block font-k-bold py-2 hover:text-cus-orange' href='#'>Contact</a>
          </div>
          <div className='w-1/3 bg-cus-black opacity-25' onClick={toggleModal} />
        </div>
      </Modal>
    </div>
  )
}
