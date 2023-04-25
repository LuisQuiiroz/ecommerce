import { toDecimal } from '../App'
import { useProducts } from '../hooks/useProducts'
import { IconDelete } from './Icons'
import { PrimaryButton } from './PrimaryButton'

function WithItems () {
  const { AllProducts } = useProducts()
  return (
    <div>
      {AllProducts.map(({ images, title, discountPrice, normalPrice, discount }) => {
        const finalPrice = discount ? discountPrice : normalPrice
        return (
          <div
            className='flex items-center py-6 gap-4 text-cus-dark-grayish-blue'
            key={title}
          >
            <img
              className='w-2/12 rounded-xl'
              src={images[0]}
              alt='title'
            />
            <div className='w-9/12 '>
              <p>{title}</p>
              <div className='flex gap-2'>
                <p>{toDecimal(finalPrice)}</p>
                <p>x3</p>
                <span className='font-k-bold text-black'>{toDecimal(finalPrice * 3)}</span>
              </div>
            </div>
            <button className='w-1/12 hover:text-cus-primary'>
              <IconDelete />
            </button>
          </div>
        )
      })}
      <div className='pb-2'>
        <PrimaryButton>
          Checkout
        </PrimaryButton>
      </div>
    </div>
  )
}
function Empty () {
  return (
    <div className='h-[168px] flex items-center justify-center'>
      <p className='text-cus-dark-grayish-blue font-k-bold'>
        Your cart is empty.
      </p>
    </div>
  )
}

export function CartItem () {
  const { AllProducts } = useProducts()
  return (
    <div className='sticky top-20 md:top-24 sm:ml-auto max-w-sm mx-4 z-10'>
      <div className='absolute right-0 bg-white rounded-xl w-full shadow-2xl'>
        <div className='p-6'>
          <div className='pb-6 border-b-2'>
            <p className='font-k-bold'>Cart</p>
          </div>
          {AllProducts.length > 0 ? <WithItems /> : <Empty />}
        </div>
      </div>
    </div>

  )
}
