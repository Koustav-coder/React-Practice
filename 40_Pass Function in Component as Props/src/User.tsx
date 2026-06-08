function User({displayName, name, getUser, email}: {displayName: (name: string) => void, name: string, getUser: (email: string) => void, email: string}) {
    return(
        <div>
            <button onClick={() => displayName(name)}> Subscribe </button>
            <button onClick={() => getUser(email)}> Get Email </button>
        </div>
    )
}

export default User;