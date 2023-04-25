import { Modal } from './Modal'
import { IconClose } from './Icons'
import { HeaderLinks } from './HeaderLinks'

export function MobileMenu ({ toggleModal }) {
  return (
    <div>
      <Modal>
        <div className='w-screen h-screen fixed flex top-0 left-0 z-50 overflow-hidden'>
          <div className='w-2/3 bg-white px-8 py-5 h-screen font-k-bold'>

            <button
              className='mb-8'
              onClick={toggleModal}
            >
              <IconClose className='hover:text-cus-primary' />
            </button>
            <HeaderLinks />
          </div>
          <div className='w-1/3 bg-black opacity-25' onClick={toggleModal} />
        </div>
      </Modal>
    </div>
  )
}
