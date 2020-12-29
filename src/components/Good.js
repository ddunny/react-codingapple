import React from "react";

export default function Good({ title, content, price, img }) {
  // props 를 해체한 것
  return (
    <>
      <div className="col-md-4">
        <img src={img} width="100%" alt={"판매상품"} />
        <h4>{title}</h4>
        <p>{content}</p>
        <p>{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
      </div>
    </>
  );
}
