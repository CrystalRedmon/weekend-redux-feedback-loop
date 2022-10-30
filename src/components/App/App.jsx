import React from 'react';
import axios from 'axios';
import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import Feeling from '../Feeling/Feeling';
import Review from '../Review/Review';



function App() {

  /// useEffect for onload page
  useEffect(() => {

    /// GET method
    /// UNSURE WHAT I'M SUPPOSE TO BE GETTING AT THIS POINT
    /// SINCE THERE IS NO FEEDBACK TO GET YET.
    /// SHOULD I HAVE QUESTIONS IN THE DB/REDUX STORE


  })



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
        <Route path='/feedback/review' exact>
          <Review  />
        </Route>

      </div>
    </Router>
  );
}

export default App;
