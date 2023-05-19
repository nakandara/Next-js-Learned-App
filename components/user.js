

function User({ user }) {
    return (
        <div>
            <p>{user.email}</p>
            <p>{user.name}</p>
        </div>
    )
}

export default User