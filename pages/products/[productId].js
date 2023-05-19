import { useRouter } from "next/router"


function Product({ product }) {
    const router = useRouter()

    if (router.isFallback) {
        return <h1>Loading.....</h1>
    }
    return (
        <div>
            {product.title} {product.price}
            <hr />
            {product.description}
        </div>
    )
}

export default Product

export async function getStaticPaths() {

    const responce = await fetch('http://localhost:4000/products')
    const data = await responce.json()
    const paths = data.map((post) => {
        return {
            params: {
                postId: `${post.id}`,
            }
        }
    })

    return {
        paths: [
            {
                params: { productId: "1" }
            }

        ],
        // paths,
        fallback: true,
    }
}


export async function getStaticProps(context) {
    const { params } = context
    console.log(params, "ddddddddddddddd");

    const responce = await fetch(`http://localhost:4000/products/${params.productId}`)
    const data = await responce.json()
    console.log(`Genarate page for /posts/${params.productId}`);


    if (!data.id) {
        return {
            notFound: true,
        }
    }
    return {
        props: {
            product: data
        },
        revalidate: 30
    }
}