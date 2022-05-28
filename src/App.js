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
import ErrorPage from './Pages/Shared/ErrorPage';
import Portfolio from './Pages/Porfolio/Portfolio';
import Dashboard from './Pages/Dashboard/Dashboard';
import MakeAdmin from './Pages/MakeAdmin/MakeAdmin';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ManageOrders from './Pages/MakeAdmin/ManageOrders';
import ManageProducts from './Pages/MakeAdmin/ManageProducts';
import AddProducts from './Pages/MakeAdmin/AddProducts';
import Payment from './Pages/Payment';



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
        path='dashboard' element={<Dashboard></Dashboard>}>
          <Route index element={<Order></Order>}/>
          <Route path='review' element={<Reviews></Reviews>}></Route>
          <Route path='profile' element={<MyProfile></MyProfile>}></Route>
          <Route path='admin' element={<MakeAdmin></MakeAdmin>}></Route>
          <Route path='manageorders' element={<ManageOrders></ManageOrders>}></Route>
          <Route path='manageproducts' element={<ManageProducts></ManageProducts>}></Route>
          <Route path='addproducts' element={<AddProducts></AddProducts>}></Route>
          
        </Route>
        <Route path='portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route path='payment/:id' element={<Payment></Payment>}></Route>
        
        <Route path='*' element={<ErrorPage></ErrorPage>}/>

      </Routes>
      <ToastContainer/>
      
      <Footer></Footer>

    </div>
  );
}

export default App;
