import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import FormLabel from '@mui/material/FormLabel';
import { createTheme } from '@mui/material/styles';

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function Feedback() {

    /// will send each response to redux store as we go along each feedback question
    const dispatch = useDispatch();
    /// will navigate to next page
    const history = useHistory();
    ///
    const [feedback, setFeedback] = useState(0);

    const handleSubmit = (evt) => {
        evt.preventDefault();

        dispatch({
            type: "FEELING",
            payload: feedback
        });

        history.push('/understanding');
    };



    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <h3>How Are You Feeling Today</h3>
                </CardContent>
            <form onSubmit={handleSubmit}>
                <FormLabel htmlFor="feedback">Feeling?</FormLabel>

                <input
                    onChange={(event) => setFeedback(event.target.value)}
                    type="number"
                    min="1"
                    max="5"
                    name="feedback"
                    required
                />
                <Button
                    type="submit"
                    small
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Next
                </Button>

            </form>

        </Card >
    );
}

export default Feedback;