import React from 'react'
import './catalogue.css'
import { tShirts } from '../../assets/data/products.json'
import { AiOutlineArrowUp } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';
import { GlobalContext, ProductContext } from '../../context/context';

function Catalogue() {
    const [showFilter, setShowFilter] = React.useState(false);
    const [showSort, setShowSort] = React.useState(false);
    const sortRef = React.useRef(null);
    const { products, setProducts } = React.useContext(GlobalContext);
    const { fetchProduct } = React.useContext(ProductContext)
    const path = useLocation().pathname;

    React.useEffect(() => {
        // console.log(products);
        const handleClickOutside = (event) => {
            if (sortRef.current && !sortRef.current.contains(event.target)) {
                setShowSort(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <>{products?.length === 0 ? <div className='loader-container'><div className='loader'></div></div> :
            <div>
                <div className='flex sticky top-0 z-10 bg-white py-2 '>
                    <button className={`text-md mx-2 px-2 py-1 border-2 border-black text-black hover:bg-black hover:text-white hover:scale-95 transition-all tracking-wide ${showFilter ? 'text-white bg-black' : ''}`} onClick={() => { setShowFilter((prev) => !prev) }}>Filter<AiOutlineArrowUp className={`m-1 inline fliped transition-all 200ms ${showFilter ? ' rotation-3d' : '-rotation-3d'}`} /></button>
                    <div ref={sortRef} className='relative '>
                        <button className={`text-md mx-2 px-2 py-1 border-2 border-black text-black hover:bg-black hover:text-white hover:scale-95 transition-all tracking-wide ${showSort ? 'text-white bg-black' : ''}`} onClick={() => { setShowSort(prev => !prev) }}>Sort By<AiOutlineArrowUp className={`m-1 fliped inline transition-all 200ms ${showSort ? ' rotation-3d' : '-rotation-3d'}`} /></button>
                        <div className={`absolute shadow-md bg-white w-[150%] ${showSort ? '' : 'hidden'}`}>
                            <ul className=''>
                                <li><button className='btn border-none w-full rounded-none bg-white hover:text-white hover:bg-black'>Newest</button></li>
                                <li><button className='btn border-none w-full rounded-none bg-white hover:text-white hover:bg-black'>Featured</button></li>
                                <li><button className='btn border-none w-full rounded-none bg-white hover:text-white hover:bg-black'>Price: Low-High</button></li>
                                <li><button className='btn border-none w-full rounded-none bg-white hover:text-white hover:bg-black'>Price: High-Low</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='flex'>
                    <div className={`sticky top-10 filter-element h-fit whitespace-nowrap  ${showFilter ? 'w-1/5' : 'w-0'} `}>
                        {/* Accordion for filter*/}
                        <div className="join join-vertical w-full">
                            <div className="collapse collapse-arrow join-item border-b">
                                <input type="checkbox" name="my-accordion-4" defaultChecked />
                                <div className="collapse-title text-md font-medium">Price</div>
                                <div className="collapse-content">
                                    <p>hello</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item border-b">
                                <input type="checkbox" name="my-accordion-4" />
                                <div className="collapse-title text-md font-medium">Sizes</div>
                                <div className="collapse-content">
                                    <p>hello</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item border-b">
                                <input type="checkbox" name="my-accordion-4" />
                                <div className="collapse-title text-md font-medium">Rating</div>
                                <div className="collapse-content">
                                    <p>hello</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item border-b">
                                <input type="checkbox" name="my-accordion-4" />
                                <div className="collapse-title text-md font-medium">Colors</div>
                                <div className="collapse-content">
                                    <p>hello</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item border-b">
                                <input type="checkbox" name="my-accordion-4" />
                                <div className="collapse-title text-md font-medium">Gender</div>
                                <div className="collapse-content">
                                    <p>hello</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item border-b">
                                <input type="checkbox" name="my-accordion-4" />
                                <div className="collapse-title text-md font-medium">Brands</div>
                                <div className="collapse-content">
                                    <p>hello</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' flex-1 custom-grid md:grid-cols-3 grid-cols-2'>
                        {tShirts.map((tShirt, index) => {
                            return (
                                <div key={index} className="grid-element hover:shadow-md">
                                    <div className='flex-flex-col w-full m-4 py-4'>
                                        <div className='h-[50vh] w-full overflow-hidden'>
                                            <Link className='h-full block' to={`${path}/${tShirt.id}`}>
                                                <img className='h-full w-full object-cover' src={tShirt.src} alt={tShirt.alt} />
                                            </Link>
                                        </div>
                                        <div>
                                            <p className='text-lg font-normal'>{tShirt.brand}</p>
                                            <p>{tShirt.name}</p>
                                            <p className='text-xl font-semibold'>$ {tShirt.price}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    {/* <div className=' flex-1 custom-grid md:grid-cols-3 grid-cols-2 gap-8'>
                        {products?.map((product, index) => {
                            return (
                                <div className='h-full m-auto p-4 shadow-lg'>
                                    <div key={index} className="flex-col grid-element">
                                        <Link to={`${path}/${product.asin}`}>
                                            <div className='h-[40vh] p-4 overflow-hidden'>
                                                <img className='h-full w-full object-cover' src={product.product_photo} alt='product image' />
                                            </div>
                                        </Link>
                                        <div className='h-full'>
                                            <p className='text-[17px] font-normal white-space-[nowrap]'>{product.product_title.replace('&#x27;', "'").replace('&amp;', "&")}</p>
                                            <p>{product.name}</p>
                                            <p className='text-xl font-semibold'>{product.product_price}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div> */}
                </div>
            </div >
        }

        </>
    )
}

export default Catalogue