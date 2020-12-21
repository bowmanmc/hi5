import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { Button } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


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

    let likes = [];
    if (hi5.likes) {
        likes = hi5.likes.split(',');
    }

    return (
        <div className={styles.Hi5Footer}>
            <div className={styles.Metric}>
                <Typography variant="button">Likes</Typography>
                <Typography variant="caption">
                    <Button variant="text">
                        { likes.indexOf(user?.email) < 0 ? <AiOutlineHeart /> : <AiFillHeart /> }
                        <span className={styles.Count}>{likes.length}</span>
                    </Button>

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
