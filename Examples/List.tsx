import React, { Component } from 'react';
import { Layout, Menu } from 'antd';

interface InvoiceInterFace {
  myData: {
    customer: string;
    invoicesData: { id: number; product: string; price: string }[];
  };

  logo?: string;
}

function InvoiceList(props: InvoiceInterFace) {
  return (
    <div>
      <b> Customer Name </b> ::{props.myData.customer}
      {/* {console.log(props.myData.customer)} */}
    </div>
  );
}

function List() {
  const data = {
    customer: 'Mike',
    invoicesData: [
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
      <InvoiceList myData={data} />
    </div>
  );
}
export default List;
