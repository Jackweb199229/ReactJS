import axios from 'axios'
import { useState } from 'react';

const Another = () => {
    const [record, setRecord] =   useState([])

    const getData = async ()=>{
        const response = await axios.get('https://picsum.photos/v2/list')
        setRecord(response.data);
        
    }

  return (
    <div>
      <button onClick={getData} className='mt-4'> get Data </button>
      
      <div>
        {record.map(function(elem, id){
            return <h3> {id} Hello  {elem.author} </h3>
        })}
      </div>
    </div>
  )
}

export default Another
