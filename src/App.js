import './App.css';
import Category from './Components/Category/Category';
import SideNav from './Components/SideNav/SideNav';
// import ScrollButtonRight from './Components/ScrollButtonRight/ScrollButtonRight';

function App() {
  return (
    <div className="App">
      <SideNav />
      <Category />
      <Category />
      {/* <ScrollButtonRight /> */}
    </div>
  );
}

export default App;
