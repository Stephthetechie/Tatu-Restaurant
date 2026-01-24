import { Link } from 'react-router-dom';
const CancellationPolicy = () => {
    return (
        <div className="cancellation-policy">
            <h2 className="cancellation-policy-heading">Booking - Cancellation Policy</h2>

            <p className="cancellation-policy-intro">
            At Tatu Restaurant, we strive to provide exceptional service and a warm dining
            experience for all our guests. To help us manage reservations efficiently and
            serve all our patrons better, we have established the following cancellation
            policy:
            </p>

            <div className="cancellation-policy-info">
                    <h3 className="cancellation-policy-subhead">1. Reservation Confirmation</h3>
                <p>
                All bookings must be confirmed by the guest at the time of reservation. This
                helps us hold your table and plan ahead to offer the best possible service.
                </p>

                <h3 className="cancellation-policy-subhead">2. Cancellation Notice</h3>
                <p>
                We kindly request that any cancellation or changes to your booking be made at
                least 24 hours in advance of your scheduled reservation time. This allows us
                the opportunity to accommodate other guests who may be waiting for a table.
                </p>

                <h3 className="cancellation-policy-subhead">3. How to Cancel</h3>
                <p>
                To cancel or modify your booking, please contact us by:
                </p>
                <p>
                Phone: +234 112 233 4444 <br />
                Email: reservations@taturestaurant.com
                </p>
                <p>
                Please include your reservation name, date, and time in your cancellation
                message.
                </p>

                <h3 className="cancellation-policy-subhead">4. Late Cancellations and No-Shows</h3>
                <p>
                Cancellations made less than 24 hours before the booking time may be subject
                to a cancellation fee.
                </p>
                <p>
                Guests who do not show up for their reservation without prior notice
                (“no-shows”) may also be charged a cancellation fee equivalent to a
                predetermined amount per person or the cost of the booking.
                </p>

                <h3 className="cancellation-policy-subhead">5. Group Bookings</h3>
                <p>
                For large parties (typically 6 or more guests), we require 48 hours’ notice
                for cancellations or changes. This allows proper staffing and preparation to
                ensure your group has a great experience.
                </p>

                <h3 className="cancellation-policy-subhead">6. Special Events and Peak Times</h3>
                <p>
                During holidays, peak dining hours, or special events, different cancellation
                terms may apply. Specific details will be communicated at the time of booking.
                </p>
        
                <h3 className="cancellation-policy-subhead">7. Refunds</h3>
                <p>
                If a cancellation fee applies, refunds (where applicable) will be processed
                using the original method of payment within 5–7 business days.
                </p>
            </div>
            <p id="policy-thank">Thank you for choosing Tatu Restaurant. We appreciate your understanding 
                and cooperation with our booking policy. Should you have any questions, please don’t hesitate to contact us.</p>

            <Link to="/booking" target="_blank" rel="noopener noreferrer"><button type="button">Back to Booking</button></Link>
        </div>
    )
}
export default CancellationPolicy;