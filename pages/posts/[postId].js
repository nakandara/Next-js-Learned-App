import { useRouter } from "next/router"


function Post({ post }) {
    const router = useRouter()

    if (router.isFallback) {
        return <h1>Loading.....</h1>
    }
    return (
        <div>
            {post.id} {post.body}
            <hr />
            {post.body}
        </div>
    )
}

export default Post

export async function getStaticPaths() {

    const responce = await fetch('https://jsonplaceholder.typicode.com/posts')
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
                params: { postId: "1" }
            },
            {
                params: { postId: "2" }
            },
            {
                params: { postId: "3" }
            }
        ],
        // paths,
        fallback: true,
    }
}


export async function getStaticProps(context) {
    const { params } = context
    console.log(params, "ddddddddddddddd");

    const responce = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await responce.json()
    console.log(`Genarate page for /posts/${params.postId}`);


    if (!data.id) {
        return {
            notFound: true,
        }
    }
    return {
        props: {
            post: data
        }
    }
}