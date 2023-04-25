import { useState } from 'react'
import { IconCart, IconMenu } from './Icons'
import { MobileMenu } from './MobileMenu'
import { CartItem } from './CartItem'
import { HeaderLinks } from './HeaderLinks'
import { useProducts } from '../hooks/useProducts'

export function Header () {
  const { AllProducts } = useProducts()
  const [openModal, setOpenModal] = useState(false)
  const [openCart, setOpenCart] = useState(false)

  const toggleCart = () => setOpenCart(prev => !prev)

  return (
    <>
      <nav className='flex justify-between items-center w-full h-16 md:h-20 sticky top-0 z-30 bg-white md:border-b-2 md:gap-8'>
        <div className='flex items-center ml-8 gap-4'>
          <button
            className='hover:text-cus-primary md:hidden'
            onClick={() => setOpenModal(prev => !prev)}
          >
            <IconMenu />
          </button>
          <a href='#' className='font-k-bold text-3xl pb-2 hover:text-cus-primary'>sneakers</a>
        </div>
        <div className='hidden md:flex mr-auto gap-8 text-cus-dark-grayish-blue '>
          <HeaderLinks />
        </div>
        <div className='flex items-center mr-8 gap-4 '>
          <div className='relative'>
            <button
              className='hover:text-cus-primary'
              onClick={toggleCart}
            >
              <IconCart />
              <div className={`bg-cus-primary rounded-full text-white text-[10px] px-1 right-[-5px] top-[-5px] absolute ${AllProducts.length > 0 ? 'block' : 'hidden'}`}>
                {AllProducts.length}
              </div>
            </button>
          </div>
          <button>
            <img className='w-8 h-8 md:w-12 md:h-12 border border-transparent hover:border-cus-primary rounded-full' src='/images/image-avatar.png' alt='avatar' />
          </button>
        </div>
      </nav>
      {
        !!openCart && (
          <CartItem />
        )
      }
      {
        !!openModal && <MobileMenu toggleModal={() => setOpenModal(prev => !prev)} />
      }
    </>
  )
}
