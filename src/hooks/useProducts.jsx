
const products = {
  products: [
  ],
  nameCompany: 'SNEAKERS COMPANY'
}
export function useProducts () {
  const AllProducts = products.products
  const nameCompany = products.nameCompany
  return {
    AllProducts,
    nameCompany
  }
}
