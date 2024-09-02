import React from 'react'
import axios from 'axios'
import { ProductContext } from './context';
import { useParams } from 'react-router-dom';
import { tShirts } from '../assets/data/products.json'

function ProductProvider({ children }) {
    const [product, setProduct] = React.useState(null);
    const { productId } = useParams();
    React.useEffect(()=>{
        fetchProduct()
    },[productId])
    const fetchProduct = async (id = productId) => {
        const options = {
            method: 'GET',
            url: `https://real-time-amazon-data.p.rapidapi.com/product-details`,
            params: {
                asin: `${id}`,
                country: 'US',
            },
            headers: {
                'x-rapidapi-key': 'bd2612e8c5msh7157c38a604a393p1344e2jsn02520584faec',
                'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
            },
        };
        await axios
            .request(options)
            .then(function (response) {
                console.log(response.data?.data);
                setProduct(response.data?.data?.product);
            })
            .catch(function (error) {
                setProduct(tShirts.find(product => product.id == id));
                // console.error('Error fetching data:', error.message);
            });
    }
    return (
        <ProductContext.Provider value={{ product, setProduct, fetchProduct }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider