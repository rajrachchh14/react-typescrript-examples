import React, { Component } from 'react';
import { Layout, Menu } from 'antd';

interface InvoiceInterFace {
  customer: string;

  invoices: [id: number, product: string, price: string];
}

const InvoiceList = () => {
  return <div>datq</div>;
};

function List() {
  const data = {
    customer: 'Mike',
    invoices: [
      {
        id: 1,
        product: 'apple',
        price: 100,
      },
      {
        id: 2,
        product: 'mango',
        price: 200,
      },
    ],
  };

  return (
    <div>
      <InvoiceList MyData={data} />
    </div>
  );
}
export default List;
