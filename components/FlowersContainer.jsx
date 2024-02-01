'use client'
import { fetchData } from '@/utils/fetchData';
import { truncateDescription } from '@/utils/truncateDescription';
import React, { useEffect, useState } from 'react'

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
    
    console.log(apiData)
  return (
    <section className="py-20">
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="space-y-5 sm:text-center ">
            <h1 className="text-3xl font-bold banner_text header_line  sm:text-7xl">Flowers For You</h1>
           
         
        </div>
        <ul className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3">
            {
               apiData?.data?.map((Flower, key) => (
                <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md" key={key}>
                <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl  bg-clip-border  shadow-lg shadow-blue-gray-500/40 ">
                <img src={Flower?.image} loading="lazy" alt={Flower?.title} className="w-full " />
                </div>
                <div className="p-6">
                  <h5 className="mb-2 block text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  {Flower?.title}
                  </h5>
                  <p className="block  text-base font-semibold leading-relaxed antialiased  text-[#ed143d]"> 
                  ${Flower.price}
                  </p>
                  <p className="block font-sans text-sm font-medium leading-relaxed text-inherit antialiased">
                  {truncateDescription(Flower?.descriptions, 15)}...
                  </p>
                </div>
                <div className="p-6 pt-0">
                  <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle  text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                    Read More
                  </button>
                </div>
              </div>
                ))
            }
        </ul>
    </div>
</section>
  )
}

export default FlowersContainer
