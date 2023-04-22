import { useState } from 'react'
import { IconCart, IconMenu } from './Icons'
import { MobileMenu } from './MobileMenu'
import { CartItem } from './CartItem'
import { HeaderLinks } from './HeaderLinks'

export function Header () {
  const [openModal, setOpenModal] = useState(false)
  const [openCart, setOpenCart] = useState(false)

  const toggleCart = () => setOpenCart(prev => !prev)

  return (
    <>
      <nav className='flex justify-between items-center w-full h-16 md:h-20 sticky top-0 z-30 bg-cus-white md:border-b-2'>
        <div className='flex items-center mx-8 gap-4'>
          <button
            className='hover:text-cus-orange md:hidden'
            onClick={() => setOpenModal(prev => !prev)}
          >
            <IconMenu />
          </button>
          <a href='#' className='font-k-bold text-3xl pb-2 hover:text-cus-orange'>sneakers</a>
        </div>
        <div className='hidden md:flex mr-auto gap-8 text-cus-dark-grayish-blue '>
          <HeaderLinks />
        </div>
        <div className='flex items-center mx-8 gap-4'>
          <button
            className='hover:text-cus-orange'
            onClick={toggleCart}
          >
            <IconCart />
          </button>
          <button>
            <img className='w-8 h-8 md:w-12 md:h-12 border border-transparent hover:border-cus-orange rounded-full' src='/images/image-avatar.png' alt='avatar' />
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
