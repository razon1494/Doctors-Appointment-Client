import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js';
import { CircularProgress } from '@mui/material';
import React, {useEffect, useState} from 'react';
import useAuth from './../../../hooks/useAuth'
const ChackoutForm=({appointment}) => {
  const {patientName, _id, price}=appointment;
    const stripe=useStripe();
  const elements=useElements();
  const {user}=useAuth();
  const [error, setError]=useState('');
  const [success, setSuccess]=useState('');
  const [clientSecret, setClientSecret]=useState('');
  const [processing, setProcessing]=useState(false);

    useEffect(() => {
      fetch('http://localhost:5000/create-payment-intent', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({price})
      })
        .then(res => res.json())
        .then(data => {

          setClientSecret(data.clientSecret);
          console.log(clientSecret, 'from cs')
        })
    },[price])

  const handleSubmit=async (e) => {
      e.preventDefault();
        if(!stripe||!elements) {
            return;
        }
        const card=elements.getElement(CardElement);
        if(card===null) {
            return;
        }
    setProcessing(true);
      const {error, paymentMethod}=await stripe.createPaymentMethod({
        type: 'card',
        card
      })
      if(error) {
        setError(error)
        console.log(error)
        setSuccess('')
      }
      else {
        setError('');
        console.log(paymentMethod)

    }
    const {paymentIntent, error: intenterror} = await stripe.confirmCardPayment(
  clientSecret,
  {
    payment_method: {
      card: card,
      billing_details: {
        name: patientName,
        email: user.email
      },
    },
  },
);
    if(intenterror) {
      setError(intenterror.message);
      setSuccess('');
    }
    else {
      setError('');
      setSuccess('Your Payment Processed Successfully')
      console.log(paymentIntent)
      setProcessing(false);
      //save to database
      const payment={
        amount: paymentIntent.amount,
        transaction: paymentIntent.client_secret.slice('_secret'),
        created: paymentIntent.created,
        last4: paymentMethod.card.last4
      }
      const url=`http://localhost:5000/appointments/${_id}`
      fetch(url, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(payment)
      })
        .then(res => res.json())
      .then(data => console.log(data))
    }
  }
  console.log(error.message)
    return (
        <div>
            <h2>Paying ${price}</h2>
             <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      {processing ? <CircularProgress />  : <button type="submit" disabled={!stripe || success}>
        Pay ${price}
          </button>}

        </form>
        {
          error&&<p style={{color: 'red'}}>{error.message}</p>
        }
        {
          success&&<p style={{color: 'green'}}>{success}</p>
        }
        </div>
    );
};

export default ChackoutForm;