// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
    const res = await fetch('https://dummyjson.com/products?limit=10&select=title,price')
    const data= await res.json();
   
    return data.products.map((product) => ({
      id: product.id.toString()
    }))
  }

  async function getproduct(id){
    const res = await fetch(`https://dummyjson.com/products/${id}`)
    const data = res.json();
    return data;
  }

export default async function ProductPage({params}){
    const product = await getproduct(params.id)
    console.log(product)
    return(
        <div className="max-w-[30rem] min-w-[200px] mt-[3rem] px-10  mx-auto">
        <h1 className="text-2xl font-semibold text-blue-500">{product.title}</h1>
        <p className="mt-5 text-gray-500 font-semibold ">{product.description}</p>
        <p className="mt-5 text-sm text-gray-500 font-semibold ">{product.returnPolicy}</p>
        <div className=" border-[1px] rounded-lg p-6 mt-5"> <h2 className="flex justify-center text-xl text-gray-500 font-semibold">Reviews</h2>
        {
            product &&(
                product.reviews.map((review)=>(<div className=" ">
                    <p className="mt-5 text-green-600 font-semibold  ">{review.reviewerName} &nbsp;Rating -
                        {review.rating}</p>
                    
                    <p className="mt-5 text-gray-500 font-semibold text-sm "> &nbsp;{review.comment}</p>
                </div>
                ))
            )        }
            </div>
        </div>
    )
}