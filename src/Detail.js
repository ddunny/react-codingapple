import React from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";

let 박스 = styled.div`
  padding: 20px;
`;

let 제목 = styled.h4`
  font-size: 35px;
  color: ${(props) => props.색상};
`;

export default function Detail({ shoes }) {
  let { id } = useParams();
  let history = useHistory();
  let { title, content, price } = shoes.filter((v) => v.id === id * 1)[0];

  return (
    <>
      <div className="container">
        <박스>
          <제목 색상="blue">제목을 써봅니다.</제목>
        </박스>
        <div className="row">
          <div className="col-md-6">
            <img
              src={`https://codingapple1.github.io/shop/shoes${id * 1 + 1}.jpg`}
              width="100%"
              alt="이미지"
            />
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{title}</h4>
            <p>{content}</p>
            <p>{price}</p>
            <button className="btn btn-danger">주문하기</button>
            <button
              className="btn btn-danger"
              onClick={() => {
                history.goBack();
              }}
            >
              뒤로가기
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
