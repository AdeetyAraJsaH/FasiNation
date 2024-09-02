import React from 'react'
import { GlobalContext } from '../../context/context'
import { AiFillShopping, AiOutlineDelete, AiOutlineShopping } from 'react-icons/ai';

function Favourites() {
    const { favourites, setFavourites, cart, setCart } = React.useContext(GlobalContext);
    const addToCart = (item) => {
        if (!cart.find(i => i.id === item.id))
            setCart(prev => [...prev, item]);
    }
    const deleteItem = item => {
        setFavourites(prev => { return prev.filter(prevItem => prevItem.id !== item.id).length !== 0 ? prev.filter(prevItem => prevItem.id !== item.id) : [] })
    }
    return (
        <div className='h-full w-full'>
            <div className='h-full w-[90%] m-auto my-6 flex flex-col justify-center'>
                <div className={`flex flex-col  w-full p-4 ${favourites.length === 0 ? "h-[10rem]" : "h-fit"}`}>
                    <h1 className='text-xl font-semibold mb-2'>Favourites</h1>
                    {
                        favourites.length === 0 ?
                            <div style={{ color: 'grey' }} className='h-full text-lg font-medium flex justify-center items-center'><p>Items added to your favourites will be shown here</p></div>
                            :
                            <div className='h-fit flex flex-col justify-center'>
                                {favourites.map((item, index) => {
                                    return <>
                                        <div key={index} className='h-40 flex gap-2 my-8'>
                                            <div className='h-full'><img className='h-full object-contain' src={item.src} alt="img" /></div>
                                            <div className='flex-1'>
                                                <div className='flex justify-between flex-1'>
                                                    <div>
                                                        <p>{item.name}</p>
                                                        <p>{item.brand}</p>
                                                        <p>{item.product_variations.color.name}</p>
                                                        <div><span>Size <Select array={item.product_variations.size} /></span> <span>Quantity <Select option={10} /></span>
                                                        </div>
                                                    </div>
                                                    <p><span className='font-medium'>Price</span>  $ {item.price}</p>
                                                </div>
                                                <div className='my-4 space-x-2'>
                                                    <button className="btn btn-ghost btn-circle" onClick={() => { addToCart(item) }}>{cart.find(i => i.id === item.id) ? <AiFillShopping size={25} /> : <AiOutlineShopping size={25} />}</button>
                                                    <button className="btn btn-ghost btn-circle" onClick={() => { deleteItem(item) }}><AiOutlineDelete size={25} /></button>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                    </>
                                })}
                            </div>
                    }
                </div>
                <div className='p-4'>
                    <h1 className='text-2xl font-semibold mb-2'>Find Your Next Favourite</h1>
                    <div></div>
                </div>
            </div>
        </div>
    )
}
function Select({ option, array = [] }) {
    const elements = array.length !== 0 ? array : Array.from({ length: option }, (_, index) => (
        <option value={index + 1} key={index}>{index + 1}</option>
    ));
    return (
        <select className='outline-none border-b-2 border-black/30' name="quantity" id="item-quantity">{array.length !== 0 ? array.map((size, index) => (
            <option value={size.value} key={index}>{size.value}</option>)) : elements}</select>
    )
}
export default Favourites