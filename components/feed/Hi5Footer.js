import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import LikesButton from './LikesButton';


const useStyles = makeStyles((theme) => ({
    Hi5Footer: {
        display: 'flex',
        flex: 1,
    },
    Metric: {
        alignItems: 'center',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        textAlign: 'center',
    },
    Count: {
        paddingLeft: '0.25em',
    }
}));

const Hi5Footer = ({ hi5, user }) => {
    const styles = useStyles();

    return (
        <div className={styles.Hi5Footer}>
            <div className={styles.Metric}>
                <Typography variant="button">Likes</Typography>
                <Typography variant="caption">
                    <LikesButton hi5={hi5} user={user} likes={hi5?.likes} />
                </Typography>
            </div>
            <div className={styles.Metric}>
                <Typography variant="button">Core Value</Typography>
                <Typography variant="caption">
                    Success is a team effort
                </Typography>
            </div>
            <div className={styles.Metric}>
                <Typography variant="button">Impact</Typography>
                <Typography variant="caption">
                    Project
                </Typography>
            </div>
        </div>
    );
};

export default Hi5Footer;
