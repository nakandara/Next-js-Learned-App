import Link from "next/link"

function ProductList({ products }) {
    return (
        <div>
            <h1 className="bg-green-400">Product List</h1>
            {products.map((product) => {
                return (
                    <div key={product.id}>

                        <Link href={`products/${product.id}`} passHref>
                            <div className="bg-red-100 font-bold pt-0 p-8 ">
                                {product.id} .{product.title} {product.price}
                            </div>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default ProductList


export async function getStaticProps() {
    console.log('Generating/egistarting productList');
    const responce = await fetch('http://localhost:4000/products')
    const data = await responce.json()


    return {
        props: {
            products: data.slice(0, 3)
        }
    }
}