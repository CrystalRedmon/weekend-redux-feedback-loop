import { useDispatch } from 'react-redux';
import { useState } from 'react';
import {useHistory} from 'react-router-dom'


function Feedback() {

    /// will send each response to redux store as we go along each feedback question
    const dispatch = useDispatch();
    /// will navigate to next page
    const history = useHistory();

    ///
    const [feedback, setFeedback] = useState(0);


    const handleSubmit=(evt)=>{
        evt.preventDefault();

        console.log('Over here handling submits');
        console.log(feedback)
        dispatch({
            type: "FEELING",
            payload: feedback
        });

        history.push('/feedback/review');

    };




    return (<>

        <h3>How Are You Feeling Today</h3>

        <form onSubmit={handleSubmit}>
            <label htmlFor="feedback">Feeling?</label>
            <input
                onChange={(event) => setFeedback(event.target.value)}
                type="number"
                name="feedback"
                required
            />
            <button type="submit">Next</button>
        </form>
    </>)

}

export default Feedback;