import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Tours from './Component/Tours';

function App() {
  const [tours, setTours] = useState([])

  const getData = async ()=>{
  const response = await axios.get(`https://www.course-api.com/react-tours-project`);

  setTours(response.data)
  
  console.log(response.data);
    
  };

  useEffect( function(){
    getData();
  } , [] );

  // To remove card tours 
  function removeTour(id){
      const newTours = tours.filter((tour)=>{
        return tour.id !== id;
  });
  setTours(newTours);
  };

  // to refresh card / retrieve card
  if(tours.length === 0){
    return (
      <div className='flex items-center flex-col '>
        <h2 className='text-center'>No Tours Left</h2>
        <button className='bg-green-500 text-white px-3 py-2 rounded'
          onClick={getData}
        >
        Refresh
         </button>
      </div>
    )
  }


  return (
    <div>
      <Tours tours={tours} key={tours.id} removeTour={removeTour} />
    </div>
  )
}

export default App
