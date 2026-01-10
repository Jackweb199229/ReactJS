
import './App.css';
import Card from './Component/Card';

let carddetails = [
  {
    title: "Card 1",
    description: "This is the first card.",
    day: "10",
    month: "Feb",
    year: "2024"
  },
  {
    title: "Card 2",
    description: "This is the second card.",
    day: "20",
    month: "Mar",
    year: "2024"
  },
  {
    title: "Card 3",
    description: "This is the third card.",
    day: "30",
    month: "Apr",
    year: "2024"
  },
  {
    title: "Card 4",
    description: "This is the fourth card.",
    day: "05",
    month: "May",
    year: "2024"
  }
];


function App() {
  return (
    <div className="App">
     <h1>Welcome to My First React App</h1>
     <div className="card-wrapper">
        <Card title={carddetails[0].title} description={carddetails[0].description} day={carddetails[0].day} month={carddetails[0].month} year={carddetails[0].year} />
       
        <Card title={carddetails[1].title} description={carddetails[1].description} day={carddetails[1].day} month={carddetails[1].month} year={carddetails[1].year} />
        
        <Card title={carddetails[2].title} description={carddetails[2].description} day={carddetails[2].day} month={carddetails[2].month} year={carddetails[2].year} /> 
       
        <Card title={carddetails[3].title} description={carddetails[3].description} day={carddetails[3].day} month={carddetails[3].month} year={carddetails[3].year} />
      </div>
    </div>
  );
}

export default App;
