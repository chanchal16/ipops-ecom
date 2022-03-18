import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Products from "./pages/Products";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <main>
        <Products/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
