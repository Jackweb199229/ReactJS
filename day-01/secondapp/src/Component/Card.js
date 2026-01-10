import "./Card.css";

function Card() {
  return (
    <div className="Card">
      <div>
        <div className="top">
          <img
            src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTZe2_cwIfo0yLvg5c9kvfNH7QhekWrjSuSA&s "
            alt=""
          />

          <button>
            {" "}
            Save{" "}
            <span className="icon material-symbols-outlined">
              bookmark
            </span>{" "}
          </button>
        </div>

        <div className="center">
          <h3>
            Amazon <span>5 days ago </span>
          </h3>
          <h2>Senior UI/UX Designer </h2>

          <div className="tag">
            <h4> Part Time </h4>
            <h4>Senior Level </h4>
          </div>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h3>$120/hr </h3>
          <p> Mumbai, India </p>
        </div>
        <button> Apply Now </button>
      </div>
    </div>
  );
}

export default Card;
