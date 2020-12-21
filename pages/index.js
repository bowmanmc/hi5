import { Fab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { MdAdd } from 'react-icons/md';
import { useSession } from 'next-auth/client';

import Feed from '../components/feed';
import Navbar from '../components/navbar';
import SignInScreen from '../components/SignInScreen';

const useStyles = makeStyles(theme => ({
    fab: {
        position: 'fixed',
        top: theme.spacing(12),
        right: theme.spacing(4),
    },
}));

const HomePage = props => {
    const [session, loading] = useSession();
    if (!session && !loading) {
        return <SignInScreen />;
    }
    const styles = useStyles();

    return (
        <>
            <Navbar />
            <Feed items={props.feed} user={session?.user} />
            <Fab href="/draft" className={styles.fab} color="primary" aria-label="Give a Hi5!">
                <MdAdd />
            </Fab>
        </>
    );
};
export default HomePage;

export const getServerSideProps = async () => {
    const response = await fetch('http://localhost:3000/api/feed');
    const feed = await response.json();
    return {
        props: {
            feed
        },
    };
};
