import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import App from './components/App';

ReactDOM.render(
      <Provider store={ store }>
            <App />
      </Provider>
      , document.getElementById('root'));
registerServiceWorker();
