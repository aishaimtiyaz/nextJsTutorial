"use client";
import {notFound} from 'next/navigation';

function getRandomInt(count:number)
{
  return Math.floor(Math.random() *count);
}

function Reviews({ 
    params, }:{
        params:{
            productid:string,
            reviewsId:string
        };
    }) 
{
  const random = getRandomInt(2);
  
  if(random === 1)
  {
    throw new Error("Error loading review");
  }
  if(parseInt(params.reviewsId)>1000)
  {
    notFound();
  }
  return (
    <div>
      <h1>Review id {params.reviewsId} for product id {params.productid}  Deatails</h1>
    </div>
  )
}

export default Reviews
