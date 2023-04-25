import './index.css'
import { Header } from './components/Header'
import { ContentItem } from './components/ContentItem'
import { ImgsItem } from './components/ImgsItem'
import { useProducts } from './hooks/useProducts'
import { NotFound } from './components/NotFound'

export const toDecimal = (num) => `$${Number.parseFloat(num).toFixed(2)}`

function App () {
  const { AllProducts, nameCompany } = useProducts()
  const productToShow = AllProducts[0]
  const slides = productToShow?.images
  return (
    <div className='font-kumbh-sans max-w-screen-xl mx-auto'>
      {AllProducts.length > 0
        ? (
          <>
            <Header />
            <div className='md:flex md:gap-10 xl:gap-20 md:p-10 xl:p-20 md:items-center'>
              <div className='md:w-1/2'>
                <ImgsItem slides={slides} />
              </div>
              <div className='md:w-1/2'>
                <ContentItem product={productToShow} nameCompany={nameCompany} />
              </div>
            </div>
          </>
          )
        : <NotFound />}
    </div>

  )
}

export default App
