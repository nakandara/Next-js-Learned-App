import Link from "next/link"
import { useRouter } from "next/router";

function Home() {
    const router = useRouter()

    const handleClick = () => {
        console.log("submited");
        router.replace("./product")
    }

    return (
        <div className="relative">
            <h1 className="text-3xl font-bold underlin dark:bg-slate-800">
                Home page
            </h1>
            <Link className="bg-green-200 pt-0 p-8" href="/blog">
                <>Blog</>
            </Link>
            <Link className="bg-red-400 pt-0 p-8 " href="/product">
                <>product</>
            </Link>
            <Link className="bg-red-400 pt-0 p-8 " href="/posts">
                <>Posts</>
            </Link>
            <button onClick={handleClick}>place order</button>
        </div>

    )
}

export default Home