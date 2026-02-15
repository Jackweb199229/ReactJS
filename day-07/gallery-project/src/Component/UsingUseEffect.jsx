import { useEffect, useState } from "react"
import axios from "axios";
import Card from './Card';
import Pagination from "./Pagination";


const UsingUseEffect = () => {
    const [userData, setUserData] = useState([]);
    const [index, setIndex] = useState(1);

const getData = async ()=>{
const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`);
setUserData(response.data)
}

useEffect(function(){
    getData();
},[index])



let printUserData = <h3 className=" text-gray-300 text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">Loading...</h3>
if(userData.length > 0){
  printUserData = userData.map(function(elem, idx){

    return <div key={idx}>
      <Card elem = {elem} />
    </div>
  });
}


  return (
    <div className="bg-black h-screen overflow-auto text-white ">
        <div className="flex flex-wrap gap-4 items-center justify-center">
            {printUserData}
        </div>

       <Pagination/>
    </div>
  )
}

export default UsingUseEffect
