

export const FriendList = ({friends}) => {
return (
    <ul> 
    {
        friends.map(({avatar, name, isOnline, id}) => {
            return (
                <li key={id}>
                    <span></span>
                    <img src={avatar} alt={name} />
                    <p>{ name}</p>
            </li>
        )
    })
    }
    </ul>
)
}
