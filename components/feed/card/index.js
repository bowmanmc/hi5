import Hi5CardCelebration from './Hi5CardCelebration';
import Hi5CardFooter from './Hi5CardFooter';
import Hi5CardTitle from './Hi5CardTitle';

import styles from './index.module.scss';

const Hi5Card = ({hi5}) => {
    console.log('hi5: ' + JSON.stringify(hi5));

    const author = {
        "name":"Michael Bowman",
        "email":"bowmanmc@gmail.com",
        "image":"https://lh3.googleusercontent.com/a-/AOh14GgTz-IGyg84BmipB95xJo4zOns41rBsISQBQoqFYg=s96-c"
    };

    const recipient = "jhorwitz@miletwo.us";

    const h5 = {
        author, recipient
    };

    return (
        <div className={styles.Hi5Card}>
            <Hi5CardTitle hi5={h5} />
            <Hi5CardCelebration hi5={h5} />
            <div className={styles.Hi5Card__maintext}>
                Quis rerum et deserunt dolores hic. Quibusdam
                dolorum eaque est alias excepturi qui maiores.
                Laborum est accusamus et assumenda veniam facilis
                quis. Autem sed laudantium non. Doloribus ut
                rerum suscipit praesentium doloremque.
            </div>
            <Hi5CardFooter hi5={h5} />
        </div>
    );
};

export default Hi5Card;
