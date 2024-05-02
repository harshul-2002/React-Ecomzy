import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import {add, remove} from '../redux/Slices/CartSlice'

const Product = ({post}) => {

  console.log("I am inside products");

  // const [selected, setSelected] = useState(false);
 
  const {cart} = useSelector( (state) => state ); // bss jo state hai na vo state hi dedo cart li kyuki name cart hi hai
  const dispatch = useDispatch();

  // parameter dene ki need ni hai kyuki by default globally toh tunne props leliya hai post toh aise hi sahi hai
  function removeFromCart() {
    dispatch(remove(post.id));
    toast.error("Item removed from cart!");
  }
  // bss id pass kardo bss vo uss id ko hta dega , poora object pass karne ki need hi ni remove karne m, add karne m toh chahiye poora object kyuki baad m toh usko show bhi karna padega na

  function addToCart() {
    dispatch(add(post));
    toast.success("Item added to cart!");
  }
  

  return (
    <div className='flex flex-col items-center justify-between hover:scale-110  transition duration-300 ease-in shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] gap-3 p-4 mt-10 ml-5 rounded-xl group'>
      <p className='tex-gray-700 font-semibold text-lg text-left truncate w-40 mt-1 '>{post.title}</p>

      <p className='w-40 text-gray-400 font-normal text-[10px] text-left'>{post.description.split(" ").slice(0,10).join(" ") + "..."}</p>

      <div className='h-[180px]'>
        <img className='h-full w-full ' src={post.image}></img>
      </div>

      <div className='flex justify-between gap-12 items-center w-full mt-5'>
        <span className='text-green-600 font-semibold'>${post.price}</span>
        {
          cart.some( (p) => p.id == post.id) 
          ? (<button className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase group-hover:bg-gray-700 group-hover:text-white transition duration-300 ease-in' onClick={removeFromCart}>Remove Item</button>) 

          : (<button className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase group-hover:bg-gray-700 group-hover:text-white transition duration-300 ease-in' onClick={addToCart}>Add to Cart</button>)
        }
      </div>
    </div>
  )
}

export default Product
/*
Agr tumahri cart m vo item pehle se pada hai toh remove ka button dikhao and agr ni hai toh add ka button dikhao toh mujhe cart chahiye hogi na toh pehle cart lo use Selector se

.some(): This is a method available on arrays in JavaScript. It checks if at least one element in the array satisfies the provided testing function.
(p) => p.id === post.id: This is an arrow function used as the testing function for .some(). It takes a single parameter p, which represents each element in the cart array. Inside the function, it checks if the id property of the current element (p.id) is strictly equal (===) to the id property of the post object (post.id).


ab ye jo function call hai na add / remove wali ye meine bna rakha hai redux m add remove naam se bss vo hi call kardo 
dispatch se vo saare functionality aajeygi and then bss uss function ke liye dispatch ke vo fuctionality ko call kardo bss
*/