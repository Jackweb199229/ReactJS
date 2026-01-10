import './Card.css';
import Date from './date';

function Card() {
  return (
    
      <div className="card">
        <h2>My Card</h2>
        <p>
        This is a simple React card component. <br />
        It is created to understand how components work in React. <br />
        This card also includes a separate date component for better structure.
      </p>

        <Date day="15" month="Jan" year="2026" />
      </div>
  );
}

export default Card;