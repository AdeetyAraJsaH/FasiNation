import React from 'react'
import './mediaScroller.css'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
function XScroller({ width, margin, padding, children }) {
    const [scrollLength, setScrollLength] = React.useState(0);
    const [scrollWidth, setScrollWidth] = React.useState(0);
    const [_scrollLeft, setScrollLeft] = React.useState(0);
    React.useEffect(() => {
        const scroller = document.getElementById('media-scroller');
        setScrollLeft(() => scroller.scrollLeft);
        setScrollLength(() => scroller.clientWidth + scroller.scrollLeft);
        setScrollWidth(() => scroller.scrollWidth);
        const handleScroll = () => {
            setScrollLeft(scroller.scrollLeft);
            setScrollLength(scroller.clientWidth + scroller.scrollLeft);
        };

        scroller.addEventListener('scroll', handleScroll);
        return () => scroller.removeEventListener('scroll', handleScroll);
    }, []);
    const scrollLeft = () => {
        console.log('scrollLft : ' + _scrollLeft);
        console.log('scrollLen : ' + scrollLength);
        console.log('scrollWid : ' + scrollWidth);
        const scroller = document.getElementById('media-scroller');
        const slides = document.getElementsByClassName('media-element');
        const additionalWidth = window.innerWidth * 0.05; // additional width to slide extra than actual scroll width to hide buttons
        scroller.scrollBy({ left: - (3 * slides[0].getBoundingClientRect().width + additionalWidth), behavior: 'smooth' })
        setScrollLeft(() => scroller.scrollLeft);
        setScrollLength(() => scroller.clientWidth + scroller.scrollLeft);
        setScrollWidth(() => scroller.scrollWidth);
    }
    const scrollRight = () => {
        console.log('scrollLft : ' + _scrollLeft);
        console.log('scrollLen : ' + scrollLength);
        console.log('scrollWid : ' + scrollWidth);
        const scroller = document.getElementById('media-scroller');
        const slides = document.getElementsByClassName('media-element');
        const additionalWidth = window.innerWidth * 0.05;
        scroller.scrollBy({ left: 3 * slides[0].getBoundingClientRect().width + additionalWidth, behavior: 'smooth' })
        setScrollLeft(() => scroller.scrollLeft);
        setScrollLength(() => scroller.clientWidth + scroller.scrollLeft);
        setScrollWidth(() => scroller.scrollWidth);
    }
    return (
        <div className='media-scroller-wrapper relative '>
            <button className={_scrollLeft <= 0 ? 'hidden' : 'scroller-btn left-5'} onClick={scrollLeft}><FaArrowLeft size={25} /></button>
            <div id='media-scroller' style={{ 'width': width, 'margin': margin, 'padding': padding }} className='media-scroller'>
                {children.map((child, index) => {
                    const classes = child.props.className !== undefined ? child.props.className + ' media-element snap-inline' : 'media-element snap-inline';
                    const newProps = {
                        ...child.props,
                        className: classes,
                        style: { ...child.props.style },
                        key: index
                    }
                    return (React.cloneElement(child, newProps))
                })}
            </div>
            <button className={scrollLength > scrollWidth - 1 ? 'hidden' : 'scroller-btn right-5'} onClick={scrollRight}><FaArrowRight size={25} /></button>
        </div>
    )
}

export default XScroller