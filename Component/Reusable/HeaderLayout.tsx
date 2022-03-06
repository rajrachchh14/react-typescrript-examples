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
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">About</Menu.Item>
          <Menu.Item key="3">Contact</Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
}
export default HeaderLayout;
