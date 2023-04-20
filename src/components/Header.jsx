import { useState } from 'react'
import { IconCart, IconMenu } from './Icons'
import { MobileMenu } from './MobileMenu'
import { CartItem } from './CartItem'

export function Header () {
  const [openModal, setOpenModal] = useState(false)
  const [openCart, setOpenCart] = useState(false)

  const toggleCart = () => setOpenCart(prev => !prev)

  return (
    <>
      <nav className='flex justify-between items-center w-full h-16 sticky top-0 z-30 bg-cus-white'>
        <div className='flex items-center mx-8 gap-4'>
          <button
            className='hover:text-cus-orange'
            onClick={() => setOpenModal(prev => !prev)}
          >
            <IconMenu />
          </button>
          <a href='#' className='font-k-bold text-3xl pb-2 hover:text-cus-orange'>sneakers</a>
        </div>
        <div className='flex items-center mx-8 gap-4'>
          <button
            className='hover:text-cus-orange'
            onClick={toggleCart}
          >
            <IconCart />
          </button>
          <button>
            <img className='w-7 h-7' src='/images/image-avatar.png' alt='avatar' />
          </button>
        </div>
      </nav>
      {
        !!openCart && <CartItem />
      }
      {
        !!openModal && <MobileMenu toggleModal={() => setOpenModal(prev => !prev)} />
      }
    </>
  )
}
