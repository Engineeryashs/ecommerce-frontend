import React, { useContext, useEffect, useState } from 'react'
import Text from '../components/Text'
import { ShopContext } from '../context/ShopContext'
import Card from '../components/Card';
import Pagination from '../components/pagination';
import axios from 'axios';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
const Collection = () => {

    const [limit, setLimit] = useState(20);
    const [page, setPage] = useState(1);
    const [category, setCategory] = useState([]);
    const [subcategory, setSubcategory] = useState([]);
    const [sort, setSort] = useState("");
    const {search}=useContext(ShopContext);
    const [product, setProduct] = useState([]);
    const [noofPages, setnoOfPages] = useState(1)
    const [showFilter, setShowFilter] = useState(false);
    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;

        if (checked) {
            // add value to array
            setCategory([...category, value]);
        } else {
            // remove value from array
            setCategory(category.filter((cat) => cat !== value));
        }
    };
    const handleCheckboxChange2 = (e) => {
        const { value, checked } = e.target;

        if (checked) {
            // add value to array
            setSubcategory([...subcategory, value]);
        } else {
            // remove value from array
            setSubcategory(subcategory.filter((cat) => cat !== value));
        }
    };
    const fetchApi = async () => {
        try {
            let response = await axios.get("http://localhost:3000/api/v1/products/getAllProducts", {
                params: {
                    page: page,
                    limit: limit,
                    category: category.join(","),//converts an array into the strings
                    subcategory: subcategory.join(","),
                    sort: sort,
                    search: search
                }
            });
            console.log(response.data);
            console.log(category);
            console.log("Hello World");
            setProduct(response.data.products);
            setnoOfPages(response.data.totalPage);

            console.log("hi" + noofPages)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchApi();
    }, [page, limit, category, subcategory, sort, search]);
    return (

        <div className='flex flex-col sm:flex-row gap-2 sm:gap-10 border-t pt-10 '>
           

            <div className='min-w-60'>
             <p className='my-2 flex items-center text-xl cursor-pointer gap-2'>FILTERS
          <img src="dropdown_icon.png" className={`h-3 sm:hidden ${showFilter ? 'rotate-90':''}`} onClick={()=>{
            setShowFilter(!showFilter)
          }} alt="dropdown" />
             </p>

                <div className={`border border-gray-300 py-6 pl-5 mt-6 ${showFilter?'':'hidden'} sm:block`}>
                    <p className='pb-3 text-sm font-medium text-left'>CATEGORIES</p>

                    <div className='flex flex-col gap-2 text-sm font-light'>
                        <p className='flex gap-2'>
                            <input type="checkbox" className='w-3 cursor-pointer' name="Men" id="Men" value="Men" onChange={handleCheckboxChange} />Men </p>
                        <p className='flex gap-2'>
                            <input type="checkbox" className='w-3 cursor-pointer' name="Women" id="Women" value="Women" onChange={handleCheckboxChange}
                            /> Women
                        </p>
                        <p className='flex gap-2'>
                            <input type="checkbox" className='w-3 cursor-pointer' name="Kids" id="Kids" value="Kids" onChange={handleCheckboxChange} /> Kids
                        </p>
                    </div>
                </div>
                <div className={`border border-gray-300 py-6 pl-5 mt-6 ${showFilter?'':'hidden'} sm:block`}>
                    <p className='pb-3 text-sm font-medium text-left'>TYPES</p>
                    <div className='flex flex-col gap-2 text-sm font-light'>
                        <p className='flex gap-2'>
                            <input type="checkbox" className='w-3 cursor-pointer' name="Topwear" id="Topwear" value="Topwear" onChange={handleCheckboxChange2} /> Topwear
                        </p>
                        <p className='flex gap-2'>
                            <input type="checkbox" className='w-3 cursor-pointer' name="Bottomwear" id="Bottomwear" value="Bottomwear" onChange={handleCheckboxChange2} /> Bottomwear
                        </p>
                        <p className='flex gap-2'>
                            <input type="checkbox" className='w-3 cursor-pointer' name="Winterwear" id="Winterwear" value="Winterwear" onChange={handleCheckboxChange2} /> Winterwear
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex-1'>
                <div className='flex justify-between text-base sm:text-2xl mb-4'>
                    <Text text1="ALL" text2="COLLECTIONS" />
                    <select className='text-sm border-2 border-gray-300 px-2' value={sort} onChange={(e) => {
                        setSort(e.target.value);
                    }}>
                        <option value="relevant">Sort by: Relevant</option>
                        <option value="sort_desc">Sort by: Low to High</option>
                        <option value="sort_asc">Sort by: High to Low</option>
                    </select>
                </div>

                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
                    
                    {
                        product.map(function (ele, index) {
                            return <Card key={index} title={ele.title} image={ele.images[0]} price={ele.minPrice} />
                        })
                    }
                </div>
                <div>
                    <Pagination noofPages={noofPages} page={page} setPage={setPage} />
                </div>
                <Footer />

            </div>
        </div>
    )
}

export default Collection
