import React from 'react';
import { Link } from 'react-router-dom';
import Test from './Test';

export default function Good({ shoe, i }) {
  return (
    <>
      <div className='col-md-4'>
        <Link to={`detail/${i}`}>
          <img src={`https://codingapple1.github.io/shop/shoes${i + 1}.jpg`} width='100%' alt={'판매상품'} />
          <h4>{shoe.title}</h4>
          <p>{shoe.content}</p>
          <p>{shoe.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
          <Test i={i}></Test>
        </Link>
      </div>
    </>
  );
}
