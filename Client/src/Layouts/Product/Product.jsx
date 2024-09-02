import React from 'react'
import './product.css'
import { tShirts } from '../../assets/data/products.json'
import { sizeinfo } from '../../assets/data/sizeinfo.json'
import { AiFillShopping, AiOutlineHeart, AiOutlineShopping } from 'react-icons/ai';
import { GlobalContext, ProductContext } from '../../context/context';
import { Link, useParams } from 'react-router-dom';
import { findProduct } from './product.js';
import { BiRuler } from 'react-icons/bi'
import Carousel from '../../Components/carousel/Carousel.jsx';
function Product() {
    const { product, setProduct, fetchProduct } = React.useContext(ProductContext);
    const { cart, setCart, favourites, setFavourites } = React.useContext(GlobalContext)
    const [productImg, setProductImg] = React.useState(null);
    const [sizeUnit, setSizeUnit] = React.useState("in");
    // const { productId } = useParams();
    // React.useEffect(() => {
    //     if (product?.id !== productId)
    //         fetchProduct();
    // }, []);

    // const handleClick = () => { }

    const rippleEffect = (e) => {
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;
        let ripple = document.createElement('span');
        ripple.classList.add('ripple');
        ripple.style.position = 'absolute';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        e.target.appendChild(ripple);
        setTimeout(() => {
            ripple.remove()
        }, 800);
    }

    return (
        <>{!product ? <div className='loader-container'><div className='loader'></div></div> :
            <div className='my-4 h-full z-[-1] overflow-hidden'>
                <dialog id="size_guide" className="modal w-full ">
                    <div className="modal-box absolute top-[20%] translate-y-[-50%] w-full rounded-lg">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            <div className="overflow-x-auto">
                                <div className='flex w-full justify-between mt-4 pr-4'>
                                    <p className='pt-1.5 font-medium'>Apparel Measurement ( {sizeUnit} )</p>
                                    <button className='text-lg bg-black text-white hover:text-black hover:bg-black/25 transition-all 300ms h-10 w-10 rounded-full active:scale-95' onClick={(e) => {
                                        e.preventDefault();
                                        setSizeUnit(prev => prev === "in" ? "cm" : "in")
                                    }}>{sizeUnit}</button>
                                </div>
                                <table className="table table-zebra">
                                    {/* head */}
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Size</th>
                                            <th>Shoulder</th>
                                            <th>Chest</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* rows */}
                                        {sizeinfo.sizes.map((size, index) => {
                                            return (
                                                sizeUnit === "in" ? < tr key={index} >
                                                    <th>{index + 1}</th>
                                                    <td>{size.value}</td>
                                                    <td>{size.shoulder.in}</td>
                                                    <td>{size.chest.in}</td>
                                                </tr> : < tr key={index} >
                                                    <th>{index + 1}</th>
                                                    <td>{size.value}</td>
                                                    <td>{size.shoulder.cm}</td>
                                                    <td>{size.chest.cm}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </form>
                    </div>
                </dialog >
                <div className='flex h-[50%] flex-col sm:flex-row justify-center'>
                    <div className='hidden sm:block'>
                        <div className='basis-7/12 flex sm:ml-8 justify-end'>
                            <div className='h-[35em] w-[7em] py-6'>
                                {
                                    product?.img ?
                                        < ul className='h-full w-full px-4 overflow-hidden hover:overflow-auto'>
                                            {product?.img.map((img, index) => <li key={index} ><input defaultChecked={index === 0} id={"modelImg" + index} type="radio" name='modelImg' className='hidden' /><label htmlFor={"modelImg" + index} className='image-label transition-all 300ms'><img className='mb-2 cursor-pointer' key={index} src={img} onClick={() => setProductImg(img)} /></label></li>)}
                                        </ul> :
                                        ''
                                }
                            </div>
                            <div className='md:h-[35rem] h-[32rem] py-6'><img className='h-full object-fill' src={productImg ?? product?.src} alt="model" /></div>
                        </div>
                    </div>
                    <div className='sm:hidden w-full'>
                        {product ? <Carousel height='20rem' width='90%' margin='2rem auto'>
                            {product?.img.map((img, index) => {
                                return (
                                    <div className='z-0 h-full' key={index}>
                                        <img className='h-full object-top-[20%] object-contain aspect-square' src={img} alt={'model' + index} />
                                    </div>
                                )
                            })}
                        </Carousel> : ''}
                    </div>
                    <div className='sm:basis-5/12 w-full p-2 sm:block flex sm:justify-center'>
                        <div className='p-2 sm:w-fit lg:w-[70%] w-full overflow-hidden'>
                            <div className='text-xl'>{product?.name}</div>
                            <p className='text-2xl font-semibold my-2'>$ {product?.price}</p>
                            <p className='text-md font-medium text-gray-500'>incl. of all taxes</p>
                            <p className='text-md font-medium text-gray-500'>(also inculde all applicable duties)</p>
                            <div className='my-4'>
                                <p className='text-md font-normal mb-1'>Colors</p>
                                <ul className='flex gap-4'>
                                    {product?.product_variations?.color.map((color, index) => <li key={index}><input defaultChecked={product?.color === color.value} id={color.value} type="radio" name='color' value={color.value} disabled={!color.is_available} className='hidden' /><label htmlFor={color.value} disabled={!color.is_available} style={{ backgroundColor: color.value }} className={` inline-block outline outline-zinc-500 color-label disabled:pointer-events-auto transition-colors 200ms rounded-full w-8 h-8 md:w-10 md:h-10`}></label></li>)}
                                </ul>
                            </div>
                            <div className='my-6'>
                                <div className='flex justify-between mb-1'>
                                    <p className='text-md font-normal'>Select Size</p>
                                    <p className='flex gap-2 text-md font-normal underline cursor-pointer' onClick={() => document.getElementById('size_guide').showModal()}><BiRuler size={25} color='grey' /> Size Guide</p>
                                </div>
                                <ul className='flex gap-2'>
                                    {product?.product_variations?.size.map((size, index) => <li key={index}><input defaultChecked={product?.size === size.value} id={size.value} type="radio" name='size' value={size.value} disabled={!size.is_available} className='hidden' /><label htmlFor={size.value} disabled={!size.is_available} className={`size-label inline-block text-center pt-[2px] disabled:opacity-40 disabled:pointer-events-auto border-2 border-[#474646] enabled:hover:bg-black enabled:hover:text-white transition-colors 200ms rounded-full w-8 h-8 md:w-10 md:h-10 md:pt-[6px]`}>{size.value}</label></li>)}
                                </ul>
                            </div>
                            <div className='w-full'>{cart.find(item => item.id === product?.id) ?
                                <Link to={'/cart'}>
                                    <button className='relative m-auto overflow-hidden cursor-pointer text-center sm:m-2 my-2 h-[4em] sm:h-auto sm:text-lg text-xl block w-full uppercase border-[2px] border-black px-4 py-1 sm:py-2 font-medium active:bg-black active:text-white sm:hover:bg-black sm:hover:text-white transition-all 200ms hover:scale-[97%]' onClick={e => { rippleEffect(e); }
                                    }><AiFillShopping className='inline pb-1' size={25} /> Go to Cart</button>
                                </Link>
                                :
                                <button className='relative m-auto overflow-hidden cursor-pointer text-center sm:m-2 my-2 h-[4em] sm:h-auto sm:text-lg text-xl block w-full uppercase border-[2px] border-black px-4 py-1 sm:py-2 font-medium active:bg-black active:text-white sm:hover:bg-black sm:hover:text-white transition-all 200ms hover:scale-[97%]' onClick={e => {
                                    rippleEffect(e);
                                    setCart(prev => [...prev, product]);
                                }
                                }><AiOutlineShopping className='inline pb-1' size={25} /> Add to Cart</button>}
                                <button className='relative overflow-hidden cursor-pointer text-center sm:m-2 my-2 h-[4em] sm:h-auto sm:text-lg text-xl block w-full uppercase border-[2px] border-black px-4 py-1 sm:py-2 font-medium active:bg-black active:text-white sm:hover:bg-black sm:hover:text-white transition-all 200ms hover:scale-[97%]' onClick={e => {
                                    rippleEffect(e);
                                    if (!favourites.find(i => i.id === product.id))
                                        setFavourites(prev => [...prev, product]);
                                }}><AiOutlineHeart className='inline pb-1' size={25} /> Favourite</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className='flex h-[50%] flex-col sm:flex-row justify-center'>
                    <div className='hidden sm:block'>
                        <div className='basis-7/12 flex sm:ml-8 overflow-hidden justify-end'>
                            <div className='h-[35em] w-[10em] py-4 flex overflow-hidden'>
                                {
                                    product?.product_photos ?
                                        < ul className='md:h-full h-[90%] overflow-y-auto px-2'>
                                            {product?.product_photos.map((img, index) => <li key={index} ><input defaultChecked={index === 0} id={"modelImg" + index} type="radio" name='modelImg' className='hidden' /><label htmlFor={"modelImg" + index} className='image-label transition-all 300ms'><img className='my-2 cursor-pointer' key={index} src={img} onClick={(e) => setProductImg(img)} /></label></li>)}
                                        </ul> :
                                        ''
                                }
                            </div>
                            <div className='h-[35rem] py-4'><img className='h-full object-fill' src={productImg ?? product?.src} alt="model" /></div>
                        </div>
                    </div>
                    <div className='sm:hidden w-full'>
                        {product?.product_photos ? <Carousel height='20rem' width='90%' margin='2rem auto'>
                            {product?.product_photos.map((img, index) => {
                                return (
                                    <div className='z-0 h-full' key={index}>
                                        <img className='h-full object-top-[20%] object-contain aspect-square' src={img} alt={'model' + index} />
                                    </div>
                                )
                            })}
                        </Carousel> : ''}
                    </div>
                    <div className='sm:basis-5/12 w-full p-2 sm:block flex sm:justify-center'>
                        <div className='p-2 sm:w-fit lg:w-[70%] w-full overflow-hidden'>
                            <div className='text-xl'>{product?.product_title}</div>
                            <p className='text-2xl font-semibold my-2'>$ {product?.product_price}</p>
                            <p className='text-md font-medium text-gray-500'>incl. of all taxes</p>
                            <p className='text-md font-medium text-gray-500'>(also inculde all applicable duties)</p>
                            <div className='my-4'>
                                <p className='text-md font-normal mb-1'>Colors</p>
                                <ul className='flex gap-4'>
                                    {product?.product_variations?.color.map((color, index) => <li key={index}><input defaultChecked={product?.color === color.value} id={color.value} type="radio" name='color' value={color.value} disabled={!color.is_available} className='hidden' /><label htmlFor={color.value} disabled={!color.is_available} style={{ backgroundColor: color.value }} className={` inline-block outline outline-zinc-500 color-label disabled:pointer-events-auto transition-colors 200ms rounded-full w-8 h-8 md:w-10 md:h-10`}></label></li>)}
                                </ul>
                            </div>
                            <div className='my-6'>
                                <div className='flex justify-between mb-1'>
                                    <p className='text-md font-normal'>Select Size</p>
                                    <p className='flex gap-2 text-md font-normal underline cursor-pointer' onClick={() => document.getElementById('size_guide').showModal()}><BiRuler size={25} color='grey' /> Size Guide</p>
                                </div>
                                <ul className='flex gap-2'>
                                    {product?.product_variations?.size.map((size, index) => <li key={index}><input defaultChecked={product?.size === size.value} id={size.value} type="radio" name='size' value={size.value} disabled={!size.is_available} className='hidden' /><label htmlFor={size.value} disabled={!size.is_available} className={`size-label inline-block text-center pt-[2px] disabled:opacity-40 disabled:pointer-events-auto border-2 border-[#474646] enabled:hover:bg-black enabled:hover:text-white transition-colors 200ms rounded-full w-8 h-8 md:w-10 md:h-10 md:pt-[6px]`}>{size.value}</label></li>)}
                                </ul>
                            </div>
                            <div className='w-full'>{cart.find(item => item.id === product?.id) ?
                                <Link to={'/cart'}>
                                    <button className='relative m-auto overflow-hidden cursor-pointer text-center sm:m-2 my-2 h-[4em] sm:h-auto sm:text-lg text-xl block w-full uppercase border-[2px] border-black px-4 py-1 sm:py-2 font-medium active:bg-black active:text-white sm:hover:bg-black sm:hover:text-white transition-all 200ms hover:scale-[97%]' onClick={e => { rippleEffect(e); }
                                    }><AiFillShopping className='inline pb-1' size={25} /> Go to Cart</button>
                                </Link>
                                :
                                <button className='relative m-auto overflow-hidden cursor-pointer text-center sm:m-2 my-2 h-[4em] sm:h-auto sm:text-lg text-xl block w-full uppercase border-[2px] border-black px-4 py-1 sm:py-2 font-medium active:bg-black active:text-white sm:hover:bg-black sm:hover:text-white transition-all 200ms hover:scale-[97%]' onClick={e => {
                                    rippleEffect(e);
                                    setCart(prev => [...prev, product]);
                                }
                                }><AiOutlineShopping className='inline pb-1' size={25} /> Add to Cart</button>}
                                <button className='relative overflow-hidden cursor-pointer text-center sm:m-2 my-2 h-[4em] sm:h-auto sm:text-lg text-xl block w-full uppercase border-[2px] border-black px-4 py-1 sm:py-2 font-medium active:bg-black active:text-white sm:hover:bg-black sm:hover:text-white transition-all 200ms hover:scale-[97%]' onClick={e => {
                                    rippleEffect(e);
                                    if (!favourites.find(i => i.id === product.id))
                                        setFavourites(prev => [...prev, product]);
                                }}><AiOutlineHeart className='inline pb-1' size={25} /> Favourite</button>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div >
        }</>
    )
}

export default Product