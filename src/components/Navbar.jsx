import React from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom/dist'



const Navbar = () => {


  // vo jo cart ke upr aarha hai na 1 2 kitne items hai vo 

  const {cart} = useSelector((state) => (state));


  return (
    <nav className='flex flex-row justify-between items-center h-20 max-w-6xl mx-auto text-white '>
      <NavLink to="/">
        <div className='ml-5 '>
         {/* <img src='../ecomzy.png' className='h-14'></img> */}
         <span className="hover:text-green-500 transition duration-200">Home</span> 
        </div>
      </NavLink>

      <div className='flex items-center font-medium text-slate-100 mr-5 space-x-6'>
        {/* <NavLink to="/"> <span className="hover:text-green-500 transition duration-200">Home</span> </NavLink> */}

        <NavLink to="/cart">
         <div className='relative'>
          <FaShoppingCart className='text-2xl hover:text-green-500 transition duration-200'></FaShoppingCart>
          {/* <FaShoppingCart size="24"></FaShoppingCart> */}
          
          { 
            cart.length > 0 && 
            <span className='absolute -top-2 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white'>{cart.length}</span>
          }  
          
         </div>
        </NavLink>
      </div>




    </nav>
  )
}

export default Navbar
/*
npm i react-icons  install it
cart icon and site logo icon and home text  m bhi click karke hum ek page m jate hai toh navLink

The code snippet you provided is using Redux (a state management library) in a React application.
It uses the useSelector hook to access a specific piece of the global application state (stored in the Redux store).
Specifically, it extracts the cart property from the state object.
So, the cart variable now holds the value of the shopping cart data from the application state.
*/