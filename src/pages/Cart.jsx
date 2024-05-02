import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom/dist";
import CartItem from "../components/CartItem";
import { useState } from "react";
import { useEffect } from "react";

const Cart = () => {

  const {cart} = useSelector( (state) => state ); // bss jo state hai na vo state hi dedo cart li kyuki name cart hi hai

  const [totalAmount, setTotalAmount] = useState(0); // to calculate total amount on the cart

  // useEffect( () => {
  //   setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price, 0) ); 
  // }, [cart] )
  useEffect(() => {
    console.log("Cart:", cart); // Log the entire cart array
    const totalPrice = cart.reduce((acc, curr) => {
      console.log("Item Price:", curr.price); // Log each item's price
      return acc + curr.price;
    }, 0);
    setTotalAmount(totalPrice);
  }, [cart]);
  

  // jab bhi cart m kuch change hoga koi aayega ya koi jayega toh tab hi toh m phirse re calculate karunga na that's why cart ki value jab change hogi then re calculate
  // initially acc is 0


  return (
    <div className="overflow-hidden">
      { 
        cart.length > 0 ?
        (
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center pb-6">
            <div className="w-[100%] md:w-[60%] flex flex-col p-2">
              {
                cart.map( (item,index) => {
                  return <CartItem key={item.id} item={item} itemIndex={index}></CartItem>
                })
              }
            </div>

            {/* <div className="flex flex-col p-5 gap-5 my-14  h-[100%] justify-between"> */}
            <div className="w-[100%] md:w-[40%] mt-5 flex flex-col justify-between p-2">

              <div className="flex flex-col gap-5">
                <div className="font-semibold text-xl text-green-800">YOUR CART</div>
                <div className="font-semibold text-5xl text-green-700 ">SUMMARY</div>
                <p className="text-xl">
                  <span className="text-gray-700 font-semibold text-xl">Total items: </span>
                  <span>{cart.length}</span>
                </p>
              </div>

              <div className="flex flex-col sm:mt-4">
                <div className="flex justify-between items-center">
                  <p className="text-xl font-bold">
                  <span className="text-gray-700 font-semibold">Total Amount: </span>
                  <span className="font-semibold text-xl">${totalAmount}</span> 
                  </p>
                </div>

                <button className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl">Checkout Now</button>
              </div>

            </div>

        </div>)

        : (<div className="w-screen h-screen flex flex-col justify-center items-center overflow-hidden">
          <h1 className="text-gray-700 font-semibold text-xl mb-2">Your cart is empty!</h1>
          <NavLink to={"/"}>
            <button className="bg-green-600 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 tracking-wider">Shop Now</button>
          </NavLink>
        </div>)
      }
    </div>
  );
};

export default Cart;
/*
Ya to cart empty hogi ya toh cart non empty hogi aur slices ke andar meine likha hai initial state ki vo initially empty hai toh use selector ka use karke hum usko access kar sakte hai


*/
