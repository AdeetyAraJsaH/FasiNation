import React from 'react'
import { AiOutlineCopyrightCircle, AiOutlineGlobal } from 'react-icons/ai'
import './footer.css'

function Footer() {
    return (
        <div style={{ borderTop: "solid 1px", borderColor: 'grey' }} className='m-10'>
            <div style={{ color: 'grey' }} className='footer-menu flex text-sm py-2'>
                <div className='basis-1/6'><span className='text-black font-medium block my-2'>Resources</span>
                    <ul>
                        <li><span>Find a Store</span></li>
                        <li><span>Become a member</span></li>
                        <li><span>Send us a feedback</span></li>
                    </ul>
                </div>
                <div className='basis-1/6'><span className='text-black font-medium block my-2'>Help</span>
                    <ul>
                        <li><span>Get Help</span></li>
                        <li><span>Order Status</span></li>
                        <li><span>Delivery</span></li>
                        <li><span>Returns</span></li>
                    </ul>
                </div>
                <div className='basis-1/6'><span className='text-black font-medium block my-2'>Company</span>
                    <ul>
                        <li><span>About FasiNation</span></li>
                        <li><span>News</span></li>
                        <li><span>Careers</span></li>
                        <li><span>Inverstors</span></li>
                        <li><span>Sustainability</span></li>
                    </ul>
                </div>
                <div style={{ color: 'grey' }} className='h-fit basis-3/6 gap-2 inline-flex justify-end my-2'><div className=' gap-2 inline-flex cursor-pointer'><AiOutlineGlobal className='inline' size={25} color='grey' /><button className='inline'>India</button></div></div>
            </div>
            <div style={{ color: 'grey' }} className='footer-footer my-10 text-sm'>
                <ul className='flex gap-8'>
                    <li><AiOutlineCopyrightCircle className='inline pb-1' /> 2024 FasiNation, Inc. All rights reserved</li>
                    <li>Guides</li>
                    <li>Terms of Sale</li>
                    <li>Terms of Use</li>
                    <li>FasiNation Privacy Policy</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer