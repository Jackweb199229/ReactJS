import React from 'react'

const Pagination = () => {
  return (
     <div className="flex justify-center gap-5 items-center py-3">

            <button className="bg-amber-400 text-black text-xl px-4 py-3 rounded font-semibold cursor-pointer"
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
            <button className="bg-amber-400 text-black text-xl px-4 py-3 rounded font-semibold cursor-pointer"
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
