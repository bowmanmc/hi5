import { useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { Button } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useSession } from 'next-auth/client';


const useStyles = makeStyles((theme) => ({
    LikesButton: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        padding: '0 1.0em',
    },
    HeartIcon: {
        marginRight: '0.25em',
    }
}));

const LikesButton = ({ hi5 }) => {
    const styles = useStyles();
    const [session] = useSession();
    const user = session?.user;

    let hlikes = [];
    if (hi5?.likes) {
        hlikes = hi5?.likes.split(',');
    }

    const [likes, updateLikes] = useState(hlikes);

    const toggleLike = async () => {
        const body = {
            hi5Id: hi5.id,
        };
        const response = await fetch('http://localhost:3000/api/like', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });
        const data = response.json();

        const newLikes = [...likes];
        if (newLikes.indexOf(user.email) < 0) {
            // add it
            newLikes.push(user.email);
        }
        else {
            // remove it
            const index = newLikes.indexOf(user.email);
            if (index > -1) {
                newLikes.splice(index, 1);
            }
        }
        updateLikes(newLikes);
    };

    return (
        <Button variant="text" onClick={toggleLike} className={styles.LikesButton}>

            { likes.indexOf(user?.email) < 0 ?
                <AiOutlineHeart className={styles.HeartIcon} /> :
                <AiFillHeart className={styles.HeartIcon} /> }
            <Typography variant="caption">
                {likes.length}
            </Typography>
        </Button>
    );
};

export default LikesButton;
