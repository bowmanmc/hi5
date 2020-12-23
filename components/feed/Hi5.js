import { Avatar } from '@material-ui/core';
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
    },
    Title: {
        display: 'flex',
        paddingBottom: theme.spacing(1),
    },
    AvatarLeft: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'flex-start',
    },
    AvatarRight: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'flex-end',
    },
    Avatar: {
        width: theme.spacing(10),
        height: theme.spacing(10),
    },
    TitleText: {
        flex: 1,
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        textAlign: 'center',
    },
}));

const Hi5 = ({ hi5 }) => {
    const styles = useStyles();

    return (
        <Card className={styles.Hi5}>
            <img
                className={styles.gif}
                src={hi5.gif}
                title={'Fun gif of a High Five'}
            />
            <CardContent>
                <div className={styles.Title}>
                    <div className={styles.AvatarLeft}>
                        <Avatar
                            className={styles.Avatar}
                            src={hi5.recipientpic || '/assets/user-robot.png'}
                            alt={hi5.recipientname || hi5.recipient}
                        />
                    </div>
                    <div className={styles.TitleText}>
                        <Typography variant="h6">
                            {hi5.recipientname || hi5.recipient} got a Hi5 from{' '}
                            {hi5.authorname || hi5.author}!!!
                        </Typography>
                    </div>
                    <div className={styles.AvatarRight}>
                        <Avatar
                            className={styles.Avatar}
                            src={hi5.authorpic || '/assets/user-robot.png'}
                            alt={hi5.authorname || hi5.author}
                        />
                    </div>
                </div>
                <Typography variant="body1">{hi5.description}</Typography>
            </CardContent>
            <CardActions>
                <Hi5Footer hi5={hi5} />
            </CardActions>
        </Card>
    );
};

export default Hi5;
