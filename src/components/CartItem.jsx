import { MdDelete } from "react-icons/md";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import {add, remove} from '../redux/Slices/CartSlice'


const CartItem = ({item, itemIndex}) => {

  const {cart} = useSelector( (state) => state ); // bss jo state hai na vo state hi dedo cart li kyuki name cart hi hai

  const dispatch = useDispatch();
  // dispatch is a function provided by Redux.
  // It’s used to send actions to the Redux store.
  // When you want to update the global state (e.g., add an item to the cart), you create an action.
  // Then you dispatch that action using the dispatch function.
  // Redux takes care of updating the state based on the action.

  function removeFromCart() {
    dispatch(remove(item.id));
    toast.error("Item removed from cart!");
  }


  return (
    <div className="flex items-center p-2 md:p-5 justify-between border-b-2 border-slate-500  mt-2 mb-2 md:mx-5 ">

        <div className='w-[30%]'>
          <img className="object-cover" src={item.image}></img>
        </div>

        <div className="md:ml-10 p-2 self-start space-y-5 w-[100%] md:w-[70%]">
          <h1 className="text-xl text-slate-700 font-semibold"> {item.title} </h1>

          <p className="text-base text-slate-700 font-medium">{item.description.split(" ").slice(0,20).join(" ") + "..."}</p>

          <div className="flex justify-between items-center">
            <span className="text-green-600 text-lg font-bold ">${item.price}</span>
            <div onClick={removeFromCart}>

              <div className=" bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3">
                <MdDelete className="text-red-800 group-hover:text-white h-[1em] w-[1em]"></MdDelete>
              </div>

            </div>
          </div>
        </div>   

      

    </div>
  )
};

export default CartItem;
/*

 left m image and right m info 
*/
