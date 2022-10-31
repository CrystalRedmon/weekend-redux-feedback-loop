import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import Button from '@mui/material/Button';

function Support() {

    /// will send each response to redux store as we go along each feedback question
    const dispatch = useDispatch();
    /// will navigate to next page
    const history = useHistory();
    ///
    const [feedback, setFeedback] = useState(0);

    const handleSubmit = (evt) => {
        evt.preventDefault();

        dispatch({
            type: "SUPPORT",
            payload: feedback
        });

        history.push('/comments');
    };

    const onBackButton = () => {
        history.push('/feedback')
    };

    return (<>

        <h3>How well are you being supported?</h3>

        <form onSubmit={handleSubmit}>
            <label htmlFor="feedback">Support?</label>
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

export default Support;