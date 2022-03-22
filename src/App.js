import "./App.css";
import { Routes, Route } from "react-router-dom";
import {Navbar,Footer} from "./components/components";
import {Login,Products,Signup} from "./pages/pages";
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
          <Route path="mock" element={<Mockman />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
