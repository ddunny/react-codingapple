import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

let 초기값 = [
  { id: 0, name: '나이키', quan: 1 },
  { id: 1, name: '아디다스', quan: 2 },
  { id: 2, name: '스케쳐스', quan: 2 },
  { id: 3, name: '뉴발란스', quan: 2 },
];

function reducer(state = 초기값, 액션) {
  console.log('액션: ', 액션);
  // 데이터 수정을 담음

  let copy = [...state];
  const target = 액션.payload;

  if (액션.type === '수량증가') {
    copy[target].quan++;

    // 데이터 수정조건 담기
    return copy;
  }
  if (액션.type === '수량감소') {
    if (copy[target].quan - 1 < 1) {
      alert('더 이상 수량을 감소할 수 없습니다.');
      return copy;
    }

    copy[target].quan--;

    // 데이터 수정조건 담기
    return copy;
  } else {
    return state;
  }
}

let store = createStore(reducer);

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
