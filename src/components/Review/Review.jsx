import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';


function Review() {

    const history = useHistory();
    const dispatch = useDispatch();
    const feedback = useSelector(store => store.feedback);

    const handleSubmit = () => {

        axios({
            method: 'POST',
            url: '/feedback',
            data: feedback
        })
            .then(response => {
                console.log(response);
                ///// ⬇️ /// EMPTY FEEDBACK IN STORE  
                dispatch({
                    type: 'RESET',
                    payload: {}
                })
            })
            .catch(error => {
                console.log('POST feedback failed: ', error)
            })
        history.push('/success')
    }

    return (<>

        <h3>Review Your Feedback</h3>

        <ul>
            <li>Feelings: {feedback.feeling}</li>
            <li>Understanding: {feedback.understanding}</li>
            <li>Support: {feedback.support}</li>
            <li>Comments: {feedback.comments}</li>
        </ul>


        <Button
            onClick={handleSubmit}
            type="submit"
            small
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
        >
            Submit
        </Button>

    </>);
};

export default Review;