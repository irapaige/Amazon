
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import CartScreen from "./screens/CartScreen"
import ProductScreen from "./screens/ProductScreen";
import SigninScreen from "./screens/SigninScreen";
import HomeScreen from "./screens/HomeScreen";
import Footer from "./Components/Footer";
import {QtyContext} from './Components/QtyContext';
import {Routes,BrowserRouter,Route } from 'react-router-dom';
import {useState} from "react";
import { useContext } from 'react';
import { Store } from './Store';

function App() {
const [qty,setQty]= useState(0)


  return (
    <BrowserRouter>
        <ToastContainer/>
    <div className="App">
        <QtyContext.Provider value={{qty,setQty}} >

            <Routes>
<Route path="/" element={<HomeScreen/> } exact></Route>
<Route path= "/product/:id" element={<ProductScreen/>}></Route>
<Route path="/cart/:id" element={<CartScreen/>}></Route>
                <Route path="/signin" element={<SigninScreen />} />

            </Routes>
        </QtyContext.Provider>
<Footer/>

          </div>

</BrowserRouter>
  );
}

export default App;
