import './Card.css';
import Date from './date';

function Card(props) {
  return (
    
      <div className="card">
        <h2>{props.title}</h2>
        <p> {props.description} </p>
        <Date day={props.day} month={props.month} year={props.year} />
      </div>
  );
}

export default Card;