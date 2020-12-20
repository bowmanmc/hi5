import { Card } from '@material-ui/core';
import { CardActions } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    Hi5: {
        margin: '1.0em',
    },
    gif: {
        width: '100%',
    }
}));

const Hi5 = ({ hi5 }) => {
    const styles = useStyles();
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
        <Card className={styles.Hi5}>
            <img
                className={styles.gif}
                src={'https://media.giphy.com/media/4QFAH0qZ0LQnIwVYKT/giphy.gif'}
                title={'Fun gif of a High Five'}
            />
            <CardContent>
                <Typography variant="h6">
                    {recipient.name || recipient} got a Hi5 from {author.name || author}!!!
                </Typography>
                <Typography variant="body1">
                    Quis rerum et deserunt dolores hic. Quibusdam
                    dolorum eaque est alias excepturi qui maiores.
                    Laborum est accusamus et assumenda veniam facilis
                    quis. Autem sed laudantium non. Doloribus ut
                    rerum suscipit praesentium doloremque.
                </Typography>
            </CardContent>
            <CardActions>

            </CardActions>
        </Card>
    );
};

export default Hi5;
