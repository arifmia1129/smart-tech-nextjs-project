import React from "react";
import { Breadcrumb, Button, Layout, Menu, theme } from "antd";
import Link from "next/link";
import Image from "next/image";
const { Header, Content, Footer } = Layout;
import { signOut, useSession } from "next-auth/react";
const RootLayout = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { data: session } = useSession();
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
        <div style={{ display: "flex", alignItems: "center" }}>
          <div>
            <Link href="/pc-builder">
              <Button size="large">PC Builder</Button>
            </Link>
          </div>
          <div>
            {session?.user ? (
              <Button onClick={() => signOut()} type="link" size="large">
                Logout
              </Button>
            ) : (
              <Link href="/login">
                <Button type="link" size="large">
                  Login
                </Button>
              </Link>
            )}
          </div>
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
        Smart Tech ©2023
      </Footer>
    </Layout>
  );
};
export default RootLayout;
