import "./App.css";
import { Routes, Route } from "react-router-dom";
import {Navbar,Footer} from "./components";
import {Login,Products,Signup,Wishlist,Cart,Home} from "./pages/main";
import Mockman from 'mockman-js'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="signup" element={<Signup/> } />
          <Route path="products" element={<Products/>}/>
          <Route path="wishlist" element={<Wishlist/>}/>
          <Route path="cart" element={<Cart/>}/> 
          <Route path="mock" element={<Mockman />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
