import React from 'react'

const Card = (props) => {
  return (
    <div>
      <a href={props.elem.url} target="_blank">
        <div className="w-60 h-60 bg-white overflow-hidden rounded-xl">
        <img className="w-full h-full object-cover " src={props.elem.download_url} alt="" />
        </div>
        <div className='text-center font-bold text-2xl'>
        {props.elem.author}
        </div>
      </a>
    </div>
  )
}

export default Card
