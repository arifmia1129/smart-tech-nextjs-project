import React from "react";
import { Breadcrumb, Button, Layout, Menu, theme } from "antd";
import Link from "next/link";
import Image from "next/image";
const { Header, Content, Footer } = Layout;
const RootLayout = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout">
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link style={{ display: "flex", alignItems: "center" }} href="/">
            <Image src="/logo.png" alt="logo" height={50} width={200} />
          </Link>
        </div>
        <div>
          <Link href="/pc-builder">
            <Button size="large">PC Builder</Button>
          </Link>
        </div>
      </Header>
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <div
          className="site-layout-content"
          style={{
            minHeight: "100vh",
          }}
        >
          {children}
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default RootLayout;
