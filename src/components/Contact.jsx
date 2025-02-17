import React, { useState } from 'react'
import FormDialog from './FormDialog';

const Contact = (props) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isDialogOpen, setIsDialogOpen] = useState(false);


    const handleSubmit = (e)=>{
        e.preventDefault();
        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.")
            return;
            
        }

        
        setTimeout(() => setIsDialogOpen(true), 500);
        setName("");
        setEmail("");
        setMessage("");
    }


  return (
    <div>
       <section className='contact-sec'>
        <div className="contact-img">
            <img src="./images/mobile-hand-view.png" alt="" />
        </div>
            <div className="contact showAnimate" id="contact">
                <div className="left-side animate">
                    <div className="address details">
                        <i className="fas fa-map-marker-alt"></i>
                        <div className="title">Address</div>
                        <div className="text-one">3 Sling Drive, Victoria Island</div>
                        <div className="text-two">Lagos, Nigeria.</div>
                    </div>
                    <div className="phone details">
                        <i className="fas fa-phone"></i>
                        <div className="title">Phone</div>
                        <div className="text-one">+23411223344</div>
                        <div className="text-two">+23411002200</div>
                    </div>
                    <div className="email details">
                        <i className="fas fa-envelope"></i>
                        <div className="title">Email Address</div>
                        <div className="text-one">taturestaurant.org</div>
                        <div className="text-two">contactus@taturestaurant.org</div>
                    </div>
                </div>
    
                <div className="right-side animate">
                    <h2>Send Us a Message</h2>
                    <p>Please let us know if you have any complaints or enquiries.</p>
                    <form action="" method="post" onSubmit={handleSubmit}>
                        <div className="input-box">
                            <input type="text" value={name} onChange={e=>setName(e.target.value)} name="name" id="" placeholder="Enter your name"/>
                        </div>
                        <div className="input-box">
                            <input type="email" value={email} onChange={e=>setEmail(e.target.value)} name="email" id="" placeholder="Enter your email"/>
                        </div>
                        <div className="input-box message-box">
                            <textarea name="message" value={message}onChange={e=>setMessage(e.target.value)} id=""cols="60" rows="5" placeholder="Enter your message" ></textarea>
                        </div>
                        <div className="button">
                            <button type="submit">Send Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        {isDialogOpen && (
            <FormDialog 
            userName= {name}
            info ={'message'} 
            onClose={()=>setIsDialogOpen(false)}
        />
        )}
    </div>
  )
}

export default Contact
