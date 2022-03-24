import "./App.css";
import { Routes, Route } from "react-router-dom";
import {Navbar,Footer} from "./components/main-component";
import {Login,Products,Signup,Wishlist,Cart} from "./pages/main";
import Mockman from 'mockman-js'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <main>
        <Routes>
          <Route path="/" element={<Login />} />
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
