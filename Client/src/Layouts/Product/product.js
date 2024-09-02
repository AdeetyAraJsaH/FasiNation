import { tShirts } from '../../assets/data/products.json'

export const findProduct = async (id) => {
    tShirts.find(product => product.id === id)
}