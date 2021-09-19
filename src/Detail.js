import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';
import { Nav } from 'react-bootstrap';

let 박스 = styled.div`
  padding: 20px;
`;

let 제목 = styled.h4`
  font-size: 35px;
  color: ${(props) => props.색상};
`;

export default function Detail({ shoes, 재고, 재고변경 }) {
  let [showAlert, showAlert변경] = useState(true);
  let [inputData, inputData변경] = useState('');

  let [누른탭, 누른탭변경] = useState(0);

  useEffect(() => {
    // 1. 컴포넌트가 보일 때 실행, 컴포넌트가 업데이트 될 때 실행 (컴포넌트 렌더링이 끝난 후 실행)
    let timer = setTimeout(() => {
      showAlert변경(false);
    }, 2000); // setTimeout : 변수에 저장해서 사용 많이 한다 ! 나중에 삭제할일도 있어서.
    // 2. 컴포넌트가 사라질 때 코드를 실행시킬 수도 있음 . 무조건 함수를 써야 함 (구 언마운트역할)
    console.log('안녕');
    return function 어쩌구() {
      //실행할 코드
      clearTimeout(timer);
    };

    // 3. 여러개를 사용하고 싶다면 여러개 써도 된다. (실행 순서는 순차적!)
  }, [showAlert]);

  let { id } = useParams();
  let history = useHistory();
  let { title, content, price } = shoes.filter((v) => v.id === id * 1)[0];

  return (
    <>
      <div className='container'>
        <박스>
          <제목 className='red'>제목을 써봅니다.</제목>
        </박스>
        {inputData}
        <input
          onChange={(e) => {
            inputData변경(e.target.value);
          }}
        />
        {showAlert ? (
          <div className='my-alert'>
            <p>재고가 얼마 남지 않았습니다.</p>
          </div>
        ) : null}
        <div className='row'>
          <div className='col-md-6'>
            <img src={`https://codingapple1.github.io/shop/shoes${id * 1 + 1}.jpg`} width='100%' alt='이미지' />
          </div>
          <div className='col-md-6 mt-4'>
            <h4 className='pt-5'>{title}</h4>
            <p>{content}</p>
            <p>{price}</p>
            <Info 재고={재고}></Info>
            <button
              className='btn btn-danger'
              onClick={() => {
                재고변경([9, 10, 11]);
              }}>
              주문하기
            </button>
            <button
              className='btn btn-danger'
              onClick={() => {
                history.goBack();
              }}>
              뒤로가기
            </button>
          </div>
        </div>

        <Nav className='mt-5' variant='tabs' defaultActiveKey='link-0'>
          <Nav.Item>
            <Nav.Link
              eventKey='link-0'
              onClick={() => {
                누른탭변경(0);
              }}>
              Active
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey='link-1'
              onClick={() => {
                누른탭변경(1);
              }}>
              Option 2
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <TabContent 누른탭={누른탭}></TabContent>
      </div>
    </>
  );
}

function Info({ 재고 }) {
  return <p>재고: {재고[0]}</p>;
}

function TabContent({ 누른탭 }) {
  console.log('tab');
  if (누른탭 === 0) {
    return <div>0번째 내용입니다.</div>;
  } else if (누른탭 === 1) {
    return <div>1번째 내용입니다.</div>;
  }
}
