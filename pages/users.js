import Link from "next/link"
import User from "../components/user"

function users({ users }) {
    return (
        <div>users
            {users.map((user) => {
                return (
                    <div key={user.id}>
                        <User user={user} />
                    </div>
                )
            })}
            <Link href='/users'></Link>
            <a>Users</a>
        </div>
    )
}

export default users
export async function getStaticProps() {
    const responce = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await responce.json()
    console.log(data);

    return {
        props: {
            users: data
        }
    }
}