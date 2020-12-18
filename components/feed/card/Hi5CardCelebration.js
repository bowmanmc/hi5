import styles from './Hi5CardCelebration.module.scss';

const Hi5CardCelebration = ({hi5}) => {
    const { author, recipient } = hi5;

    return (
        <div className={styles.Hi5CardCelebration}>
            <div className={styles.Hi5CardCelebration__user}>
                <img
                    src={recipient.image || '/assets/user-robot.png'}
                    alt={recipient.name || recipient}
                />
            </div>

            <div className={styles.Hi5CardCelebration__gif}>
                <img
                    src={'https://media.giphy.com/media/3oEjHV0z8S7WM4MwnK/giphy.gif'}
                    alt={'High Five gif'}
                />
            </div>

            <div className={styles.Hi5CardCelebration__user}>
                <img
                    src={author.image || '/assets/user-robot.png'}
                    alt={author.name || author}
                />
            </div>
        </div>
    );
};

export default Hi5CardCelebration;
