import {useHistory} from "react-router-dom";


function Success() {

    const history = useHistory();
    console.log("It's a success")




    const handleClick =()=>{

        history.push('/feedback');

    }
    return (<>
        <h2>🌟 Feedback</h2>

        <h2>Thank You!</h2>
        <button onClick={handleClick} >Leave New Feedback</button>



    </>)
}

export default Success;