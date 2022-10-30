import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


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
                dispatch({
                    type: 'RESET'
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

        <button onClick={handleSubmit} >Submit</button>
    </>)
};

export default Review;