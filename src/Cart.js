import React from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';

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
    </div>
  );
}

// redux를 쓰는 이유
// 깊은 하위 컴포넌트들도 props 여러번 전송없이 state를 직접 갖다쓸 수 있음
function state를props화(state) {
  return {
    state: state,
  };
}

export default connect(state를props화)(Cart); // Cart 에서 store 데이터를 사용하기 위함

// export default Cart;
