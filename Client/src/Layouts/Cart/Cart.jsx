import React from 'react'
import { AiFillHeart, AiOutlineDelete, AiOutlineHeart, AiOutlineShopping } from 'react-icons/ai';
import { GlobalContext } from '../../context/context';

function Cart() {
    const { cart, setCart, favourites, setFavourites } = React.useContext(GlobalContext);
    const [total, setTotal] = React.useState(0.0);
    const deleteItem = item => {
        setCart(prev => { return prev.filter((prevItem) => prevItem.id !== item.id).length !== 0 ? prev.filter((prevItem) => prevItem.id !== item.id) : [] });
    }
    const toFavourites = item => {
        if (!favourites.find(i => i.id === item.id))
            setFavourites(prev => [...prev, item]);
    }
    React.useEffect(() => {
        setTotal(0);
        // console.log(cart);
        for (let index = 0; index < cart.length; index++) {
            setTotal(prev => prev = prev + cart[index].price);
        }
    }, [toFavourites])
    return (
        <div className='h-fit w-full'>
            <div className='h-fit w-full my-6 flex justify-center'>
                <div className='flex h-fit w-[90%]'>
                    <div className='basis-3/5 p-4 px-6'>
                        <h1 className='text-2xl font-semibold mb-2'>Bag</h1>
                        {
                            cart.length === 0 ?
                                <>
                                    <div className='h-full flex flex-col justify-center border-y-stone-200 border-y'>
                                        <p style={{ color: 'grey' }} className='text-lg text-center font-medium'>There is no items in the bag</p>
                                        <p className='self-center'><AiOutlineShopping className='block self-center' size={40} color='grey' /></p>
                                    </div>
                                </>
                                : <div className='h-fit flex flex-col justify-center'>
                                    {cart.map((item, index) => {
                                        return <>
                                            <div key={index} className='h-fit flex gap-2 my-8'>
                                                <div className='h-40 rounded-lg overflow-hidden'><img className='h-full object-contain' src={item.src} alt="img" /></div>
                                                <div className='flex-1 px-4'>
                                                    <div className='flex justify-between flex-1'>
                                                        <div>
                                                            <p>{item.name}</p>
                                                            <p>{item.brand}</p>
                                                            <p>{"Black"}</p>
                                                            <div className='flex flex-col lg:space-x-2 space-x-0 lg:block'><span>Size <Select array={item.product_variations.size} value={item.size} /></span><span>Quantity <Select option={10} /></span>
                                                            </div>
                                                        </div>
                                                        <p className='font-semibold md:text-xl'><span className='font-medium'>Price</span>  $ {item.price}</p>
                                                    </div>
                                                    <div className='my-4 space-x-2'>
                                                        <button className="btn btn-ghost btn-circle" onClick={() => { toFavourites(item) }}>{favourites.find(i => i.id === item.id) ? <AiFillHeart size={25} /> : <AiOutlineHeart size={25} />}</button>
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
                    <div className='basis-2/5 py-4'>
                        <h1 className='text-2xl font-semibold'>Summary</h1>
                        <div>
                            <div className='flex justify-between lg:text-lg  font-normal my-2'><p>Subtotal</p><p>{total !== 0 ? '$ ' + total.toFixed(2) : "-"}</p></div>
                            <div className='flex justify-between lg:text-lg font-normal my-2 mb-4'><p>Estimated Delivery & Handling</p><p>{total !== 0 ? '$' + 10 : "-"}</p></div>
                            <hr />
                            <div className='flex justify-between my-4 lg:text-xl md:text-lg font-medium'><p>Total</p><p>{total !== 0 ? '$ ' + (total + 10).toFixed(2) : "-"}</p></div>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    )
}

function Select({ option, array = [], value }) {
    const elements = array.length !== 0 ? array : Array.from({ length: option }, (_, index) => (
        <option value={index + 1} key={index}>{index + 1}</option>
    ));
    return (
        <select value={value} className='outline-none border-b-2 border-black/30' name="quantity" id="item-quantity">{array.length !== 0 ? array.map((size, index) => (
            <option value={size.value} key={index}>{size.value}</option>)) : elements}</select>
    )
}

export default Cart