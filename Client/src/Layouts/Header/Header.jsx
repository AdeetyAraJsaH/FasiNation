import React from 'react'
import './header.css'
import Logo1 from '/logo1.png'
import { AiOutlineHeart, AiOutlineLogin, AiOutlineSearch, AiOutlineShopping, AiOutlineWarning } from 'react-icons/ai'
// import { FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom'
import { GlobalContext } from '../../context/context';

function Header() {
    const { login, cart, favourites, query, setQuery, fetchProducts } = React.useContext(GlobalContext);
    // const searchInput = React.useRef();
    // const path = useLocation().pathname
    let lastScroll = 0;
    React.useEffect(() => {
        const body = document.body;
        const header = document.getElementById('header')
        const handleScroll = () => {
            const currentScroll = window.scrollY
            if (currentScroll <= 0) {
                body.classList.remove("scroll-up");
                return;
            }

            if (currentScroll > 120 && currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
                body.classList.remove("scroll-up");
                body.classList.add("scroll-down");
            } else if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
                body.classList.remove("scroll-down");
                body.classList.add("scroll-up");
            }
            lastScroll = currentScroll;
        }
        window.addEventListener("scroll", handleScroll);
        // return () => {
        //     document.removeEventListener('click', handleScroll);
        // };
    }, [])

    const handleSubmit = () => {
        const searchQuery = document.getElementById('search-input');
        if (searchQuery) setQuery(searchQuery.value);
    }

    const hideLineAnimation = (e) => {
        const element = document.getElementById(`${e.currentTarget.dataset.val}`);
        element.classList.add('hideline-animation');
    }
    return (
        <header id='header' className='w-full shadow-md'>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div id='nav-bar' className="flex flex-col w-full  bg-base-100 justify-between">
                        <div className='w-full flex justify-between items-center py-[2px]'>
                            <div className="flex-none md:hidden">
                                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost"
                                // onMouseDown={() => { document.getElementById('drawer').classList.remove('-translate-x-[100%]') }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                </label>
                            </div>
                            <div >
                                <a href="/"><img src={Logo1} alt="Logo" width={200} height={20} className=' mix-blend-multiply' /></a>
                            </div>
                            <div className='flex items-center'>
                                <form onSubmit={handleSubmit} className='h-10 md:flex hidden bg-black/15 rounded-full px-4'>
                                    <button onClick={handleSubmit} type='button' className=' '><AiOutlineSearch color='Black' /></button>
                                    <label className="rounded-full flex mx-2 items-center bg-transparent">
                                        <input id="search-input" type="search" className="grow outline-none bg-transparent text-black placeholder-black" placeholder="Search" />
                                    </label>
                                    {/* {searchInput.current?.value === "" ? "" :
                                        <button className='text-black'
                                            onClick={(e) => {
                                                e.preventDefault();
                                                searchInput.current.value = "";
                                                setQuery("")
                                            }}><FaTimes /></button>} */}
                                </form>
                                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                <button className="btn md:hidden btn-ghost btn-square px-0" onClick={() => document.getElementById('my_modal_3').showModal()}><AiOutlineSearch size={25} /></button>
                                <dialog id="my_modal_3" className="modal w-full ">
                                    <div className="modal-box absolute top-0 w-full rounded-none">
                                        <form method="dialog">
                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                            <label className="input input-bordered flex items-center gap-2 mt-4">
                                                <AiOutlineSearch />
                                                <input id='search' type='search' className="grow" placeholder="Search" />
                                            </label>
                                            {/* if there is a button in form, it will close the modal */}
                                        </form>
                                    </div>
                                </dialog>
                                <div className='flex justify-center items-center ml-4 gap-4'>
                                    <Link to='/favourites'>
                                        <button className="btn btn-ghost btn-circle"><div className='relative'><AiOutlineHeart size={25} />{favourites.length !== 0 ? <span className='absolute  top-[50%] left-[50%] bg-black text-white w-[22px] h-[22px] pt-[3px] text-[14px] rounded-full'>{favourites.length}</span> : ''}</div></button>
                                    </Link>
                                    {/* <button className="btn btn-circle btn-ghost">
                                        <div className='relative'>
                                            <svg aria-hidden="true" focusable="true" viewBox="0 1 25 25" role="img" width="35px" height="35px" fill="none">
                                                <path className='m-auto' stroke="currentColor" strokeWidth="1.1" d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"></path>
                                                <path stroke="currentColor" strokeWidth="0.5" d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"></path>
                                            </svg>
                                            {
                                                cart.length !== 0 ? <span className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>{cart.length}</span> : ''
                                            }
                                        </div>
                                    </button> */}
                                    <Link to='/cart'>
                                        <button className="btn btn-ghost btn-circle px-0"><div className='relative'><AiOutlineShopping size={25} />{cart.length !== 0 ? <span className='absolute  top-[50%] left-[50%] bg-black text-white w-[22px] h-[22px] p-[3px] text-[14px] rounded-full'>{cart.length}</span> : ''}</div></button>
                                    </Link>
                                </div>
                                <div className=" divider divider-horizontal mx-2"></div>
                                <div className='hidden md:block mr-2'>
                                    <a href="#" className='hover:text-gray-500'>SignIn</a>
                                </div>
                                <button className='btn btn-ghost btn-square md:hidden px-0'><AiOutlineLogin size={25} /></button>
                            </div>
                        </div>
                        <div className="w-full hidden md:block mt-2">
                            <div className='w-full flex items-center justify-center'>
                                {/* Navbar menu content here */}
                                <ul className='flex ml-2'>
                                    <li className='group nav-menu relative border-b-2 border-transparent' data-val="nav1" onMouseMove={(e) => { hideLineAnimation(e) }}>
                                        <span className='relative px-4'>
                                            <span className='m-2'>MEN</span>
                                            <div id='nav1' className='nav-line h-[2px] w-0 bg-black absolute'></div>
                                        </span>
                                        <div className="absolute top-0 -left-[92px] transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[740px] transform">
                                            <div className="relative w-full top-6 p-6 bg-white rounded-xl shadow-xl">
                                                <div
                                                    className="w-10 h-10 bg-white transform rotate-45 absolute top-0 left-[7.2rem] -z-10 translate-y-4 group-hover:-translate-y-0 transition-transform duration-500 ease-in-out rounded-sm">
                                                </div>

                                                <div className="">
                                                    <div className="grid grid-cols-2 grid-rows-2 gap-6">
                                                        {/* row-1,col-1 */}
                                                        <div>
                                                            <a href='#' className="uppercase tracking-wider text-[13px] bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block">Western Wears</a>
                                                            <ul className="mt-3 text-[15px]">
                                                                <li>
                                                                    <Link
                                                                        to='/menstshirt'
                                                                        onClick={() => setQuery('men\'s tshirt')}
                                                                        className='block px-2 -mx-2 text-gray-500 hover:underline'>
                                                                        T-Shirts
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link to='/Shirts'
                                                                        onClick={() => setQuery('men shirt')}
                                                                        className="block px-2 -mx-2 text-gray-500 hover:underline">
                                                                        Shirts
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link to='/Jackets&Coats'
                                                                        onClick={() => setQuery('men Jackets and coats')}
                                                                        className="block px-2 -mx-2 text-gray-500 hover:underline">
                                                                        Jackets & Coats
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link to='/jeans'
                                                                        onClick={() => setQuery('men jeans')}
                                                                        className="block px-2 -mx-2 text-gray-500 hover:underline">
                                                                        Jeans
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link to='/sweatShirts&hoodies'
                                                                        onClick={() => setQuery('men Sweat Shirts & hoodies')}
                                                                        className="block px-2 -mx-2 text-gray-500 hover:underline">
                                                                        Sweat Shirts & hoodies
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link to='/trousers&pants'
                                                                        onClick={() => setQuery('men Trousers & pants')}
                                                                        className="block px-2 -mx-2 text-gray-500 hover:underline">
                                                                        Trousers & Pants
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link to='/trackpants'
                                                                        onClick={() => setQuery('men track pants')}
                                                                        className="block px-2 -mx-2 text-gray-500 hover:underline">
                                                                        Track Pants
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link to='/shorts'
                                                                        onClick={() => setQuery('men shorts and 3/4ths')}
                                                                        className="block px-2 -mx-2 text-gray-500 hover:underline">
                                                                        Shorts & 3/4<span className=' text-sm'>ths</span>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        {/* row-1,col-2 */}
                                                        <div>
                                                            <a href='#' className="uppercase tracking-wider text-[13px] bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block">Accessories</a>
                                                            <ul className="mt-3 text-[15px]">
                                                                <li>
                                                                    <a href="#"
                                                                        className="block px-2 -mx-2 text-gray-500 hover:underline">
                                                                        Bagpacks
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#"
                                                                        className="block px-2 -mx-2 text-gray-500 hover:underline">
                                                                        Belts
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#"
                                                                        className="block px-2 -mx-2 text-gray-500 hover:underline">
                                                                        Bags & wallets
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#"
                                                                        className="block px-2 -mx-2 text-gray-500 hover:underline">
                                                                        Caps & Hats
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#"
                                                                        className="block px-2 -mx-2 text-gray-500 hover:underline">
                                                                        Luggage & Trolleys
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#"
                                                                        className="block px-2 -mx-2 text-gray-500 hover:underline">
                                                                        Socks
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#"
                                                                        className="block px-2 -mx-2 text-gray-500 hover:underline">
                                                                        Silver Jwellries
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#"
                                                                        className="block px-2 -mx-2 text-gray-500 hover:underline">
                                                                        Sunglasses & Frames
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#"
                                                                        className="block px-2 -mx-2 text-gray-500 hover:underline">
                                                                        Watches
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        {/* row-2,col-1 */}
                                                        <div>
                                                            <a href='#' className="uppercase tracking-wider text-[13px] bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block">Footwears</a>
                                                            <ul className="mt-3 text-[15px]">
                                                                <li>
                                                                    <a href="#"
                                                                        className="block px-2 -mx-2 text-gray-500 hover:underline">
                                                                        Casual Shoes
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#"
                                                                        className="block px-2 -mx-2 text-gray-500 hover:underline">
                                                                        Formal Shoes
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#"
                                                                        className="block px-2 -mx-2 text-gray-500 hover:underline">
                                                                        Sandals
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#"
                                                                        className="block px-2 -mx-2 text-gray-500 hover:underline">
                                                                        Flip-flops & Sleepers
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#"
                                                                        className="block px-2 -mx-2 text-gray-500 hover:underline">
                                                                        Sports Shoes
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#"
                                                                        className="block px-2 -mx-2 text-gray-500 hover:underline">
                                                                        Sneakers
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        {/* row-2,col-2 */}
                                                        <div>
                                                            <a href='#' className="uppercase tracking-wider text-[13px] bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block">Innerwears</a>
                                                            <ul className="mt-3 text-[15px]">
                                                                <li>
                                                                    <a href="#"
                                                                        className="block px-2 -mx-2 text-gray-500 hover:underline">
                                                                        Vests
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#"
                                                                        className="block px-2 -mx-2 text-gray-500 hover:underline">
                                                                        Briefs
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#"
                                                                        className="block px-2 -mx-2 text-gray-500 hover:underline">
                                                                        Trunks & Boxers
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className='group nav-menu relative border-b-2 border-transparent' data-val="nav2" onMouseLeave={(e) => { hideLineAnimation(e) }}>
                                        <span className='relative px-4'>
                                            <span className='m-2'>WOMEN</span>
                                            <div id='nav2' className='nav-line h-[2px] w-0 bg-black absolute'></div>
                                        </span>
                                        <div className="absolute top-0 -left-[175px] transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[740px] transform">
                                            <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                                                <div
                                                    className="w-10 h-10 bg-white transform rotate-45 absolute top-0 left-[29%] -z-10 transition-transform translate-y-4 group-hover:translate-y-0 duration-500 ease-in-out rounded-sm">
                                                </div>
                                                <div className="">
                                                    <div className="grid grid-cols-2 grid-rows-2 gap-6">
                                                        {/* row-1,col-1 */}
                                                        <div>
                                                            <a href='#' className="uppercase tracking-wider text-[13px] bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block">Western Wears</a>
                                                            <ul className="mt-3 text-[15px]">
                                                                <li>
                                                                    <a href="#"
                                                                        className="block px-2 -mx-2 text-gray-500 hover:underline">
                                                                        Tops & T-Shirts
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#"
                                                                        className="block px-2 -mx-2 text-gray-500 hover:underline">
                                                                        Jeans & Jeggings
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#"
                                                                        className="block px-2 -mx-2 text-gray-500 hover:underline">
                                                                        Jackets & Coats
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#"
                                                                        className="block px-2 -mx-2 text-gray-500 hover:underline">
                                                                        Dresses
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#"
                                                                        className="block px-2 -mx-2 text-gray-500 hover:underline">
                                                                        Sweat Shirts & Hoodies
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#"
                                                                        className="block px-2 -mx-2 text-gray-500 hover:underline">
                                                                        Trousers & Pants
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#"
                                                                        className="block px-2 -mx-2 text-gray-500 hover:underline">
                                                                        Skirts & Shorts
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#"
                                                                        className="block px-2 -mx-2 text-gray-500 hover:underline">
                                                                        Jumpsuits & Playsuits
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#"
                                                                        className="block px-2 -mx-2 text-gray-500 hover:underline">
                                                                        Sweat Shirts & Hoodies
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        {/* row-1,col-2 */}
                                                        <div>
                                                            <a href='#' className="uppercase tracking-wider text-[13px] bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block">Accessories</a>
                                                            <ul className="mt-3 text-[15px]">
                                                                <li>
                                                                    <a href="#"
                                                                        className="block px-2 -mx-2 text-gray-500 hover:underline">
                                                                        Bagpacks
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#"
                                                                        className="block px-2 -mx-2 text-gray-500 hover:underline">
                                                                        Belts
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#"
                                                                        className="block px-2 -mx-2 text-gray-500 hover:underline">
                                                                        Bags & wallets
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#"
                                                                        className="block px-2 -mx-2 text-gray-500 hover:underline">
                                                                        Caps & Hats
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#"
                                                                        className="block px-2 -mx-2 text-gray-500 hover:underline">
                                                                        Luggage & Trolleys
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#"
                                                                        className="block px-2 -mx-2 text-gray-500 hover:underline">
                                                                        Socks & Stokings
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#"
                                                                        className="block px-2 -mx-2 text-gray-500 hover:underline">
                                                                        Stoles & Scarves
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#"
                                                                        className="block px-2 -mx-2 text-gray-500 hover:underline">
                                                                        Sunglasses & Frames
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#"
                                                                        className="block px-2 -mx-2 text-gray-500 hover:underline">
                                                                        Watches
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        {/* row-2,col-1 */}
                                                        <div>
                                                            <a href='#' className="uppercase tracking-wider text-[13px] bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block">Footwears</a>
                                                            <ul className="mt-3 text-[15px]">
                                                                <li>
                                                                    <a href="#"
                                                                        className="block px-2 -mx-2 text-gray-500 hover:underline">
                                                                        Casual Shoes
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#"
                                                                        className="block px-2 -mx-2 text-gray-500 hover:underline">
                                                                        Formal Shoes & Heeled Shoes
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#"
                                                                        className="block px-2 -mx-2 text-gray-500 hover:underline">
                                                                        Sandals & Heeled Sandals
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#"
                                                                        className="block px-2 -mx-2 text-gray-500 hover:underline">
                                                                        Flip-flops & Sleepers
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#"
                                                                        className="block px-2 -mx-2 text-gray-500 hover:underline">
                                                                        Sports Shoes
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#"
                                                                        className="block px-2 -mx-2 text-gray-500 hover:underline">
                                                                        Sneakers
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#"
                                                                        className="block px-2 -mx-2 text-gray-500 hover:underline">
                                                                        Boots
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        {/* row-2,col-2 */}
                                                        <div>
                                                            <a href='#' className="uppercase tracking-wider text-[13px] bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block">Innerwears</a>
                                                            <ul className="mt-3 text-[15px]">
                                                                <li>
                                                                    <a href="#"
                                                                        className="block px-2 -mx-2 text-gray-500 hover:underline">
                                                                        Bras
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#"
                                                                        className="block px-2 -mx-2 text-gray-500 hover:underline">
                                                                        Panties
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#"
                                                                        className="block px-2 -mx-2 text-gray-500 hover:underline">
                                                                        Maternity Wears
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#"
                                                                        className="block px-2 -mx-2 text-gray-500 hover:underline">
                                                                        Thermal Wears
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#"
                                                                        className="block px-2 -mx-2 text-gray-500 hover:underline">
                                                                        Camisoles & Slips
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className='group nav-menu relative border-b-2 border-transparent' data-val="nav3" onMouseLeave={(e) => { hideLineAnimation(e) }}>
                                        <span className='relative px-4'>
                                            <span className='m-2 uppercase'>Home & kitchens</span>
                                            <div id='nav3' className='nav-line h-[2px] w-0 bg-black absolute'></div>
                                        </span>
                                        <div className="absolute top-0 -left-[284px] transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[740px] transform">
                                            <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                                                <div
                                                    className="w-10 h-10 bg-white transform rotate-45 absolute top-0 left-[48%] -z-10 translate-y-4 group-hover:-translate-y-0 transition-transform duration-500 ease-in-out rounded-sm">
                                                </div>
                                                {/* relative z-10 */}
                                                <div className="">
                                                    <div className="grid grid-cols-2 gap-6">
                                                        <div>
                                                            <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">The Suite</p>
                                                            <ul className="mt-3 text-[15px]">
                                                                <li>
                                                                    <a href="#"
                                                                        className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
                                                                        Course Editor
                                                                        <p className="text-gray-500 font-normal">All-in-one editor</p>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#"
                                                                        className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
                                                                        Accept payments
                                                                        <p className="text-gray-500 font-normal">Pre-build payments page</p>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#"
                                                                        className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
                                                                        Closed Captioning
                                                                        <p className="text-gray-500 font-normal">Use AI to generate captions</p>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div>
                                                            <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">Extensions</p>
                                                            <ul className="mt-3 text-[15px]">
                                                                <li>
                                                                    <a href="#"
                                                                        className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
                                                                        Plugins
                                                                        <p className="text-gray-500 font-normal">Tweak existing functionality</p>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#"
                                                                        className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
                                                                        Batch uploads
                                                                        <p className="text-gray-500 font-normal">Get your time back</p>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#"
                                                                        className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
                                                                        Social sharing
                                                                        <p className="text-gray-500 font-normal">Generate content for socials</p>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className='group nav-menu relative border-b-2 border-transparent' data-val="nav4" onMouseLeave={(e) => { hideLineAnimation(e) }}>
                                        <span className='relative px-4'>
                                            <span className='m-2'>KIDS</span>
                                            <div id='nav4' className='nav-line h-[2px] w-0 bg-black absolute'></div>
                                        </span>
                                        <div className="absolute top-0 -left-[470px] transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[740px] transform">
                                            <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                                                <div
                                                    className="w-10 h-10 bg-white transform rotate-45 absolute top-0 left-[67%] -z-10 translate-y-4 group-hover:-translate-y-0 transition-transform duration-500 ease-in-out rounded-sm">
                                                </div>
                                                <div className="">
                                                    <div className="text-center uppercase tracking-wider text-[16px] bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block">
                                                        <AiOutlineWarning size={25} color={'Orange'} className='inline-flex mx-1 mb-2' />
                                                        Sorry, No Kids Section, Cause it is just a Demo Project
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className='group nav-menu relative border-b-2 border-transparent' data-val="nav5" onMouseLeave={(e) => { hideLineAnimation(e) }}>
                                        <span className='relative px-4'>
                                            <span className='m-2'>BEAUTY</span>
                                            <div id='nav5' className='nav-line h-[2px] w-0 bg-black absolute'></div>
                                        </span>
                                        <div className="absolute top-0 -left-[550px] transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[740px] transform">
                                            <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                                                <div
                                                    className="w-10 h-10 bg-white transform rotate-45 absolute top-0 left-[79%] 
                                                    -z-10 translate-y-4 group-hover:-translate-y-0 transition-transform duration-500 ease-in-out rounded-sm">
                                                </div>

                                                <div className="">
                                                    <div className="grid grid-cols-2 gap-6">
                                                        <div>
                                                            <p className="uppercase tracking-wider text-[13px] bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block">Makeup</p>
                                                            <ul className="mt-3 text-[15px]">
                                                                <li>
                                                                    <a href="#"
                                                                        className="block px-2 -mx-2 hover:underline">
                                                                        Lipstick
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#"
                                                                        className="block px-2 -mx-2 hover:underline">
                                                                        LipGloss
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#"
                                                                        className="block px-2 -mx-2 hover:underline">
                                                                        Mascara
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#"
                                                                        className="block px-2 -mx-2 hover:underline">
                                                                        Eyeliner
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#"
                                                                        className="block px-2 -mx-2 hover:underline">
                                                                        Foundation
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#"
                                                                        className="block px-2 -mx-2 hover:underline">
                                                                        Concealer
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div>
                                                            <p className="uppercase tracking-wider text-[13px] bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block">HairCare</p>
                                                            <ul className="mt-3 text-[15px]">
                                                                <li>
                                                                    <a href="#"
                                                                        className="block px-2 -mx-2 hover:underline">
                                                                        Shampoo
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#"
                                                                        className="block px-2 -mx-2 hover:underline">
                                                                        Conditioner
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#"
                                                                        className="block px-2 -mx-2 hover:underline">
                                                                        Hair Oil
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#"
                                                                        className="block px-2 -mx-2 hover:underline">
                                                                        Hair Color
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#"
                                                                        className="block px-2 -mx-2 hover:underline">
                                                                        Hair Styling
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div id='drawer' className="drawer-side lg:hidden transition-all 200ms ease-in-out">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className=" drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200">
                        {/* <button className='btn btn-circle w-fit px-3 m-2 drawer-toggle' htmlFor="my-drawer-3" aria-label="close sidebar"
                        // onClick={() => { document.getElementById('drawer').classList.add('-translate-x-[100%]') }}
                        ><FaTimes size={20} /></button> */}
                        {/* Sidebar content here */}
                        <li><a>MEN</a></li>
                        <li><a>WOMEN</a></li>
                        <li><a>PARTIES</a></li>
                        <li><a>BABY & KIDS</a></li>
                        <li><a>BEAUTY</a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header