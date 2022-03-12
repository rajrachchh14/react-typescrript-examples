import React, { Component } from 'react';
import { Layout, Menu } from 'antd';

interface InvoiceInterFace {
  objInvoice: {
    customer: string;
    invoicesData: { id: number; product: string; price: string }[];
  };

  logo?: string;
}

// props: InvoiceInterFace
function InvoiceList(props: InvoiceInterFace) {
  return (
    // <React.Fragement>
    <div>
      <b> Customer Name </b> :: {props.MyData.customer}
      {/* {console.log(props.MyData.customer)} */}
    </div>
    // </React.Fragement>.
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
      <InvoiceList MyData={data} />
    </div>
  );
}
export default List;
