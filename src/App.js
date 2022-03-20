import "./App.css";
import { Routes, Route } from "react-router-dom";
import {Navbar,Footer} from "./components/components";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <main>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="signup" element={<Signup/> } />
          <Route path="products" element={<Products/>}/>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
