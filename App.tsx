import React, { Component } from 'react';
// import List from './Products/List';
import List from './Examples/List';
import { Layout, Menu } from 'antd';
import SiteLayout from './Component/Reusable/SiteLayout';
import PropsExample1 from './Examples/PropsExample1';
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <div>
      <SiteLayout>
        <PropsExample1 name="raj" />
      </SiteLayout>
    </div>
  );
}
export default App;
