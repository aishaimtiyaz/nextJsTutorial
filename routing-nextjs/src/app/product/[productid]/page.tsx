import {Metadata} from 'next';
import Link from 'next/link';

export const generateMetadata= async ({params}:Props):Promise<Metadata>=>{
  const title = await new Promise(resolve=>{
    setTimeout(()=>
      resolve(`iPhone ${params.productid}`)
      ,100)
  });
  return{
    title:`Product ${title}`
  };
};

type Props={
  params:{
    productid:string,
  }
}

function Productid({ params,}:Props) 
{
  return (
    <div>
      <h1> Product Deatails</h1>
      <h2>
        <Link style={{ textDecoration: "none", color:"purple" }}
        href={`/product/${params.productid}/reviews/1`}> Product id {params.productid} Review </Link>

        </h2>
    </div>
  )
}

export default Productid
