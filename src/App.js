import "./App.css";
import { useRoutes } from "react-router-dom";
import {Navbar,Footer,AddressForm} from "./components";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ROUTES } from "./routes";

function App() {
  const routeElements = useRoutes(ROUTES)
  return (
    <div className="App">
      <Navbar/>
      <ToastContainer autoClose={1000} theme="dark" />
      <main>
        {routeElements}
        <AddressForm/> 
      </main>
      <Footer />
    </div>
  );
}
export default App;