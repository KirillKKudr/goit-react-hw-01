import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
    return (
        <div className={styles.container}>
            <img src={avatar} alt="Avatar" width="48" />
            <p>{name}</p>
            <p className={isOnline ? styles.online : styles.offline}>
                {isOnline ? 'Online' : 'Offline'}
            </p>
        </div>
    );
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};
