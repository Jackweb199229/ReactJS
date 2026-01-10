
import "./Date.css";

function date(props) {
  return (
    <div className="date-box">
      <span className="day">{props.day}</span> 
      <span className="month">{props.month}</span>
      <span className="year">{props.year}</span>
    </div>
  );
}

export default date;
