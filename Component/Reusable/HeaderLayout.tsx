import React, { Component } from 'react';
import './style.css';
import { Layout, Menu } from 'antd';
const { Header } = Layout;
function HeaderLayout() {
  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
}
export default HeaderLayout; 
