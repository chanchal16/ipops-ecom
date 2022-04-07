import "./App.css";
import { Routes, Route } from "react-router-dom";
import {Navbar,Footer} from "./components/main-component";
import {Login,Products,Signup,Wishlist,Cart,Home,PageNotFound} from "./pages/main";
import Mockman from 'mockman-js';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ToastContainer autoClose={1000} theme="dark" />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="signup" element={<Signup/> } />
          <Route path="products" element={<Products/>}/>
          <Route path="wishlist" element={<Wishlist/>}/>
          <Route path="cart" element={<Cart/>}/> 
          <Route path="*" element={<PageNotFound/>}/>
          <Route path="mock" element={<Mockman />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
