import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

function Understanding() {

    /// will send each response to redux store as we go along each feedback question
    const dispatch = useDispatch();
    /// will navigate to next page
    const history = useHistory();
    ///
    const [feedback, setFeedback] = useState(0);

    const handleSubmit=(evt) =>{
        evt.preventDefault();

        dispatch({
            type: "UNDERSTANDING",
            payload: feedback
        });

        history.push('/feedback/review');
    };

    return (<>

        <h3>How well are you understanding the content?</h3>

        <form onSubmit={handleSubmit}>
        <label htmlFor="feedback">Understanding?</label>
            <input
                type="number"
                required
                name="feedback"
                onChange={(event) => setFeedback(event.target.value)}
            />
            <button type="submit">Next</button>
        </form>
    </>);
}

export default Understanding;
