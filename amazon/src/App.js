import Navbar from './Components/navbar/Navbar';
import ProductScreen from "./screens/ProductScreen";
import HomeScreen from "./screens/HomeScreen";
import Footer from "./Components/Footer";
import {BrowserRouter,Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">

<Navbar/>
<Route path="/" component={HomeScreen } exact></Route>
<Route path= "/product/:id" component={ProductScreen}></Route>

<Footer/>


      
          </div>
      </BrowserRouter>    
  );
}

export default App;
