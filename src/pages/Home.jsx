import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner';
import Product from '../components/Product';

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);

  // posts ke andar data hoga teri saari cheejo ka, initially empty
  const [posts, setPosts] = useState([]);

  async function fetchProductData() {
    setLoading(true);
    try{
      const res = await fetch(API_URL);
      const data = await res.json();

      console.log("Printing your data", data);

      setPosts(data);
    }
    catch(error) {
      console.log("An error has occured...");
      setPosts([]);
    }

    setLoading(false);
  }


  // data toh ek hi baari chahiye na mujhe, baar baar laane ki need hi ni
  useEffect( () => {
    fetchProductData();
  },[] )

  return (
    <div>
      {
        loading ? <Spinner></Spinner>
        
        : posts.length > 0 ? (
          <div className='min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 space-x-5 space-y-10 lg:grid-cols-4 max-w-6xl mx-auto p-2 '>
            {
              posts.map( (post) => (
              <Product key={post.id} post={post}></Product>
               ) )
            }
          </div>
        )
        
        :<div className='flex justify-center items-center'>
            <p>No data found</p> 
         </div>
      }
    </div>
  )
}

export default Home
/*
map m agr {} likha hai toh return karna padega jo bna rahe ho and agr () likha hai toh simple bss likhdo


*/