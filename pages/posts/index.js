import Link from "next/link"

function PostList({ posts }) {
    return (
        <div>
            {posts.map((post) => {
                return (
                    <div key={post.id}>
                        <Link href={`posts/${post.id}`} passHref>
                            <div className="bg-red-100 font-bold pt-0 p-8 ">
                                {post.id} .{post.title}
                            </div>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default PostList


export async function getStaticProps() {
    const responce = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await responce.json()


    return {
        props: {
            posts: data.slice(0, 3)
        }
    }
}