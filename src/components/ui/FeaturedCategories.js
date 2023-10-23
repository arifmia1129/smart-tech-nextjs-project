import { Card, Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeaturedCategories = ({ categories }) => {
  return (
    <div style={{ marginTop: 30, marginBottom: 10 }}>
      <h1
        style={{
          textAlign: "center",
          color: "#F47C13",
          fontWeight: "bold",
          fontSize: 42,
        }}
      >
        Featured Categories
      </h1>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        {categories?.map((category) => (
          <Col
            key={category._id}
            className="gutter-row"
            xs={24}
            sm={12}
            md={8}
            lg={6}
            style={{ marginBottom: 20 }}
          >
            <Link href={`/products/${category?.category}`}>
              <Card bordered={false}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Image
                    src={category?.imageUrl}
                    alt="banner"
                    height={150}
                    width={150}
                  />
                </div>
                <h2 style={{ textAlign: "center" }}>{category?.category}</h2>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FeaturedCategories;
