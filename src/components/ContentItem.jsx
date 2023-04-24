import { useState } from 'react'
import { toDecimal } from '../App'
import { IconCart, IconMinus, IconPlus } from './Icons'
import { PrimaryButton } from './PrimaryButton'

export function ContentItem ({ product, nameCompany }) {
  const { title, description, normalPrice, discount, discountRate, discountPrice } = product

  const [quantity, setQuantity] = useState(0)

  const addQuantity = () => setQuantity(prev => prev + 1)
  const removeQuantity = () => setQuantity(prev => prev <= 1 ? 0 : prev - 1)

  return (
    <div className='p-6'>
      <h3 className='uppercase text-cus-orange font-k-bold text-sm'>{nameCompany}</h3>
      <h1 className='font-k-bold text-3xl md:text-4xl xl:text-5xl my-4'>{title}</h1>
      <p className='text-cus-dark-grayish-blue '>{description}</p>
      <div>
        {
            discount
              ? <div className='flex md:block items-center justify-between my-6 font-k-bold'>
                <p className='flex items-center text-3xl '>
                  {toDecimal(discountPrice)}
                  <span className=' text-base ml-4 text-cus-orange bg-cus-pale-orange px-2 rounded-md'>
                    {discountRate}
                  </span>
                </p>
                <p className='text-cus-dark-grayish-blue line-through md:pt-2'>
                  {toDecimal(normalPrice)}
                </p>
              </div>
              : <p className=' text-3xl my-4'>
                {toDecimal(normalPrice)}
                </p>
          }
      </div>
      <div className='md:flex md:gap-4 xl:gap-8'>
        <div className='md:w-1/2 lg:w-1/3 flex justify-between items-center my-4 md:my-0 font-k-bold '>
          <button
            className='text-3xl bg-white flex justify-center items-center p-1 rounded-full text-cus-orange hover:opacity-70'
            onClick={removeQuantity}
          >
            <IconMinus />
          </button>
          <p className=''>{quantity}</p>
          <button
            className='text-3xl bg-white flex justify-center items-center p-1 rounded-full text-cus-orange hover:opacity-70'
            onClick={addQuantity}
          >
            <IconPlus />
          </button>
        </div>
        <div className='md:w-1/2 lg:w-2/3'>
          <PrimaryButton>
            <IconCart className='mr-4' />
            <p className='font-k-bold'> Add to cart</p>
          </PrimaryButton>
        </div>
      </div>

    </div>
  )
}
