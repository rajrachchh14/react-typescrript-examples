import React, { Component } from 'react';
import List from './Products/List';

import { Layout, Menu } from 'antd';
import SiteLayout from './Component/Reusable/SiteLayout';
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <div>
      <SiteLayout>
        <List />
      </SiteLayout>
    </div>
  );
}
export default App;
