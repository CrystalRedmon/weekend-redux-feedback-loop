import {useDispatch} from 'react-redux';
import {useState, useHistory} from 'react';


function Feedback(){

    /// will send each response to redux store as we go along each feedback question
    const dispatch = useDispatch();

    ///
    const [feedback, setFeedback] = useState(0);
    
    
    
    
    
    
    
    return(<>
    
    <h3>This is my feedback question</h3>
    
    
    </>)

}

export default Feedback;