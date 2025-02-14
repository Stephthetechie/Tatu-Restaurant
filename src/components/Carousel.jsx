import React, { useRef } from 'react';
import foodItems from './FoodItems';
import { useNavigate } from 'react-router-dom';

const Carousel = () => {
    const navigate = useNavigate();
    const carouselRef = useRef(null);

    

    return (
        <div>
            <section>
                <div className="carousel slide animate showAnimate" id="carouselExample" ref={carouselRef} data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        {foodItems.map((_, index) => (
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
                        {foodItems.map((item, index) => (
                            <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`} onClick={()=> navigate(`/menu/${item.id}`)}>
                                <img src={item.src} className="d-block mx-auto" alt={item.alt} />
                                <h2>{item.title}</h2>
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
