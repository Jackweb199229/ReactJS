import {useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import Card from './Component/Card'
import Pagination from './Component/Pagination';

function App() {

  // to get data
  const [userData, setUserData] = useState([]);

  // to pagination
  const [index, setIndex] = useState(1);

  const getData = async ()=>{
  const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`);

  setUserData(response.data)
  
  console.log(userData);
    
  }

  useEffect(function(){
    getData();
  
  },[index]);

  let printData = "Loading...";

  if(userData.length > 0){
    printData = userData.map(function(elem){
      return <div>
        <Card elem = {elem}/>
      </div>
    });
  }

  return (
  <div className="bg-black min-h-screen overflow-auto text-white">
    <h2 className='text-2xl py-2 my-1.5 text-center underline'>Gallery Project </h2>
    <div className='flex min-h-screen p-1.5 flex-wrap gap-4 items-center justify-center'>
      {printData}
    </div>
    
    <Pagination index={index} setIndex={setIndex} setUserData={setUserData}  />
   
  </div>

)
}

export default App
