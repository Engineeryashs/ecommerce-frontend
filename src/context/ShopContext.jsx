import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ShopContext=createContext();

export const ShopContextProvider=(props)=>{
      const [collections,setCollections]=useState([]);
      const [bestSellers,setBestSellers]=useState([]);
      const [showSearch,setShowSearch]=useState(false);
      const [search,setSearch]=useState("");
    const currency='$';
const delivery_fee=10;

const value={
    //products,
    currency,
    delivery_fee,
    collections,
    bestSellers,
    showSearch,
    search,
    setShowSearch,
    setSearch
};
useEffect(()=>{const fetchCollections=async()=>{
    try {
        const result1=await axios.get("http://localhost:3000/api/v1/products/latestCollections")
        const result2=await axios.get("http://localhost:3000/api/v1/products/bestSellers");
       /* const result3=await axios.get("http://localhost:3000/api/v1/products/getAllProducts",{
            params:{
                page:page,
                limit:limit,
                category:category,
                subcategory:subcategory,
                sort:sort
              }
        });*/
setCollections(result1.data.latestCollections);
setBestSellers(result2.data.bestSellers);
//setProducts(result3.data.products);
//console.log(result.data.latestCollections)
    } catch (error) {
        console.log(error);
    }

}
fetchCollections();
},[])
return(<ShopContext.Provider value={value}>
{props.children}
</ShopContext.Provider>)
}
