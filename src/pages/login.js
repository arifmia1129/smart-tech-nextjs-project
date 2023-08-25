import RootLayout from "@/components/Layouts/RootLayout";
import { Button } from "antd";
import React, { useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Login = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session?.user) {
      router.push("/");
    }
  }, [session, router]);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        width: "100vw",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button onClick={() => signIn("google")} type="dashed" size="large">
            Login With Google
          </Button>
        </div>
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 20 }}
        >
          <Button onClick={() => signIn("github")} type="dashed" size="large">
            Login With Github
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;

Login.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
