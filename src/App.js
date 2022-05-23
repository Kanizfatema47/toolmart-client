import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/HomePage/Home';
import Footer from './Pages/Shared/Footer';
import SignIn from './Pages/Register/SignIn';
import SignUp from './Pages/Register/SignUp';
import RequireAuth from './Pages/Register/RequireAuth';
import Purchase from './Pages/Purchase/Purchase';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='signin' element={<SignIn></SignIn>} />
        <Route path='signup' element={<SignUp></SignUp>} />
        <Route path='/manageitems/:id' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }/>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
