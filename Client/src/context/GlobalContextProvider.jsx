import React from 'react'
import { tShirts } from '../assets/data/products.json'
import { GlobalContext } from './context'
import axios from 'axios'
import { useParams } from 'react-router-dom';

function GlobalContextProvider({ children }) {
    const [login, setLogin] = React.useState(false);
    const [query, setQuery] = React.useState('');
    const [products, setProducts] = React.useState([]);
    const [cart, setCart] = React.useState([]);
    const [favourites, setFavourites] = React.useState([]);
    const { category } = useParams();
    React.useEffect(() => {
        if (query === '') setQuery(category);
        if (query) fetchProducts(query);
    }, [query])
    const fetchProducts = async (query) => {
        const options = {
            method: 'GET',
            url: 'https://real-time-amazon-data.p.rapidapi.com/search',
            params: {
                query: `${query}`,
                page: 1,
                country: 'US',
                sort_by: 'RELEVANCE',
                product_condition: 'ALL',
            },
            headers: {
                'x-rapidapi-key': 'bd2612e8c5msh7157c38a604a393p1344e2jsn02520584faec',
                'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
            },
        };
        await axios
            .request(options)
            .then(function (response) {
                console.log(response.data?.data?.products[0]);
                setProducts(prev => [...response.data?.data?.products]);
            })
            .catch(function (error) {
                setProducts([...tShirts]);
                // console.error('Error fetching data:', error.message);
            });
        // console.log(JSON.stringify(products));
    }
    return (
        <GlobalContext.Provider value={{ login, setLogin, query, setQuery, products, setProducts, cart, setCart, favourites, setFavourites, fetchProducts }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider