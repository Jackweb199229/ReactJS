
import Navbar from './Navbar.jsx';
import Page1Content from './Page1Content.jsx';

const Section1 = (props) => {
  console.log(props.users)
  return (
    <div className="h-screen w-full ">
       <Navbar />
       <Page1Content  users={props.users}/>
    </div>
  )
}

export default Section1
