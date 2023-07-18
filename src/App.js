import './App.css';
import Category from './Components/Category/Category';
import categories from './categories.json';

function App() {
  return (
    <div className="App">
      {
        categories.map(category => <Category category={category} key={Math.random(1) * 10000000}/>)
      }
    </div>
  );
}

export default App;
