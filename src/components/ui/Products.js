import { Button, Card, Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Products = ({ products }) => {
  return (
    <div style={{ marginTop: 30, marginBottom: 10 }}>
      <h1 style={{ textAlign: "center", color: "gray" }}>Products</h1>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        {products?.map((product) => (
          <Col
            key={product.id}
            className="gutter-row"
            xs={24}
            sm={12}
            md={8}
            lg={6}
            style={{ marginBottom: 20 }}
          >
            <Link href="">
              <Card style={{ height: 600 }} bordered={false}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Image
                    src={product?.imageUrl}
                    alt="banner"
                    height={150}
                    width={150}
                  />
                </div>
                <h2 style={{ textAlign: "center" }}>{product?.name}</h2>
                <div style={{ height: 150 }}>
                  <p style={{ color: "gray" }}>
                    Brand: {product.features.brand}
                  </p>
                  <p style={{ color: "gray" }}>
                    Model: {product.features.model}
                  </p>
                  <p style={{ color: "gray" }}>
                    Specification: {product.features.specification}
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
                  Price: {product.price}
                </h3>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 40,
                    height: 50,
                  }}
                >
                  <Button type="primary" size="large">
                    Add to Builder
                  </Button>
                </div>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Products;
