'use client'

import FlowerDetails from "@/components/FlowerDetails";
import FlowerReview from "@/components/FlowerReview";
import { useEffect, useState } from "react";

// import { useRouter } from 'next/navigation';

const Page = ({params : {flowerId}}) => {
const [FlowerInfo, setFlowerInfo] = useState({})
const [FlowerReviews, setFlowerReviews] = useState([])

useEffect(() => {
getparams()
}, [])

const getparams = () => {
 

  fetch(`https://papri-dotcom.onrender.com/flowers/flower/`)
      .then((res) => {
          if (!res.ok) {
              throw new Error(`Request failed with status: ${res.status}`);
          }

          return res.json();
      })
      .then((flowers) => {
          // Filter the flowers array based on the flowerId
          const selectedFlower = flowers.find(flower => flower.id.toString() === flowerId);

          

          if (selectedFlower) {
              // Log the selected flower data to the console for verification
              // console.log('Selected Flower:', selectedFlower);
            setFlowerInfo(selectedFlower);
              // Now you can use the selectedFlower data as needed in your code
          } else {
              console.log(`Flower with ID ${flowerId} not found`);
          }
      })
      .catch((error) => {
          console.error('Error fetching flower data:', error);
      });

      fetch(`https://papri-dotcom.onrender.com/flowers/review/`)
          .then((res) => res.json())
          .then((reviews) => {
           const   selectedreview = reviews.filter(reviews => reviews.flower.toString() === flowerId);

              if (selectedreview) {
                  // Log the selected flower data to the console for verification
                  // console.log('Selected Flower:', selectedreview);
                  console.log(reviews);
                  setFlowerReviews(reviews)
                  // Now you can use the selectedFlower data as needed in your code
              } else {
                  console.log(`Flower with ID ${flowerId} not found`);
              }
          });
  
};
  return (
    <div>
     <FlowerDetails Flower={FlowerInfo} />
     <FlowerReview FlowerReviews={FlowerReviews}/>
    </div>
  );
};

export default Page;
