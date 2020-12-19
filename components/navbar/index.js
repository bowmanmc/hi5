import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { useSession } from 'next-auth/client';

import UserInfo from './UserInfo';

const useStyles = makeStyles(theme => ({
    toolbar: {
        display: 'flex',
    },
    toolbar__middle: {
        flex: 1,
    },
}));

const Navbar = props => {
    const [session, loading] = useSession();
    const styles = useStyles();

    return (
        <AppBar position="relative">
            <Toolbar className={styles.toolbar}>
                <div>
                    <Link href="/">
                        <a>Hi5!</a>
                    </Link>
                </div>

                <div className={styles.toolbar__middle}>&nbsp;</div>

                <div>
                    {session?.user ? <UserInfo user={session.user} /> : null}
                </div>
            </Toolbar>
        </AppBar>
    );
};
export default Navbar;
