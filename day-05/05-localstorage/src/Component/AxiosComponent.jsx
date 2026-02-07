import axios from 'axios'

const AxiosComponent = () => {

    const getData = async () =>{
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
        console.log(response.data);
        
    }

  return (
    <div className='mt-4'>
      <button onClick={getData}> Get Data By Axios </button>
    </div>
  )
}

export default AxiosComponent
