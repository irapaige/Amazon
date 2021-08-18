import Navbar from './Components/navbar/Navbar';
import ProductScreen from "./screens/ProductScreen";
import HomeScreen from "./screens/HomeScreen";
import Footer from "./Components/Footer";
import {BrowserRouter,Route } from 'react-router-dom';

function App() {
  return (

    <div className="App">

<Navbar/>
        <BrowserRouter>
            <Route path="/product/:id" component={ProductScreen}></Route>
            <Route path="/" component={HomeScreen} exact></Route>
        </BrowserRouter>
        <Footer/>


      
          </div>

  );
}

export default App;
