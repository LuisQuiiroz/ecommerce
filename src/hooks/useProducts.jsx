
const products = {
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
export function useProducts () {
  const AllProducts = products.products || []
  const nameCompany = products.nameCompany || ''
  return {
    AllProducts,
    nameCompany
  }
}
