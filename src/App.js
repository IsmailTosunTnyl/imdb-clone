import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import Navigation from './Navigation/Navgaiton';
import SignInUp from './SignInUp/SignInUp';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';

function App() {


  return (
    <div style={{backgroundColor:"black"}}>
      <div style={{width:"80vw", margin:"auto"  ,backgroundColor:"black",height:"100%"}}>
          {/*  Navbar */}
          {/*  Routes */}

          <Routes>
            <Route path="/home" element={<div><Navigation/><HomePage /></div>} />
          </Routes>

          <Routes>
            <Route path="/signinup" element={<div><Navigation/><SignInUp /></div>} />
          </Routes>
          
      </div>
      <div>
          <Routes>
            <Route path="/signup" element={<SignUp />} />
          </Routes>
          <Routes>
            <Route path="/signin" element={<SignIn />} />
          </Routes>
      </div>
    </div>
  );
}

export default App;
