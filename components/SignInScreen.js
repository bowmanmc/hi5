import { Button } from '@material-ui/core';
import { Card } from '@material-ui/core';
import { CardActions } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { signIn } from 'next-auth/client';

const useStyles = makeStyles((theme) => ({
    SignInScreen: {
        alignItems: 'center',
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
    },
    SignInScreenCard: {
        padding: '2.0em',
    },
    SignInScreenActions: {
        justifyContent: 'center',
    },
    ButtonText: {
        padding: '0 0.5em',
    },
}));

const SignInScreen = () => {
    const styles = useStyles();

    return (
        <div className={styles.SignInScreen}>
            <Card className={styles.SignInScreenCard}>
                <CardContent>
                    <h1>Welcome to the Hi5 Application!</h1>
                </CardContent>
                <CardActions className={styles.SignInScreenActions}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() =>
                            signIn('google', {
                                callbackUrl: '/',
                            })
                        }
                    >
                        <AiFillGoogleCircle />
                        <span className={styles.ButtonText}>
                            Sign In with Google
                        </span>
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default SignInScreen;
