import { Avatar } from '@material-ui/core';
import { signOut } from 'next-auth/client';

import styles from './UserInfo.module.scss';

const UserInfo = ({ user }) => {
    return (
        <div className={styles.UserInfo}>
            <div className={styles.UserInfo__pic}>
                <Avatar
                    src={user.image}
                    alt={user.name}
                />
            </div>
            <div className={styles.UserInfo__name}>
                <div className={styles.UserName}>
                    <span className={styles.UserName__name}>
                        {user.name}
                    </span>
                    <span className={styles.UserName__email}>
                        {user.email}
                    </span>
                </div>
            </div>
            <div className={styles.UserInfo__signout}>
                <button onClick={signOut}>Sign out</button>
            </div>
        </div>
    );
};

export default UserInfo;
