
import './App.css';
import Card from './Component/Card';



function App() {
  return (
    <div className="App">
     <h1>Welcome to My First React App</h1>
     <div className="card-wrapper">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
