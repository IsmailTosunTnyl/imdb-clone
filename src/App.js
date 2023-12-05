import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import Navigation from './Navigation/Navgaiton';

function App() {


  return (
    <div style={{width:"80vw", margin:"auto"  ,backgroundColor:"black"}}>
      {/*  Navbar */}
      <Navigation/>

      {/*  Routes */}
      <Routes>
        <Route path="/home" element={<HomePage />} />
      </Routes>
  </div>
  );
}

export default App;
