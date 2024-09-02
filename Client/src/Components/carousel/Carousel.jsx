import React from 'react'
import './carousel.css'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

function Carousel({ margin = '0 auto', width = '80%', height = '40rem', children }) {

    const [slide, setSlide] = React.useState(0);
    const nextSlide = () => { setSlide(slide < children.length - 1 ? slide + 1 : 0); };
    const prevSlide = () => { setSlide(slide > 0 ? slide - 1 : children.length - 1); };
    return (
        <div style={{ 'margin': margin }} className={`-carousel`}>
            <button className={slide === 0 ? 'hidden' : 'carousel-btn left-5'} onClick={prevSlide}><FaArrowLeft size={25} /></button>
            <div style={{ 'height': height, 'width': width }} className={`carousel-container`}>
                <div className={`carousel-track overflow-hidden`}>
                    {children.map((child, index) => {
                        const classes = child.props.className !== undefined ? child.props.className + ' carousel-slide' : ' carousel-slide';
                        const newProps = {
                            ...child.props,
                            className: classes,
                            style: { ...child.props.style, "--position": index - slide },
                            key: index
                        }
                        return (React.cloneElement(child, newProps))
                    })}

                </div>
            </div>
            <button className={slide === children.length - 1 ? 'hidden' : 'carousel-btn right-5'} onClick={nextSlide}><FaArrowRight size={25} /></button>
            <div className='carousel-nav'>
                {children.map((_, index) => {
                    return (
                        <button onClick={() => setSlide(index)} key={index} className={slide === index ? 'carousel-nav-btn current-slide' : 'carousel-nav-btn'}></button>
                    )
                })}
            </div>
        </div >
    )
}

export default Carousel