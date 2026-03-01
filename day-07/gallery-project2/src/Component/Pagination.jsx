import React from 'react'

const Pagination = ({ index, setIndex, setUserData }) => {
  return (
     <div className="flex justify-center gap-5 items-center py-3">

            <button disabled={index === 1}
             className={ `bg-amber-400 text-black text-xl px-4 py-3 rounded font-semibold ${index==1 ? "opacity-50 cursor-not-allowed" : " cursor-pointer active:scale-95" }` }
             onClick={ ()=>{
              if(index > 1){
                setUserData([])
                setIndex(index-1)

              }
            }}
            > 
                Prev 
            </button>
            <h3 className="text-2xl font-semibold"> Page {index} </h3>

            <button disabled = {index == 20}
             className={`bg-amber-400 text-black text-xl px-4 py-3 rounded font-semibold ${index == 20 ? "opacity-50 cursor-not-allowed" : "cursor-pointer active:scale-95"}`}
            onClick={()=>{
                setUserData([])
                setIndex(index+1)
            }}
            > 
                Next 
            </button>
        </div>
  )
}

export default Pagination
