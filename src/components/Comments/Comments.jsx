import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

function Comments() {

    /// will send each response to redux store as we go along each feedback question
    const dispatch = useDispatch();
    /// will navigate to next page
    const history = useHistory();
    ///
    const [feedback, setFeedback] = useState(0);

    const handleSubmit=(evt) =>{
        evt.preventDefault();

        dispatch({
            type: "COMMENTS",
            payload: feedback
        });

        history.push('/feedback/review');
    };

    return (<>

        <h3>Any comments you want to leave?</h3>

        <form onSubmit={handleSubmit}>
        <label htmlFor="feedback">Comments?</label>
            <input
                type="textarea"
                name="feedback"
                onChange={(event) => setFeedback(event.target.value)}
            />
            <button type="submit">Next</button>
        </form>
    </>);
}

export default Comments;