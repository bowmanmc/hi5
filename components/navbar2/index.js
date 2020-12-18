import Link from 'next/link';
import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useSession } from 'next-auth/client';

import UserInfo from './UserInfo';

const useStyles = makeStyles(theme => ({
    toolbar: {
        flexGrow: 1,
    },
    toolbar__middle: {
        flexGrow: 1,
    },
}));

const Navbar = props => {
    const [session, loading] = useSession();
    const classes = useStyles();

    return (
        <AppBar position="relative">
            <Toolbar className={classes.toolbar}>
                <div>
                    <Link href="/">
                        <a>Hi5!</a>
                    </Link>
                </div>

                <div className={classes.toolbar__middle} />

                <div>
                    {session?.user ? <UserInfo user={session.user} /> : null}
                </div>
            </Toolbar>
        </AppBar>
    );
};
export default Navbar;
