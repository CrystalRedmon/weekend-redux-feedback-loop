import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';


function Success() {

    const history = useHistory();
    console.log("It's a success")




    const handleClick = () => {

        history.push('/feedback');

    }
    return (<>
        <h2>🌟 Feedback</h2>

        <h2>Thank You!</h2>
        
        <Button
            onClick={handleClick}
            type="submit"
            small
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
        >
            Leave New Feedback
        </Button>


    </>)
}

export default Success;