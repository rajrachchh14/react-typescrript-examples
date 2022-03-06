import React, { Component } from 'react';
import { Layout } from 'antd';
const { Content, Footer } = Layout;
import HeaderLayout from './HeaderLayout';

function SiteLayout(props) {
  return (
    <div>
      <HeaderLayout />

      <Layout>
        <Content className="site-layout" style={{ marginTop: 64 }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380 }}
          >
            {props.children}
          </div>
        </Content>
      </Layout>
    </div>
  );
}
export default SiteLayout;
