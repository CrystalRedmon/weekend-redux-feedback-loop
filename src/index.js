import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';


const feedback = (state = {}, action) => {
    switch (action.type) {
        case 'FEELING':
            return {
                ...state,
                feeling: action.payload
            }
        case 'UNDERSTANDING':
            return {
                ...state,
                understanding: action.payload
            }
        case 'SUPPORT':
            return {
                ...state,
                support: action.payload
            }
        case 'COMMENTS':
            return {
                ...state,
                comments: action.payload
            }
        case 'GET_FEEDBACK':
            return state;
    }
    return state;
}



const storeInstance = createStore(


    combineReducers({
        feedback

    }), applyMiddleware(logger)
)


ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
