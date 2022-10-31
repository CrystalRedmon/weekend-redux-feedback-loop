import React from 'react';
import axios from 'axios';
import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import Feeling from '../Feeling/Feeling';
import Review from '../Review/Review';
import Success from '../Success/Success';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Card from '@mui/material/Card';


function App() {

  /// useEffect for onload page
  useEffect(() => {
    fetchFeedback();
    /// GET method
    /// UNSURE WHAT I'M SUPPOSE TO BE GETTING AT THIS POINT
    /// SINCE THERE IS NO FEEDBACK TO GET YET.
    /// SHOULD I HAVE QUESTIONS IN THE DB/REDUX STORE

  })

    const fetchFeedback= ()=>{

      axios({
        method: 'GET',
        url: '/feedback/'
      })
      .then(response=>{
        console.log('Fetch feedback successful, ', response.data);
        ///SHOULD I ALSO COMPLETE A DISPATCH
      })
      .catch(error=>{
        console.log('GET/fetchFeedback failed, ', error);
      });


    }



  /// ESTABLISH ROUTES

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>

        <Route path='/feedback' exact>
          <Feeling />
        </Route>


        <Card variant="outlined"></Card>
        <Route path='/understanding' exact>
          <Understanding />
        </Route>
        
        <Route path='/support' exact>
          <Support />
        </Route>

        <Route path='/comments' exact>
          <Comments />
        </Route>

        <Route path='/feedback/review' exact>
          <Review />
        </Route>
      
        <Route path='/success'>
          <Success />
        </Route>

      </div>
    </Router>
  );
}

export default App;
