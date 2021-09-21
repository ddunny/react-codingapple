import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

let store = createStore(() => {
  return [
    { id: 0, name: '나이키', quan: 1 },
    { id: 1, name: '아디다스', quan: 2 },
    { id: 2, name: '스케쳐스', quan: 2 },
    { id: 3, name: '뉴발란스', quan: 2 },
  ];
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
