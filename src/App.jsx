import './index.css'
import { ContentItem } from './components/ContentItem'
import { Header } from './components/Header'
import { Carousel } from './components/Carousel'
import { ImgsItem } from './components/ImgsItem'

export const nameCompany = 'SNEAKERS COMPANY'

export const products = {
  products: [
    {
      title: 'Fall Limited Edition Sneakers',
      description: 'There low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they´ll withstand everthing the weather can offer.',
      normalPrice: 250,
      discount: true,
      discountRate: '50%',
      discountPrice: 125,
      images: [
        '/images/image-product-1.jpg',
        '/images/image-product-2.jpg',
        '/images/image-product-3.jpg',
        '/images/image-product-4.jpg'
      ]
    },
    {
      title: 'Sneakers 2.0',
      description: 'There low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they´ll withstand everthing the weather can offer.',
      normalPrice: 250,
      discount: false,
      discountRate: '50%',
      discountPrice: 125,
      images: [
        '/images/image-product-4.jpg',
        '/images/image-product-3.jpg',
        '/images/image-product-2.jpg',
        '/images/image-product-1.jpg'
      ]
    }
  ],
  nameCompany: 'SNEAKERS COMPANY'
}

export const toDecimal = (num) => `$${Number.parseFloat(num).toFixed(2)}`

function App () {
  const productToShow = products.products[0]
  const slides = productToShow.images
  return (
    <div className='font-kumbh-sans max-w-screen-xl mx-auto'>
      <Header />
      <div className='md:flex md:gap-10 xl:gap-20 md:p-10 xl:p-20 md:items-center'>
        <div className='md:w-1/2'>
          <ImgsItem slides={slides} />
        </div>
        <div className='md:w-1/2'>
          <ContentItem product={productToShow} nameCompany={products.nameCompany} />
        </div>
      </div>
    </div>
  )
}

export default App
