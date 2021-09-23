import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import './Cart.scss';

function Cart(props) {
  return (
    <div>
      <Table responsive>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경</th>
        </tr>
        {props.state.map((v, i) => (
          <tr key={`cart-${i}`}>
            <td>{v.id}</td>
            <td>{v.name}</td>
            <td>{v.quan}</td>
            <td>
              <button
                onClick={() => {
                  props.dispatch({ type: '수량증가', payload: i });
                }}>
                +
              </button>
              <button
                onClick={() => {
                  props.dispatch({ type: '수량감소', payload: i });
                }}>
                -
              </button>
            </td>
          </tr>
        ))}
      </Table>
      {props.alert열렸니 ? (
        <div className='my-alert2'>
          <p>지금 구매하시면 신규할인 20%</p>
          <button
            onClick={() => {
              props.dispatch({ type: '얼럿닫기' });
            }}>
            닫기
          </button>
        </div>
      ) : null}
    </div>
  );
}

// redux를 쓰는 이유
// 깊은 하위 컴포넌트들도 props 여러번 전송없이 state를 직접 갖다쓸 수 있음
function state를props화(state) {
  console.log('state를props화 ', state);
  return {
    state: state.reducer,
    alert열렸니: state.reducer2, //리듀서2에 있는거 가져오는법
  };
}

export default connect(state를props화)(Cart); // Cart 에서 store 데이터를 사용하기 위함

// export default Cart;
