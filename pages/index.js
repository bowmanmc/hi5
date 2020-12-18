import Head from 'next/head';
import { useSession } from 'next-auth/client';

import Feed from '../components/feed';
import Navbar from '../components/navbar2';
import SignInScreen from '../components/SignInScreen';

import styles from './index.module.scss';

const HomePage = props => {
    const [session, loading] = useSession();
    if (!session && !loading) {
        return <SignInScreen />;
    }

    console.log('Got Hi5s: ' + JSON.stringify(props.feed));

    return (
        <div className={styles.HomePage}>
            <Navbar />
            <Feed items={props.feed} />
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
