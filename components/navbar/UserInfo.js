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

    },
    UserInfoEmail: {

    },
    UserInfoSignout: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: '0.5em',
    },
}));

const UserInfo = ({ user }) => {
    const styles = useStyles();
    console.log(JSON.stringify(user));
    return (
        <div className={styles.UserInfo}>
            <div className={styles.UserInfoPic}>
                <Avatar
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
                <Button size="small" onClick={signOut}>Sign out</Button>
            </div>
        </div>
    );
};

export default UserInfo;
