import React, { useState } from 'react'

const Card = (props) => {

    const [readmore, setReadMore] = useState(false);

    function readmoreHandler(){
        setReadMore(!readmore);
    }

    const description = readmore ? props.info : `${props.info.substring(0,200)}...  `;


  return (
    <div className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 '>
      <img className='w-full h-[200px] object-cover' src={props.image} />

      <div className='tour-info'>
        <div className="tour-detail">
            <h4 className='font-bold px-1 py-1 text-green-700'> {props.price} </h4>
            <h4 className='font-bold text-sm px-1'> {props.name} </h4>
        </div>

        <div className="px-1 text-sm cursor-pointer">
            { description}
            <span className='text-blue-900 ' onClick={readmoreHandler}>
                {readmore ? ` show less ` : ` read more`}
            </span>
        </div>
      </div>

      <div className='flex justify-center items-center py-2 font-bold active:scale-95'>
        <button onClick={function(){
            props.removeTour(props.id)
        }}
          className="bg-red-500 text-white px-3 py-1 rounded"> 
          Not Interested </button>
      </div>

    </div>
  )
}

export default Card
