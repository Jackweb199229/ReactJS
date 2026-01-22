const Card = (props) => {
  return (
    <div className="h-full w-60 shrink-0 rounded-4xl overflow-hidden relative scroll-track">
      <img
        className="h-full w-full object-cover"
        src={props.img}
        alt=""
      />
      <div className="absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between ">
        <h2 className="w-10 h-10 rounded-full bg-white flex justify-center items-center font-semibold text-2xl">
          {" "}
          {props.idx}  {" "}
        </h2>
        <div>
          <p className="text-white font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est modi
            iusto blanditiis sed excepturi soluta ut quia beatae incidunt
            delectus ullam pariatur esse dolorem ipsam,
          </p>
          <div className="mt-4 flex items-center relative">
            <button className="w-30 bg-blue-600 p-2  text-white rounded-full font-semibold ">
              {props.tag}
            </button>
            <span className=" spandiv absolute right-12 w-8 h-4 bg-blue-600 rounded-full overflow-hidden"></span>
            <button className="absolute right-6 w-12 bg-blue-600 p-2 text-white rounded-full font-bold text-2xl">
              {" "}
              <i class="ri-arrow-right-line"></i>{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
