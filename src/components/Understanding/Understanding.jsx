import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import Button from '@mui/material/Button';

function Understanding() {

    /// will send each response to redux store as we go along each feedback question
    const dispatch = useDispatch();
    /// will navigate to next page
    const history = useHistory();
    ///
    const [feedback, setFeedback] = useState(0);

    const handleSubmit = (evt) => {
        evt.preventDefault();

        dispatch({
            type: "UNDERSTANDING",
            payload: feedback
        });

        history.push('/support');
    };

    const onBackButton = () => {
        history.push('/feedback')
    }

    return (<>

        <h3>How well are you understanding the content?</h3>

        <form onSubmit={handleSubmit}>
            <label htmlFor="feedback">Understanding?</label>
            <input
                type="number"
                min="1"
                max="5"
                required
                name="feedback"
                onChange={(event) => setFeedback(event.target.value)}
            />

<Button
                onClick={onBackButton}
                type="submit"
                small
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Back
            </Button>
            {/* <button type="submit">Next</button> */}
            <Button
                type="submit"
                small
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Next
            </Button>

        </form>
    </>);
}

export default Understanding;
