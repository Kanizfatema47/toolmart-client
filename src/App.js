import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/HomePage/Home';
import Footer from './Pages/Shared/Footer';
import SignIn from './Pages/Register/SignIn';
import SignUp from './Pages/Register/SignUp';
import RequireAuth from './Pages/Register/RequireAuth';
import Purchase from './Pages/Purchase/Purchase';
import Blogs from './Pages/Blogs/Blogs';
import Reviews from './Pages/Dashboard/Reviews';
import MyProfile from './Pages/Dashboard/MyProfile';
import Order from './Pages/Dashboard/Order';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/blogs' element={<Blogs></Blogs>} />
        <Route path='signin' element={<SignIn></SignIn>} />
        <Route path='signup' element={<SignUp></SignUp>} />
        <Route path='/purchase/:id' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        } />
        <Route
        path='dashboard' element={<Order></Order>}>
          <Route path='review' element={<Reviews></Reviews>}></Route>
          <Route path='profile' element={<MyProfile></MyProfile>}></Route>
          
        </Route>


      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
