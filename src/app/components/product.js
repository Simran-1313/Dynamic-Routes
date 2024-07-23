import ProductButton from "./ProductButton";

export default function Product({ id,title,price}){
    return(
        <div className=" rounded-lg  mt-[2rem] max-w-[350px] mx-auto p-[1.5rem] border-2 bg-gray-800 text-white border-teal-800 " >
            <h2 className="font-bold text-2xl" >{title}</h2>
            <p className="text-xl mt-3 text-yellow-500">${price}</p>
            <ProductButton id={id}/>
        </div>
    )
}