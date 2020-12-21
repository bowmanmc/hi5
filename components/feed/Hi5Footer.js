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
}));

const Hi5Footer = ({ hi5 }) => {
    const styles = useStyles();

    return (
        <div className={styles.Hi5Footer}>
            <div className={styles.Metric}>
                <Typography variant="button">Likes</Typography>
                <Typography variant="caption">
                    <Button variant="text">
                        <AiOutlineHeart /> 42
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
