import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

function List() {
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products`).then((res) => {
      console.log(res);
    });
  });

  return <div>List List List</div>;
}
export default List;
