import { Button } from '@material-ui/core';
import { Card } from '@material-ui/core';
import { CardActions } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { signIn } from 'next-auth/client'

import styles from './SignInScreen.module.scss';

const SignInScreen = () => {

    return (
        <div className={styles.SignInScreen}>
            <Card style={{padding: '2.0em'}}>
                <CardContent>
                    <h1>Welcome to the Hi5 Application!</h1>
                </CardContent>
                <CardActions style={{justifyContent: 'center'}}>
                    <Button variant="contained" color="primary" onClick={() => signIn('google', {
                        callbackUrl: '/'
                    })}>
                        <AiFillGoogleCircle />
                        <span className={styles.SignInScreen__buttontxt}>
                            Sign In with Google
                        </span>
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default SignInScreen;
