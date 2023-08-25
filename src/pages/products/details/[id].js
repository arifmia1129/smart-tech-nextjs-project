import RootLayout from "@/components/Layouts/RootLayout";
import { Button, Card } from "antd";
import Image from "next/image";
import React from "react";

const ProductDetails = ({ product }) => {
  return (
    <>
      <Card
        style={{ maxWidth: "780px", marginLeft: "auto", marginRight: "auto" }}
        bordered={false}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Image
            src={product?.imageUrl}
            alt="banner"
            height={150}
            width={150}
          />
        </div>

        <h2 style={{ textAlign: "center" }}>{product?.name}</h2>
        <h4 style={{ textAlign: "center" }}>Category: {product?.category}</h4>
        <p style={{ textAlign: "center" }}>Status: {product?.status}</p>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <p>Individual Rating: {product?.individualRating}</p>
          <p>Average Rating: {product?.averageRating}</p>
        </div>
        <h2>Features:</h2>
        <div style={{ height: 150 }}>
          <p style={{ color: "gray" }}>Brand: {product?.features?.brand}</p>
          <p style={{ color: "gray" }}>Model: {product?.features?.model}</p>
          <p style={{ color: "gray" }}>
            Specification: {product?.features?.specification}
          </p>
        </div>
        <h3
          style={{
            marginTop: 5,
            color: "orange",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Price: {product?.price}
        </h3>
        <p>{product?.description}</p>
      </Card>
    </>
  );
};

export default ProductDetails;

export const getServerSideProps = async ({ params }) => {
  const res = await fetch(
    `https://smart-tech-arifmia1129.vercel.app/api/products?id=${params.id}`
  );
  const data = await res.json();
  return {
    props: {
      product: data.data,
    },
  };
};

ProductDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
