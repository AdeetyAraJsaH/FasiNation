import React from 'react'
import './home.css'
import gucci from '../../assets/brandLogos/Gucci.svg'
import valentino from '../../assets/brandLogos/Valentino.svg'
import armani from '../../assets/brandLogos/Armani.svg'
import prada from '../../assets/brandLogos/Prada.svg'
import levis from '../../assets/brandLogos/Levis.svg'
import nike from '../../assets/brandLogos/Nike.svg'
import adidas from '../../assets/brandLogos/Adidas.svg'
import gap from '../../assets/brandLogos/GAP.svg'
import puma from '../../assets/brandLogos/Puma.svg'
import uspa from '../../assets/brandLogos/USPA.svg'
import { slides, banner, mediaScroller } from '../../assets/data/carouselData.json'
import { FaArrowRight } from 'react-icons/fa'
import Carousel from '../../Components/carousel/Carousel'
import XScroller from '../../Components/MediaScroller/XScroller'

function Home() {
    return (
        <div>
            <Carousel width='100%' height='25rem'>
                <div id='banner1' className='flex'>
                    <div className='w-1/3 h-full'>
                        <img className='object-cover' src={banner[0].src} alt={banner[0].alt} />
                    </div>
                    <div className='w-2/3 flex flex-col bg-white justify-between'>
                        <h2 className='lg:text-6xl md:text-3xl sm:text-2xl xl:text-7xl font-bold bg-black text-white p-4 text-center uppercase'>Great Summer Sale</h2>
                        <p className='text-4xl font-semibold text-center m-4'>Starts from <span className='bg-black px-2 rounded-md text-white'>5th</span> June</p>
                        <p className='text-2xl font-semibold text-center m-4'>FLAT 50 - 60 % OFF</p>
                        <a href='#' className='flex border-2 border-black text-black hover:bg-black hover:text-white p-4 m-4 self-center hover:scale-95 transition-all ease-in-out '>SHOP NOW
                            <FaArrowRight className='ml-2 pt-2 hover:fill-white' size={20} />
                        </a>
                    </div>
                </div>
                <div id='banner2' className='flex'>
                    <div className='w-1/3 h-full'>
                        <img className='object-cover' src={banner[1].src} alt={banner[1].alt} />
                    </div>
                    <div className='w-2/3 flex flex-col bg-white justify-between'>
                        <h2 className='lg:text-6xl md:text-3xl sm:text-2xl xl:text-7xl font-bold bg-black text-white p-4 text-center uppercase italic'>Just Go Sport</h2>
                        <p className='text-2xl font-semibold text-center m-4 uppercase'>Sales <span className='italic bg-black text-white px-2'>on the Go</span></p>
                        <p className='text-4xl font-semibold text-center m-4'>upto 40% OFF</p>
                        <a href='#' className='flex border-2 border-black text-black hover:bg-black hover:text-white p-4 m-4 self-center hover:scale-95 transition-all ease-in-out '>SHOP NOW
                            <FaArrowRight className='ml-2 pt-2 hover:fill-white' size={20} />
                        </a>
                    </div>
                </div>
                <div id='banner3' className='flex'>
                    <div className='w-1/3 h-full'>
                        <img className='object-cover object-top' src={banner[2].src} alt={banner[2].alt} />
                    </div>
                    <div className='w-2/3 flex flex-col bg-white justify-between'>
                        <h2 className='lg:text-6xl md:text-3xl sm:text-2xl xl:text-7xl font-bold bg-black text-white p-4 text-center uppercase'>Western Wears</h2>
                        <p className='text-2xl font-semibold text-center m-4 uppercase'><span className='p-2 bg-black text-white'>GRAB</span> -the- <span className='p-2 bg-black text-white'>Deals</span></p>
                        <p className='text-4xl font-semibold text-center m-4'>FLAT 50 - 60 % OFF</p>
                        <a href='#' className='flex border-2 border-black text-black hover:bg-black hover:text-white p-4 m-4 self-center hover:scale-95 transition-all ease-in-out '>SHOP NOW
                            <FaArrowRight className='ml-2 pt-2 hover:fill-white' size={20} />
                        </a>
                    </div>
                </div>
                <div id='banner4' className='flex'>
                    <div className='w-1/3 h-full'>
                        <img className='object-cover object-top' src={banner[3].src} alt={banner[3].alt} />
                    </div>
                    <div className='w-2/3 flex flex-col bg-white justify-between'>
                        <h2 className='lg:text-6xl md:text-3xl sm:text-2xl xl:text-7xl font-bold bg-black text-white p-4 text-center uppercase'><span>Grand</span> Brand <span className='bg-white text-black italic'>Deals</span></h2>
                        <p className='text-2xl font-semibold text-center m-4'><span className='bg-black text-white p-2'>Hurry Up !!!</span> Sales started </p>
                        <p className='text-4xl font-semibold text-center m-4'>upto 40% OFF</p>
                        <a href='#' className='flex border-2 border-black text-black hover:bg-black hover:text-white p-4 m-4 self-center hover:scale-95 transition-all ease-in-out '>SHOP NOW
                            <FaArrowRight className='ml-2 pt-2 hover:fill-white' size={20} />
                        </a>
                    </div>
                </div>
                <div id='banner5' className='flex'>
                    <div className='w-1/3 h-full'>
                        <img className='object-' src={banner[4].src} alt={banner[4].alt} />
                    </div>
                    <div className='w-2/3 flex flex-col bg-white justify-between'>
                        <h2 className='lg:text-6xl md:text-3xl sm:text-2xl xl:text-7xl font-bold bg-black text-white p-4 text-center uppercase'>Great Summer Sale</h2>
                        <p className='text-2xl font-semibold text-center m-4'>Starts from 5th June</p>
                        <p className='text-4xl font-semibold text-center m-4'>FLAT 50 - 60 % OFF</p>
                        <a href='#' className='flex border-2 border-black text-black hover:bg-black hover:text-white p-4 m-4 self-center hover:scale-95 transition-all ease-in-out '>SHOP NOW
                            <FaArrowRight className='ml-2 pt-2 hover:fill-white' size={20} />
                        </a>
                    </div>
                </div>
            </Carousel>
            {/* infinite-brand-scroll */}
            <div style={{ "--height": "100px", "--width": "100px", "--quantity": "10" }} className='relative brand-slider bg-white'>
                <div className='brand-list gap-x-4'>
                    <div style={{ "--position": 1 }} className='item flex items-center'><a href="#"><img className='hover:scale-105 transition-all ease-out 100ms' src={gucci} alt="Gucci" /></a></div>
                    <div style={{ "--position": 2 }} className='item flex items-center'><a href="#"><img className='hover:scale-105 transition-all ease-out 100ms' src={prada} alt="PRADA" /></a></div>
                    <div style={{ "--position": 3 }} className='item flex items-center'><a href="#"><img className='hover:scale-105 transition-all ease-out 100ms' src={valentino} alt="Valentino" /></a></div>
                    <div style={{ "--position": 4 }} className='item flex items-center'><a href="#"><img className='hover:scale-105 transition-all ease-out 100ms' src={armani} alt="ARMANI" /></a></div>
                    <div style={{ "--position": 5 }} className='item flex items-center'><a href="#"><img className='hover:scale-105 transition-all ease-out 100ms' src={levis} alt="LEVIS" /></a></div>
                    <div style={{ "--position": 6 }} className='item flex items-center'><a href="#"><img className='hover:scale-105 transition-all ease-out 100ms' src={nike} alt="NIKE" /></a></div>
                    <div style={{ "--position": 7 }} className='item flex items-center'><a href="#"><img className='hover:scale-105 transition-all ease-out 100ms' src={adidas} alt="ADIDAS" /></a></div>
                    <div style={{ "--position": 8 }} className='item flex items-center'><a href="#"><img className='hover:scale-105 transition-all ease-out 100ms' src={puma} alt="PUMA" /></a></div>
                    <div style={{ "--position": 9 }} className='item flex items-center'><a href="#"><img className='hover:scale-105 transition-all ease-out 100ms' src={uspa} alt="USPA" /></a></div>
                    <div style={{ "--position": 10 }} className='item flex items-center'><a href="#"><img className='hover:scale-105 transition-all ease-out 100ms' src={gap} alt="GAP" /></a></div>
                </div>
            </div>
            {/* carousel can used for banners */}
            <Carousel height='20rem' width='80%' margin='2rem auto'>
                {slides.map((slideData, index) => {
                    return (
                        <div key={index}>
                            <img className=' object-cover aspect-square' src={slideData.src} alt={slideData.alt} />
                        </div>
                    )
                })}
            </Carousel>
            {/* XScroller horizontal scrollbar fro products */}
            <XScroller width='80%' margin='0 auto'>
                {
                    mediaScroller.map((slide, index) => {
                        return (
                            <div key={index}>
                                <img className=' object-cover aspect-square' src={slide.src} alt={slide.alt} />
                            </div>
                        )
                    })
                }
            </XScroller>

            <div className='flex flex-col justify-center m-5'>
                <div className='set-bg flex p-7 w-full h-72 bg-clip-content bg-transparent'>
                    <div className='w-1/3 border-4 border-white h-full text-[4vw] text-center'>CLIP_BG</div>
                    <div className='w-1/3 border-4 border-white h-full text-[4vw] text-center'>CLIP_BG</div>
                    <div className='w-1/3 border-4 border-white h-full text-[4vw] text-center'>CLIP_BG</div>
                </div>
            </div>
        </div>
    )
}

export default Home