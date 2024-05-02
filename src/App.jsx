import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import { Route } from "react-router-dom";
import Home from "./pages/Home"
import Cart from "./pages/Cart"

const App = () => {
  return (
  <div>
      <div className="bg-slate-900">
        <Navbar></Navbar>
      </div>

      <Routes>
        <Route path="/" element={<Home></Home>} ></Route> 
        <Route path="/cart" element={<Cart></Cart>} ></Route> 
      </Routes>
  </div>)
};

export default App;

/*
Navbar rakhna chahta hu and uske neeche na routes aayege ki home ka route and cart ak route. 
home wale route m saara data show hoga aapka and cart m cart wala data

*/
