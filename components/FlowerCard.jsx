import React from 'react'
import { truncateDescription } from '@/utils/truncateDescription';
import Link from 'next/link';

const FlowerCard = ({Flower,key}) => {
  return (
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
                  <Link href={`flower-detail/${Flower.id}`} data-ripple-light="true"  className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle  text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                    Read More
                  </Link>
                </div>
              </div>
  )
}

export default FlowerCard
