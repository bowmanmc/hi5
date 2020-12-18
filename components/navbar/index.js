import Link from 'next/link';
import { useSession } from 'next-auth/client';
import { GiHighFive } from 'react-icons/gi';

import UserInfo from './UserInfo';

import styles from './index.module.scss';

const Navbar = props => {
    const [session, loading] = useSession();

    return (
        <div className={styles.Navbar}>
            <div className={styles.Navbar__logo}>
                <Link href="/">
                    <a>Hi5!</a>
                </Link>
            </div>
            <div className={styles.Navbar__draft}>
                <Link href="/draft">
                    <a>
                        <GiHighFive />
                        <span>Give One!</span>
                    </a>
                </Link>
            </div>
            <div className={styles.Navbar__user}>
                {session?.user ? <UserInfo user={session.user} /> : null}
            </div>
        </div>
    );
};
export default Navbar;
