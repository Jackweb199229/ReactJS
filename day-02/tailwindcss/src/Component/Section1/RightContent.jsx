import React from "react";
import Card from "./Card.jsx";
const RightContent = (props) => {
  return (
    <div id="right" className="h-full w-2/3 p-4 flex flex-nowrap gap-5 overflow-x-auto">
      {props.users.map( function(data,index){
        console.log(data.img)
        return <Card img={data.img} idx={index+1} tag={data.tag}/>
      })}
    </div>
  );
};

export default RightContent;
