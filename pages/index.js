import { Fab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { MdAdd } from 'react-icons/md';
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client';

import Feed from '../components/feed';
import Navbar from '../components/navbar';
import SignInScreen from '../components/SignInScreen';

const useStyles = makeStyles(theme => ({
    page: {
        backgroundColor: theme.palette.gray.light,
    },
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

    const router = useRouter();

    return (
        <div className={styles.page}>
            <Navbar />
            <Feed items={props.feed} />
            <Fab className={styles.fab} color="primary" aria-label="Give a Hi5!" onClick={() => {
                router.push('/draft');
            }}>
                <MdAdd />
            </Fab>
        </div>
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
