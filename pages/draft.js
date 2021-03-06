import { useState } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/client';
import { GiHighFive } from 'react-icons/gi';

import { Button } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import { Select } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Navbar from '../components/navbar';
import SignInScreen from '../components/SignInScreen';

const FORM_DEFAULTS = {
    recipient: '',
    corevalue: 'Supported Autonomy',
    impact: 'Personal',
    description: ''
};

const useStyles = makeStyles(theme => ({
    DraftPage: {
        margin: 'auto',
        maxWidth: '512px',
    },
    DraftForm: {
        display: 'flex',
        flexDirection: 'column',
    },
}));

const DraftPage = (props) => {
    const [session, loading] = useSession();
    if (!session && !loading) {
        return <SignInScreen />;
    }

    const router = useRouter();
    const styles = useStyles();

    // Form Variables
    const [formVariables, setFormVariables] = useState(FORM_DEFAULTS);

    const submitData = async (e) => {
        e.preventDefault();
        try {
            const body = { ...formVariables };
            const res = await fetch(`http://localhost:3000/api/hi5`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            });
            const data = await res.json();
            if (!data?.id) {
                // error
                console.log('Error: ' + JSON.stringify(data));
            }
            else {
                await router.push('/');
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormVariables({
            ...formVariables,
            [name]: value,
        });
    };

      return (
        <>
            <Navbar />
            <div className={styles.DraftPage}>
                <h1>Give a Friend a Hi5!</h1>
                <form noValidate className={styles.DraftForm}>
                    <FormControl variant="outlined" margin="normal">
                        <TextField
                            id="recipient"
                            name="recipient"
                            fullwidth="true"
                            label="Recipient Email Address"
                            variant="outlined"
                            value={formVariables.recipient}
                            onChange={handleInputChange}
                        />
                    </FormControl>


                    <FormControl variant="outlined" margin="normal">
                        <InputLabel>Core Value</InputLabel>
                        <Select
                            id="corevalue"
                            name="corevalue"
                            label="Core Value"
                            fullwidth="true"
                            variant="outlined"
                            value={formVariables.corevalue}
                            onChange={handleInputChange}
                            >
                            <MenuItem value="Supported Autonomy">Supported Autonomy</MenuItem>
                            <MenuItem value="Success is a Team Effort">Success is a Team Effort</MenuItem>
                            <MenuItem value="Tangible Results">Tangible Results</MenuItem>
                            <MenuItem value="Humble Expertise">Humble Expertise</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl variant="outlined" margin="normal">
                        <InputLabel>Impact</InputLabel>
                        <Select
                            id="impact"
                            name="impact"
                            fullwidth="true"
                            label="Impact"
                            variant="outlined"
                            value={formVariables.impact}
                            onChange={handleInputChange}
                            >
                            <MenuItem value="Personal">Personal</MenuItem>
                            <MenuItem value="Project">Project</MenuItem>
                            <MenuItem value="Company">Company</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl variant="outlined" margin="normal">
                        <TextField
                            id="description"
                            name="description"
                            label="Description"
                            multiline
                            rows={4}
                            variant="outlined"
                            value={formVariables.description}
                            onChange={handleInputChange}
                        />
                    </FormControl>

                    <Button color="primary" variant="contained" onClick={submitData} startIcon={<GiHighFive />}>
                        Submit
                    </Button>
                </form>
            </div>
        </>
    );
};
export default DraftPage;
