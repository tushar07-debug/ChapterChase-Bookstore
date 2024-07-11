import './App.css';
import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import Card from "./Card";
import CardDetail from "./CardDetail";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const stripePromise = loadStripe('v'); 

function App() {
  const books = [
    { id: 1, title: "Birds", url: "https://m.media-amazon.com/images/I/61H3BvN-naL._AC_UF1000,1000_QL80_.jpg" },
    { id: 2, title: "Another Bird", url: "https://th.bing.com/th/id/OIP.ppBedO5ZIvDBF7jlclyqgAHaLG?rs=1&pid=ImgDetMain" },
    { id: 3, title: "Another Bird", url: "https://th.bing.com/th/id/R.f130ff77f75101067d9cc5818e307ca7?rik=Fw6L%2bImNwU%2bSaw&riu=http%3a%2f%2ftesseraguild.com%2fwp-content%2fuploads%2f2018%2f06%2fHobbit.jpg&ehk=0xpERpQ3Zvv7CZHZts86OPPva7nqdaM33H9h%2b932pG0%3d&risl=&pid=ImgRaw&r=0" },
    { id: 4, title: "Another Bird", url: "https://th.bing.com/th/id/OIP.WQrNqhnmCAQSnxef15eveQAAAA?rs=1&pid=ImgDetMain" },
    { id: 5, title: "Another Bird", url: "https://getcovers.com/wp-content/uploads/2020/12/image49-954x1536.jpg" },
    { id: 6, title: "Another Bird", url: "https://getcovers.com/wp-content/uploads/2020/12/image3.png" },
    { id: 7, title: "Another Bird", url: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/01/enceladus.jpg?auto=format&q=60&fit=max&w=930" },
    { id: 8, title: "Another Bird", url: "https://getcovers.com/wp-content/uploads/2020/12/image35.jpg" },
  ];
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              {books.map(book => (
                <Card key={book.id} book={book} />
              ))}
            </div>
          }
        />
        <Route path="/book/:id" element={<CardDetail books={books} />} />
        <Route 
          path="/checkout/:id" 
          element={
            <Elements stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          } 
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
