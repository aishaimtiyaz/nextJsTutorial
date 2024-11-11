"use client"
import {useRouter} from 'next/navigation';

export default function ProductOrder() {

    const router = useRouter();
    function handleClick()
    {
      router.push('/');
    //   router.replace('/');
    //   router.back();
    //   router.forward();
    }
  return (
    <div>
      <h1>Product Order Page</h1>
      <button onClick={handleClick}>place order</button>
    </div>
  );
}
