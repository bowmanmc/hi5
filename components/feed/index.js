import Hi5Card from './card';

import styles from './index.module.scss';

const Feed = ({items}) => {

    return (
        <div className={styles.Feed}>
            {items.map(h5 => {
                return <Hi5Card key={h5.id} hi5={h5} />
            })}
        </div>
    );
};

export default Feed;
