import React, { useState, useEffect } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { useParams } from 'react-router-dom';


const books = [
  { id: 1, title: "Birds", price: 600, url: "https://m.media-amazon.com/images/I/61H3BvN-naL._AC_UF1000,1000_QL80_.jpg" },
  { id: 2, title: "Another Bird", price: 500, url: "https://th.bing.com/th/id/OIP.ppBedO5ZIvDBF7jlclyqgAHaLG?rs=1&pid=ImgDetMain" },
  { id: 3, title: "Another Bird", price: 500, url: "https://th.bing.com/th/id/R.f130ff77f75101067d9cc5818e307ca7?rik=Fw6L%2bImNwU%2bSaw&riu=http%3a%2f%2ftesseraguild.com%2fwp-content%2fuploads%2f2018%2f06%2fHobbit.jpg&ehk=0xpERpQ3Zvv7CZHZts86OPPva7nqdaM33H9h%2b932pG0%3d&risl=&pid=ImgRaw&r=0" },
  { id: 4, title: "Another Bird", price: 500, url: "https://th.bing.com/th/id/OIP.WQrNqhnmCAQSnxef15eveQAAAA?rs=1&pid=ImgDetMain" },
  { id: 5, title: "Another Bird", price: 500, url: "https://getcovers.com/wp-content/uploads/2020/12/image49-954x1536.jpg" },
  { id: 6, title: "Another Bird", price: 500, url: "https://getcovers.com/wp-content/uploads/2020/12/image3.png" },
  { id: 7, title: "Another Bird", price: 500, url: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/01/enceladus.jpg?auto=format&q=60&fit=max&w=930" },
  { id: 8, title: "Another Bird", price: 500, url: "https://getcovers.com/wp-content/uploads/2020/12/image35.jpg" },
];


export default function CheckoutForm() {
  const { id } = useParams();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [clientSecret, setClientSecret] = useState('');
  const [isProcessing, setIsProcessing] = useState(false); // State to track form submission

  const book = books.find(book => book.id === parseInt(id));

  useEffect(() => {
    if (book) {
      fetch('http://localhost:3001/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: book.price * 100 }), // Stripe amount is in cents
      })
        .then(res => res.json())
        .then(data => setClientSecret(data.clientSecret))
        .catch(err => setError(err.message));
    }
  }, [book]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements || !clientSecret) {
      return;
    }

    setIsProcessing(true); // Disable the button

    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    setIsProcessing(false); // Re-enable the button

    if (error) {
      setError(error.message);
    } else {
      setSuccess(true);
    }
  };

  if (!book) {
    return <h2>Book not found</h2>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>{book.title}</h2>
      <h2>RS. {book.price}</h2>
      <CardElement />
      <button type="submit" disabled={!stripe || !elements || isProcessing}>
        {isProcessing ? 'Processing...' : 'Pay'}
      </button>
      {error && <div>{error}</div>}
      {success && <div>Payment Successful!</div>}
    </form>
  );
}
