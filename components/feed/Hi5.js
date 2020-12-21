import { Card } from '@material-ui/core';
import { CardActions } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Hi5Footer from './Hi5Footer';


const useStyles = makeStyles((theme) => ({
    Hi5: {
        margin: '1.0em',
    },
    gif: {
        width: '100%',
    }
}));

const Hi5 = ({ hi5, user }) => {
    const styles = useStyles();

    return (
        <Card className={styles.Hi5}>
            <img
                className={styles.gif}
                src={hi5.gif}
                title={'Fun gif of a High Five'}
            />
            <CardContent>
                <Typography variant="h6">
                    {hi5.recipientname || hi5.recipient} got a Hi5 from {hi5.authorname || hi5.author}!!!
                </Typography>
                <Typography variant="body1">{hi5.description}</Typography>
            </CardContent>
            <CardActions>
                <Hi5Footer hi5={hi5} user={user} />
            </CardActions>
        </Card>
    );
};

export default Hi5;
