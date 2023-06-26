import { Avatar, DescriptionAvatar, ListStats, ProfileSection } from "./Profile.styled"
import PropTypes from 'prop-types'

export const Profile = ({ username, tag, location, avatar, stats: { followers, views, likes } }) => {
return (
<ProfileSection>
    <DescriptionAvatar>
    <Avatar
        src={avatar}
        alt="User avatar"
        className="avatar"
    />
    <p className="name">{username}</p>
    <p className="tag">@{tag}</p>
    <p className="location">{location}</p>
    </DescriptionAvatar>

    <ListStats>
    <li>
        <span className="label">Followers</span>
        <span className="quantity">{followers}</span>
    </li>
    <li>
        <span className="label">Views</span>
        <span className="quantity">{views}</span>
    </li>
    <li>
        <span className="label">Likes</span>
        <span className="quantity">{likes}</span>
    </li>
    </ListStats>
</ProfileSection>
    )
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }).isRequired,
}