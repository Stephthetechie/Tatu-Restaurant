import React from 'react'

const About = () => {
  return (
    <div>
      <section>
            <div className="about-section showAnimate" id="about">
                <div className="about-text animate" >
                    <h2>About Us</h2>
                    <p>Tatu Restaurant was born out of a passion for fine dining and a desire to create a unique culinary experience.
                        Our story began with a team of dedicated chefs and restaurateurs who shared a vision of bringing people 
                        together through exceptional food and warm hospitality. We're proud of our heritage and committed to continuing 
                        our tradition of excellence in everything we do.
                    </p>
                </div>
                <div className="about-img animate">
                    <img src="./images/samuel-foster-LxD9fZYR2uw-unsplash.jpg" alt=""/>
                    <img src="./images/jason-leung-poI7DelFiVA-unsplash.jpg" alt=""/>
                </div>
            </div>
        </section>
    </div>
  )
}

export default About
