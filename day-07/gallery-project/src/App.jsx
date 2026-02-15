import axios from "axios";
import { useState } from "react";
import UsingUseEffect from "./Component/UsingUseEffect";
import Card from './Component/Card'

const App = () => {

  const [userData, setUserData] = useState([]);


const getData = async ()=>{
  const response = await axios.get("https://picsum.photos/v2/list?page=2&limit=10");
  setUserData(response.data)
}

let printUserData = 'No Available User';

if(userData.length > 0){
  printUserData = userData.map(function(elem, idx){

    return <div key={idx} >
     <Card elem = {elem}/>
    </div>
  });
}

  return (
    <div className="bg-black h-screen overflow-auto text-white">
      <button onClick={getData} className="bg-green-600 text-2xl px-5 py-2 rounded text-white m-2   active:scale-95 " >
       Get Data
      </button>
    <div className="flex flex-wrap gap-4 items-center justify-center">
        {printUserData}
    </div>

    <hr />

    <div className="py-3">
      <UsingUseEffect/>
    </div>
    </div>



  );
};

export default App;
