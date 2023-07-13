import './App.css';
import LandingPage from './Components/LandingPage/LandingPage';
import SideNav from './Components/SideNav/SideNav';
// import ScrollButtonRight from './Components/ScrollButtonRight/ScrollButtonRight';

function App() {
  return (
    <div className="App">
      <SideNav />
      <LandingPage />
      {/* <ScrollButtonRight /> */}
    </div>
  );
}

export default App;
