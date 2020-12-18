import styles from './Hi5CardTitle.module.scss';

const Hi5CardTitle = ({hi5}) => {
    const { author, recipient } = hi5;

    return (
        <div className={styles.Hi5CardTitle}>
            <span className={styles.Hi5CardTitle__action}>
                {recipient.name || recipient} got a Hi5 from {author.name || author}!!!
            </span>
            <span className={styles.Hi5CardTitle__date}>
                Thursday, December 10th, 2020
            </span>
        </div>
    );
};

export default Hi5CardTitle;
