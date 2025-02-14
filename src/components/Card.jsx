import React from 'react'
import Hero from './Hero'

const Card = () => {
    const handleCardBooking = (e)=>{
        e.preventDefault();
        document.getElementById("booking").scrollIntoView({behavior: "smooth"})
     }
     const handleCardMenu = (e)=>{
        e.preventDefault();
        document.getElementById("menu").scrollIntoView({behavior: "smooth"})
     } 
  return (
    <div>
      <section className=" card border-0 " id="blog">
            <div className=" card-container showAnimate">
             
                <div className="card-content custom-card-b animate">
                    <img src="./images/seasonal-menu.jpg" className="card-img-top" alt="pasta with prawns"/>
                    <div className="card-body">
                        <h2>New Menu Launched!</h2>
                        <p className="card-text">Indulge in our signature Lemon Butter Chicken, made with tender chicken breast, zesty lemon, and rich butter, all perfectly balanced to create a dish that will leave you wanting more. Try it out today and taste the difference for yourself!</p>
                        <a href="" onClick={handleCardMenu}>Try It Out!</a>
                    </div>
                </div>

             
                <div className="card-content custom-card-b animate">
                    <img src="./images/fine-dinning.jpg" alt="fine dining"/>
                    <div className="card-body">
                        <h2>Book A Table</h2>
                        <p className="card-text">Experience the best of fine dining at Tatu Restaurant. Book a table now and enjoy a culinary journey with our expertly crafted dishes, made with fresh ingredients and a passion for flavor.</p>
                        <a href="#" id="book-now" onClick={handleCardBooking}>Book Now</a>
                    </div>
                </div>

             
                <div className="card-content custom-card-b animate">
                    <img src="./images/french_toast.jpg" alt="pasta"/>
                    <div className="card-body">
                        <h2>Opening Hours</h2>
                        <p className="card-text">Join us at Tatu Restaurant during our opening hours and indulge in a world of flavors.</p>
                        <div className="hours">
                            <h3>Opening hours </h3>
                            <p>Monday to Friday: 8am - 10pm</p>
                            <p>Saturday & Sunday: 9am - 11pm </p>
                        </div>
                    </div>
                </div>
            </div>
          </section>

    </div>
  )
}

export default Card
