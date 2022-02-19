import Navbar from './Components/navbar/Navbar';
import DetailsScreen from "./screens/DetailsScreen";
import HomeScreen from "./screens/HomeScreen";
import Footer from "./Components/Footer";
import {BrowserRouter,Route,Switch,Redirect } from 'react-router-dom';
import cartScreen from "./screens/cartScreen";
import QtyContext, {QtyProvider} from "./Components/context/QtyContext";
import NotFound from "./screens/NotFound";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <BrowserRouter>
        <ToastContainer/>
    <div className="App">

<Navbar/>
        <Switch>
<Route path="/"  exact component={HomeScreen }></Route>
            <QtyProvider>
<Route path= "/product/:id" component={DetailsScreen}></Route>
  <Route path="/cart:id?" component={cartScreen}></Route>
            </QtyProvider>
        <Route path='/Notfound' component={NotFound}></Route>
        <Redirect to = "/Notfound/"></Redirect>
    </Switch>
<footer> All rights reserve </footer>


      
          </div>
      </BrowserRouter>    
  );
}

export default App;
