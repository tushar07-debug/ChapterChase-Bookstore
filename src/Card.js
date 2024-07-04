import "./Card.css";
import { useNavigate } from 'react-router-dom';

export default function Card({ book }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/book/${book.id}`);
  };

  return (
    <div className="Card" onClick={handleClick}>
      <div className="imgcontainer">
        <img src={book.url} alt={book.title} />
      </div>
    </div>
  );
}

