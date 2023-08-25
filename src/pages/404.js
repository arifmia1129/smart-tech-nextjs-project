import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const NotFound = () => {
  const router = useRouter();
  setTimeout(() => {
    router.push("/");
  }, 3000);
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        objectFit: "fill",
      }}
    >
      <Image
        src="https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7888.jpg"
        alt="logo"
        height={500}
        width={500}
      />
    </div>
  );
};

export default NotFound;
