import React, { useState } from 'react'
import FormDialog from './FormDialog'

const Booking = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleBookingSubmit = (e)=>{
        e.preventDefault();
        if (name === "" || email === "" || date === "" || time === "") {
            alert("Please fill in all fields.")
            return;
        }
        setTimeout(() => {
            setIsDialogOpen(true);

        }, 1000);
        setName("");
        setEmail("");
        setDate("");
        setTime("");

        
        
    }
  return (
    <div>
       <section className='booking-sec'>
            <div className="booking-img">
                <img src="./images/booking-2.jpg" alt="booking"/>
            </div>
            <div className="booking animate showAnimate" id="booking">
                <h1 className="booking-title">Book a Table</h1>
                <form action="" method="post" onSubmit={handleBookingSubmit}>
                    <div className="mb-3">
                        <label for="name">Name:</label>
                        <input type="name" value={name} onChange={e=>setName(e.target.value)} name="name" id="name" placeholder="Enter your name" required/>
                    </div>
                    <div className="mb-3">
                        <label for="email">Email:</label>
                        <input type="email" value={email} onChange={e=>setEmail(e.target.value)} name="email" id="exampleInputEmail1" placeholder="Enter your email" required className="form-control"  aria-describedby="emailHelp"/>
                    </div>
                    
                   <div className="booking-date-time mb-3">
                    <div>
                        <label for="booking-date">Date:</label>
                        <input type="date" value={date} onChange={e=>setDate(e.target.value)}  name="date" id="booking-date" required/>
                    </div>
                    <div className="mb-3">
                        <label for="booking-time">Time:</label>
                        <input type="time" value={time} onChange={e=>setTime(e.target.value)} name="time" id="booking-time" required/>
                    </div>
                    
                   </div>
                   <div className="mb-3">
                    <label for="booking-people">Number of people:</label>
                    <input type="number" name="number" id="booking-people" required min="1" max="8" value="4"/>
                </div>
                    <div className="checkbox mb-3">
                        <input type="checkbox" name="policy" id="policy-checkbox" required/>
                        <label for="policy-checkbox">I agree to the cancellation policy</label>
                    </div>
        
                    <button type="submit" >Book Now</button>
                    
                </form>
            </div>
        </section>
        {isDialogOpen && (
            <FormDialog
            userName={name}
            info={"booking"}
            onClose={()=>setIsDialogOpen(false)}
            
            />
        )}
    </div>
  )
}

export default Booking
