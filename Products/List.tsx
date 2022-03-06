import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import { Row, Col, Card } from 'antd';

export type CartItemType = {
  id: number;
  category: string;
  // description: string;
  // image: string;
  price: number;
  title: string;
  amount: number;
};

function List() {
  const [ArrayProduct, SetProductArray] = useState([]);
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products`).then((res) => {
      console.log(res.data);
      SetProductArray(res.data);
    });
  });

  return (
    <div>
      <div className="site-card-wrapper">
        <Row gutter={24}>
          {ArrayProduct.map((data) => {
            return (
              <Col span={8}>
                <Card title={data.title} bordered={false}>
                  <b> ID : </b> {data.id}
                  <br />
                  <b> Price : </b> {data.price}
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}
export default List;
