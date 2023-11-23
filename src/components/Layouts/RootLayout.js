import React from "react";
import { Breadcrumb, Button, Layout, Menu, theme } from "antd";
import Link from "next/link";
const { Header, Content, Footer } = Layout;
import { signOut, useSession } from "next-auth/react";
import SmartTechFooter from "../ui/SmartTechFooter";
const RootLayout = ({ children }) => {
  const { data: session } = useSession();
  return (
    <Layout className="layout">
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "sticky",
          top: 0,
          zIndex: 50,
          backgroundColor: "#F47C13",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link style={{ display: "flex", alignItems: "center" }} href="/">
            <h1 style={{ color: "#fff", fontWeight: "bold" }}>Smart Tech</h1>
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
              <Button
                style={{ color: "#fff" }}
                onClick={() => signOut()}
                type="link"
                size="large"
              >
                Logout
              </Button>
            ) : (
              <Link href="/login">
                <Button style={{ color: "#fff" }} type="link" size="large">
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
      <SmartTechFooter />
    </Layout>
  );
};
export default RootLayout;
