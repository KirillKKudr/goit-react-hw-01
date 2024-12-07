import styles from './Profile.module.css'
import PropTypes from 'prop-types';

export default function Profile({ name, tag, location, image, stats }) {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <img src={image} alt="User avatar" />
                <h1>{name}</h1>
                <p>@{tag}</p>
                <p>{location}</p>
            </div>
            <ul className={styles.soc_list}>
                <li className={styles.list_item}>
                    <span>Followers</span>
                    <span>{stats.followers}</span>
                </li>
                <li className={styles.list_item}>
                    <span>Views</span>
                    <span>{stats.views}</span>
                </li>
                <li className={styles.list_item}>
                    <span>Likes</span>
                    <span>{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
}


Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }).isRequired,
};



