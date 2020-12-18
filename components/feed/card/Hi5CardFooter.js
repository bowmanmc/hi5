import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';

import styles from './Hi5CardFooter.module.scss';

const Hi5CardFooter = ({hi5}) => {
    const { author, recipient } = hi5;

    return (
        <div className={styles.Hi5CardFooter}>
            <div className={styles.Hi5CardFooter__likes}>
                <div>
                    <AiOutlineHeart />
                    42 Likes
                </div>
            </div>
            <div className={styles.Hi5CardFooter__value}>
                <span className={styles.Hi5CardFooter__title}>Core Value</span>
                <span>
                    Success is a team effort
                </span>
            </div>
            <div className={styles.Hi5CardFooter__impact}>
                <span className={styles.Hi5CardFooter__title}>Impact</span>
                <span>Project</span>
            </div>
        </div>
    );
};

export default Hi5CardFooter;
