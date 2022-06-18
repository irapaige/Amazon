import Navbar from './Components/navbar/Navbar';
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import CartScreen from "./screens/CartScreen"
import ProductScreen from "./screens/ProductScreen";
import HomeScreen from "./screens/HomeScreen";
import Footer from "./Components/Footer";
import {QtyContext} from './Components/QtyContext';
import {Routes,BrowserRouter,Route } from 'react-router-dom';
import {useState} from "react";

function App() {
const [qty,setQty]= useState(0)


  return (
    <BrowserRouter>
        <ToastContainer/>
    <div className="App">
        <QtyContext.Provider value={{qty,setQty}} >
<Navbar/>
            <Routes>
<Route path="/" element={<HomeScreen/> } exact></Route>
<Route path= "/product/:id" element={<ProductScreen/>}></Route>
<Route path="/cart/:id" element={<CartScreen/>}></Route>
            </Routes>
        </QtyContext.Provider>
<Footer/>

          </div>

</BrowserRouter>
  );
}

export default App;
