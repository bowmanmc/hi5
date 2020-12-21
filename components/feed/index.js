import { makeStyles } from '@material-ui/core';

import Hi5 from './Hi5';


const useStyles = makeStyles(theme => ({
    feed: {
        margin: '0 auto',
        maxWidth: '600px',
        paddingBottom: '2.0em',
    },
}));

const Feed = ({ items, user }) => {
    const styles = useStyles();

    return (
        <div className={styles.feed}>
            {items.map(h5 => {
                return <Hi5 key={h5.id} hi5={h5} user={user} />
            })}
        </div>
    );
};

export default Feed;
