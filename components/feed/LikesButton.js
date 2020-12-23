import { useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    Count: {
        paddingLeft: '0.25em',
    }
}));

const LikesButton = ({ hi5, user }) => {
    const styles = useStyles();

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
        <Button variant="text" onClick={toggleLike}>
            { likes.indexOf(user?.email) < 0 ? <AiOutlineHeart /> : <AiFillHeart /> }
            <span className={styles.Count}>{likes.length}</span>
        </Button>
    );
};

export default LikesButton;
