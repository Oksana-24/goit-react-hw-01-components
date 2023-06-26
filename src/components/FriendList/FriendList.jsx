import css from "./FriendList.module.css";
import clsx from "clsx";

export const FriendList = ({friends}) => {
return (
    <ul className={css.friendList}> 
    {
        friends.map(({avatar, name, isOnline, id}) => {
            return (
                <li key={id} className={css.friendItem}>
                    <span className={clsx(
                        css.circle,
                        isOnline ? css.isOnline:css.isOffline
                    )}></span>
                    <img className={css.friendPhoto } width="120px" src={avatar} alt={name} />
                    <p className={css.friendName}>{ name}</p>
            </li>
        )
    })
    }
    </ul>
)
}
