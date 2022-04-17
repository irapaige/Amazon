import Navbar from './Components/navbar/Navbar';
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import CartScreen from "./screens/CartScreen"
import ProductScreen from "./screens/ProductScreen";
import HomeScreen from "./screens/HomeScreen";
import Footer from "./Components/Footer";
import {BrowserRouter,Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <ToastContainer/>
    <div className="App">

<Navbar/>
<Route path="/" component={HomeScreen } exact></Route>
<Route path= "/product/:id" component={ProductScreen}></Route>
<Route path="/cart" component={CartScreen}></Route>
<Footer/>


      
          </div>
      </BrowserRouter>    
  );
}

export default App;
