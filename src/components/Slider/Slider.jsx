import React , {useState, useRef, useEffect} from 'react'

const Slider = () => {

    const [index, setIndex] = useState(-1);

    const timeoutRef = useRef(null);

    const images = [
        { id: 1, image: <img src={require('../../assets/image/HomeImage/game.jpg')} /> },
        { id: 2, image: <img src={require('../../assets/image/HomeImage/amirali.jpg')} /> }
    ]

    const delay = 2500;



    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }


    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === images.length - 2 ? -1 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);



    return (
        <div className="slideshow">
            <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                {images.map(item => (
                    <div className="slide" key={item.id}>
                        {item.image}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Slider