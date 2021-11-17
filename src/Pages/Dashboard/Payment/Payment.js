import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom/cjs/react-router-dom.min';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js'
import CheckoutForm from './ChackoutForm';

const stripePromise=loadStripe('pk_test_51JvoinCV69n2H60ahAt9Qv8CnRs98DKYgaBQqeiIWmoWAJ8OmOc87UVtf2VmSMJYVQxqemCyFTVExngd80Wrulb400B81mjV9z');



const Payment=() => {
    const {appointmentId}=useParams();
    console.log(appointmentId);
    const [appointment, setAppointment]=useState({});


    useEffect(() => {
        fetch(`http://localhost:5000/appointments/${appointmentId}`)
            .then(res => res.json())
        .then(data => setAppointment(data))
    }, [appointmentId]);
    return (
        <div>
            <h2>Please Pay For {appointmentId}</h2>
            <h3>{appointment.patientName} for {appointment.serviceName}</h3>
            <h4>Pay: ${appointment.price}</h4>
           {appointment?.price && <Elements stripe={stripePromise}>
                <CheckoutForm
                    price={appointment.price}
                    appointment= {appointment}
                ></CheckoutForm>
                </Elements>}
        </div>
    );
};

export default Payment;