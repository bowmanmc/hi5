import { signOut } from 'next-auth/client';
import { Avatar } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    UserInfo: {
        display: 'flex',
        flexDirection: 'row',
        padding: '0 0.25em',
    },
    UserInfoPic: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
    },
    UserInfoText: {
        borderRight: `1px solid ${theme.palette.primary.light}`,
        display: 'flex',
        flexDirection: 'column',
        padding: '0 0.5em',
    },
    UserInfoName: {
        ...theme.typography.subtitle1,
    },
    UserInfoEmail: {
        ...theme.typography.caption,
        color: theme.palette.gray.light,
    },
    UserInfoSignout: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: '0.5em',
    },
    UserInfoSignoutButton: {
        ...theme.typography.caption,
        color: theme.palette.primary.contrastText,
    },
    Avatar: {
        border: `1px solid ${theme.palette.primary.light}`,
        height: '48px',
        width: '48px',
    }
}));

const UserInfo = ({ user }) => {
    const styles = useStyles();

    return (
        <div className={styles.UserInfo}>
            <div className={styles.UserInfoPic}>
                <Avatar className={styles.Avatar}
                    src={user.image}
                    alt={user.name}
                />
            </div>
            <div className={styles.UserInfoText}>
                <div className={styles.UserInfoName}>
                    {user.name}
                </div>
                <div className={styles.UserInfoEmail}>
                    {user.email}
                </div>
            </div>
            <div className={styles.UserInfoSignout}>
                <Button className={styles.UserInfoSignoutButton} size="small" onClick={signOut}>Sign out</Button>
            </div>
        </div>
    );
};

export default UserInfo;
