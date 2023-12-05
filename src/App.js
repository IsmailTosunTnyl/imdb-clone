import Button from 'react-bootstrap/Button'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage';

function App() {
  return (
    <>
      {/*  Navbar */}







      {/*  Routes */}
      <Routes>
        <Route path="/home" element={<HomePage />} />
      </Routes>
  </>
  );
}

export default App;
