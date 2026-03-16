import Card from './Card'


const Tours = ({tours, removeTour}) => {

  return (
    <div className='w-full h-full flex item-center justify-center flex-col'>
      <div className=' flex mt-2 item-center justify-center'>
        <h1 className='text-center text-2xl  font-bold border-4 border-dotted border-blue-500 inline-block px-2 py-2'>Tours with Love </h1>
      </div>

      <div className='max-w-6xl mx-auto mt-6 grid gap-6 p-4 
grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {
            tours.map((tour)=>{
              return <Card  {...tour} removeTour={removeTour} />
            })
          }
      </div>

    </div>
  )
}

export default Tours
