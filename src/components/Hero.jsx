import React from 'react'

const Hero = () => {
  const handleHeroBooking = (e)=>{
    e.preventDefault();
    document.getElementById("booking").scrollIntoView({behavior: "smooth"}) }
  return (
    <div>
      <section className=" sec-1">
        <div className="hero-content showAnimate" id="home">
          {/* <img src="./images/chef-plating.jpg" className="animate" alt=""/> */}
          <div className="hero-desc animate">
            <h1>Welcome to Tatu Restaurant!</h1>
            <p>Experience the epitome of fine dining at Tatu, where every bite is a masterclassName in culinary innovation.</p>
            <p>So why wait? Book your table now and experience the TATU difference!</p>
            <div className="hero-button">
              <button onClick={handleHeroBooking}>Book Now</button>
            </div>
          </div>         
        </div>
      </section>
    </div>
  )
}

export default Hero
