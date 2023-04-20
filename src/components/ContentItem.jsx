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
      <h1 className='font-k-bold text-3xl my-4'>{title}</h1>
      <p className='text-cus-dark-grayish-blue '>{description}</p>
      <div>
        {
            discount
              ? <div className='flex items-center justify-between my-6'>
                <p className='font-k-bold text-3xl flex items-center'>
                  {toDecimal(discountPrice)}
                  <span className=' text-base ml-4 text-cus-orange font-k-bold bg-cus-pale-orange px-2 rounded-md'>
                    {discountRate}
                  </span>
                </p>
                <p className='text-cus-dark-grayish-blue line-through'>
                  {toDecimal(normalPrice)}
                </p>
              </div>
              : <p className='font-k-bold text-3xl my-4'>
                {toDecimal(normalPrice)}
                </p>
          }
      </div>
      <div className='flex justify-between items-center my-4 font-k-bold'>
        <button
          className='text-3xl bg-white flex justify-center items-center p-1 rounded-full text-cus-orange border-2  hover:border-cus-orange'
          onClick={removeQuantity}
        >
          <IconMinus />
        </button>
        <p className=''>{quantity}</p>
        <button
          className='text-3xl bg-white flex justify-center items-center p-1 rounded-full text-cus-orange border-2  hover:border-cus-orange'
          onClick={addQuantity}
        >
          <IconPlus />
        </button>
      </div>
      <PrimaryButton>
        <IconCart className='mr-4' />
        <p className='font-k-bold'> Add to cart</p>
      </PrimaryButton>
    </div>
  )
}
