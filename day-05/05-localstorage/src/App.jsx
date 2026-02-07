
import './App.css'
import Another from './Component/Another';
import AxiosComponent from './Component/AxiosComponent';
import UseEffect from './Component/UseEffect';

function App() {
  // localStorage.setItem("Name", "Hello")
  // const n = localStorage.getItem("Name")
  // console.log(n)

  // const user = {
  //   userName : "Sam",
  //   age : 20,
  //   city : "bihar"
  // }

  // console.log(user);
  
  // localStorage.setItem("user", JSON.stringify( user))
  // const userDetails = localStorage.getItem("user");
  // console.log(JSON.parse(userDetails))

  async function getData(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await response.json()
    console.log(data);
    
  }
  

  return (
    <div className="app">
       <button onClick={getData}> Get Data </button>
       <AxiosComponent/>
       <Another/>
       <br />
       <UseEffect/>
    </div>
  )
}

export default App
