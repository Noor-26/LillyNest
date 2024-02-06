'use client'
import { fetchData } from '@/utils/fetchData';
import React, { useEffect, useState } from 'react'
import FlowerCard from './FlowerCard';

const FlowersContainer = () => {
    const [apiData, setApiData] = useState({
        loading: true,
        data: null,
        error: null,
      });
    
      useEffect(() => {
        const fetchDataAsync = async () => {
          const result = await fetchData('https://papri-dotcom.onrender.com/flowers/flower/'); // Replace with your API endpoint
    
          setApiData(result);
        };
    
        fetchDataAsync();
      }, []);
    
    
  return (
    <section className="py-20">
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="space-y-5 header_line sm:text-center ">
            <h1 className="text-3xl font-bold banner_text  text-gray-800 sm:text-7xl">Flowers For You</h1>
           
         
        </div>
        <ul className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3">
            {
               apiData?.data?.map((Flower, key) => (
               <FlowerCard Flower={Flower} key={key}/>
                ))
            }
        </ul>
    </div>
</section>
  )
}

export default FlowersContainer
