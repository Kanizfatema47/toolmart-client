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
          <Route index element={<MyProfile></MyProfile>}/>

          <Route path='order' element={
            <RequireAuth>
              <Order></Order>
            </RequireAuth>
          } />
          <Route path='review' element={
            <RequireAuth>
              <Reviews></Reviews>
            </RequireAuth>
          }></Route>
          <Route path='admin' element={
            <RequireAuth>
              <MakeAdmin></MakeAdmin>
            </RequireAuth>
          }></Route>
          <Route path='manageorders' element={
            <RequireAuth>
              <ManageOrders></ManageOrders>
            </RequireAuth>
          }></Route>
          <Route path='manageproducts' element={
            <RequireAuth>
              <ManageProducts></ManageProducts>
            </RequireAuth>
          }></Route>
          <Route path='addproducts' element={
            <RequireAuth>
              <AddProducts></AddProducts>
            </RequireAuth>
          }></Route>

        </Route>
        <Route path='portfolio' element={
          <RequireAuth>
            <Portfolio></Portfolio>
          </RequireAuth>
        }></Route>
        <Route path='payment/:id' element={
          <RequireAuth>
            <Payment></Payment>
          </RequireAuth>
        }></Route>

        <Route path='*' element={<ErrorPage></ErrorPage>} />

      </Routes>
      <ToastContainer />

      <Footer></Footer>

    </div>
  );
}

export default App;
