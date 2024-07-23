'use client'
import { useRouter } from "next/navigation"

export default function ProductButton({id}){
    const router = useRouter();

    function handleClick(){
       router.push(`/products/${id}`) ;
    }
    return(
        <>
        <button className="cursor-pointer mt-4 text-white bg-green-500 p-2 rounded-lg" onClick={handleClick}>Goto Product</button>
        </>
    )
}