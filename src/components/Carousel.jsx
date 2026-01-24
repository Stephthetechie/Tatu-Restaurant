import { useRef } from 'react';
import {foodCategory} from './FoodItems';

const Carousel = () => {
    const carouselRef = useRef(null);

    

    return (
        <div>
            <section>
                <div className="carousel slide animate showAnimate" id="carouselExample" ref={carouselRef} data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        {foodCategory.map((_, index) => (
                            <button
                                key={index}
                                type="button"
                                data-bs-target="#carouselExample"
                                data-bs-slide-to={index}
                                className={index === 0 ? "active" : ""}
                                aria-label={`Slide ${index + 1}`}
                            ></button>
                        ))}
                    </div>
                    <h1 className="carousel-title" id="menu">Our Menu</h1>
                    <div className="carousel-inner">
                        {foodCategory.map((item, index) => (
                            <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`} onClick={()=> window.open(`/menu/${item.category}`, "_blank")}>
                                <img src={item.src} className="d-block mx-auto" alt={item.alt} />
                                <h2>{item.category}</h2>
                            </div>
                        ))}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Carousel;
