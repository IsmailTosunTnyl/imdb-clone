import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import Navigation from './Navigation/Navgaiton';

function App() {


  return (
    <div style={{backgroundColor:"black"}}>
      <div style={{width:"80vw", margin:"auto"  ,backgroundColor:"black",height:"100vh"}}>
          {/*  Navbar */}
          <Navigation/>

          {/*  Routes */}
          <Routes>
            <Route path="/home" element={<HomePage />} />
          </Routes>
      </div>
    </div>
  );
}

export default App;
