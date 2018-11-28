import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, applyMiddleware} from 'redux'; 
import rootReducer from './redux/reducers'
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));
