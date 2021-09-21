import React, { useContext } from 'react';
import { 재고context } from '../state/remain';

export default function Test({ i }) {
  let 재고 = useContext(재고context);

  return (
    <>
      <p>재고: {재고[i]}</p>
    </>
  );
}
