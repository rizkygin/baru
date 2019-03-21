import React from 'react';
import ReactDOM from 'react-dom';
// import './Custom.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const items = ['Home','Tab1','Tab 2','Tab 3','Tab 4'];
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
