// import React from 'react';
// import { useParams } from 'react-router-dom';
// import './CardDetail.css';

// const books = [
//   { id: 1, title: "Birds", price: "RS.500", url: "https://m.media-amazon.com/images/I/61H3BvN-naL._AC_UF1000,1000_QL80_.jpg" },
//   { id: 2, title: "Another Bird", price: "RS.500", url: "https://th.bing.com/th/id/OIP.ppBedO5ZIvDBF7jlclyqgAHaLG?rs=1&pid=ImgDetMain" },
//   { id: 3, title: "Another Bird", price: "RS.500", url: "https://th.bing.com/th/id/R.f130ff77f75101067d9cc5818e307ca7?rik=Fw6L%2bImNwU%2bSaw&riu=http%3a%2f%2ftesseraguild.com%2fwp-content%2fuploads%2f2018%2f06%2fHobbit.jpg&ehk=0xpERpQ3Zvv7CZHZts86OPPva7nqdaM33H9h%2b932pG0%3d&risl=&pid=ImgRaw&r=0" },
//   { id: 4, title: "Another Bird", price: "RS.500", url: "https://th.bing.com/th/id/OIP.WQrNqhnmCAQSnxef15eveQAAAA?rs=1&pid=ImgDetMain" },
//   { id: 5, title: "Another Bird", price: "RS.500", url: "https://getcovers.com/wp-content/uploads/2020/12/image49-954x1536.jpg" },
//   { id: 6, title: "Another Bird", price: "RS.500", url: "https://getcovers.com/wp-content/uploads/2020/12/image3.png" },
//   { id: 7, title: "Another Bird", price: "RS.500", url: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/01/enceladus.jpg?auto=format&q=60&fit=max&w=930" },
//   { id: 8, title: "Another Bird", price: "RS.500", url: "https://getcovers.com/wp-content/uploads/2020/12/image35.jpg" },
// ];

// export default function CardDetail() {
//   const { id } = useParams();
//   const book = books.find(book => book.id === parseInt(id));

//   if (!book) {
//     return <h2>Book not found</h2>;
//   }

//   return (
//     <div className="CardDetail">
//       <div className="left-side">
//         <img src={book.url} alt={book.title} />
//         <h2>{book.title}</h2>
//         <h3>{book.price}</h3>
//         <button>Buy Now</button>
//       </div>
//       <div className="right-side">
//         <h2>{book.title}</h2>
//         <p>Here is some random information about the book. It is an excellent read and has received great reviews. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil pariatur adipisci amet repellat nesciunt necessitatibus quis libero sequi dolor eligendi, exercitationem tenetur alias tempore fugiat! Excepturi labore repellendus accusantium voluptatibus nam officiis. Laudantium, officia est maiores nostrum quam quibusdam quod assumenda, quos rem eos odio, pariatur corporis esse ad numquam dolorum aliquam illum id ullam hic! Nulla architecto maiores corrupti, ab sequi libero sed. Voluptatem ut rerum earum, repudiandae officia dolores odio. Quidem voluptatum, excepturi voluptatibus reprehenderit minima aliquid nostrum ipsa suscipit nesciunt quae autem praesentium doloribus veniam corrupti perspiciatis mollitia nisi molestiae quam natus, dolor animi illum quia. Odit illo sit officia aperiam reprehenderit non, nesciunt excepturi at nulla, beatae quo ex provident libero omnis rerum nemo. Itaque inciatis excepturi doloremque, corrupti quas est iure ipsa eius magni quae quasi fuga! Tenetur magni veritatis dolore officiis. Non explicabo nihil, provident culpa ipsam eligendi quia unde suscipit debitis molestiae, facilis ut minima delectus consectetur aliquam excepturi architecto animi totam beatae incidunt tenetur quaerat nulla distinctio. Atque, nam rem? Quae obcaecati, corrupti molestias, odit alias qui nisi, sunt libero itaque veniam amet. Voluptatibus amet quae fugit? Aliquid quasi quod aspernatur dolorem sit est maiores similique ipsa fuga vitae ab consectetur laborum molestias placeat alias eligendi quae, voluptatibus, excepturi at corrupti voluptate voluptates dicta? Atque fuga esse necessitatibus a aliquid corrupti unde voluptates, earum ipsa recusandae provident voluptatem veniam at, et, ratione commodi amet vitae? Laborum harum veniam at tempore.</p>
//         <h2>Publication details:</h2>
//         <p>Published by XYZ Publications, 2024.</p>
//         <h2>Terms and conditions: </h2>
//         <p>Please read our terms and conditions before purchasing the book.</p>
//       </div>
//     </div>
//   );
// }

import './CardDetail.css';
import React from 'react';
import './CardDetail.css';
import { useParams, useNavigate } from 'react-router-dom';

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

export default function CardDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = books.find(book => book.id === parseInt(id));

  if (!book) {
    return <h2>Book not found</h2>;
  }

  const handleBuyNow = () => {
    navigate(`/checkout/${book.id}`);
  };

  return (
    <div className="CardDetail">
      <div className="left">
        <img src={book.url} alt={book.title} />
        <h2>{book.title}</h2>
        <h2>RS. {book.price}</h2>
        <button onClick={handleBuyNow}>Buy Now</button>
      </div>
      <div className="right">
      <h2>{book.title}</h2>
      <p>Here is some random information about the book. It is an excellent read and has received great reviews. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil pariatur adipisci amet repellat nesciunt necessitatibus quis libero sequi dolor eligendi, exercitationem tenetur alias tempore fugiat! Excepturi labore repellendus accusantium voluptatibus nam officiis. Laudantium, officia est maiores nostrum quam quibusdam quod assumenda, quos rem eos odio, pariatur corporis esse ad numquam dolorum aliquam illum id ullam hic! Nulla architecto maiores corrupti, ab sequi libero sed. Voluptatem ut rerum earum, repudiandae officia dolores odio. Quidem voluptatum, excepturi voluptatibus reprehenderit minima aliquid nostrum ipsa suscipit nesciunt quae autem praesentium doloribus veniam corrupti perspiciatis mollitia nisi molestiae quam natus, dolor animi illum quia. Odit illo sit officia aperiam reprehenderit non, nesciunt excepturi at nulla, beatae quo ex provident libero omnis rerum nemo. Itaque inciatis excepturi doloremque, corrupti quas est iure ipsa eius magni quae quasi fuga! Tenetur magni veritatis dolore officiis. Non explicabo nihil, provident culpa ipsam eligendi quia unde suscipit debitis molestiae, facilis ut minima delectus consectetur aliquam excepturi architecto animi totam beatae incidunt tenetur quaerat nulla distinctio. Atque, nam rem? Quae obcaecati, corrupti molestias, odit alias qui nisi, sunt libero itaque veniam amet. Voluptatibus amet quae fugit? Aliquid quasi quod aspernatur dolorem sit est maiores similique ipsa fuga vitae ab consectetur laborum molestias placeat alias eligendi quae, voluptatibus, excepturi at corrupti voluptate voluptates dicta? Atque fuga esse necessitatibus a aliquid corrupti unde voluptates, earum ipsa recusandae provident voluptatem veniam at, et, ratione commodi amet vitae? Laborum harum veniam at tempore.</p>
        <h2>Publication details:</h2>
         <p>Published by XYZ Publications, 2024.</p>
         <h2>Terms and conditions: </h2>
         <p>Please read our terms and conditions before purchasing the book.</p>
      </div>
    </div>
  );
}
