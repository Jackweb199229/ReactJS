import "./Card.css";

function Card(props) {
  return (
    <div className="Card">
      <div>
        <div className="top">
          <img src={props.brandLogo} alt="company logo" />

          <button>
            Save
            <span className="icon material-symbols-outlined">
              bookmark
            </span>{" "}
          </button>
        </div>

        <div className="center">
          <h3>
            {props.companyName} <span>{props.datePosted} </span>
          </h3>
          <h2>Senior UI/UX Designer </h2>

          <div className="tag">
            <h4> {props.tag1} </h4>
            <h4>{props.tag2} </h4>
          </div>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h3>{props.pay} </h3>
          <p> {props.location} </p>
        </div>
        <button> Apply Now </button>
      </div>
    </div>
  );
}

export default Card;
