import { Button, Card, Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const Category = ({ category }) => {
  const { cpu, motherboard, ram, powerSupply, monitor, storage, other } =
    useSelector((state) => state.buildPc);
  let choosenProduct;
  if (category.category === "CPU") {
    choosenProduct = cpu;
  } else if (category.category === "Motherboard") {
    choosenProduct = motherboard;
  } else if (category.category === "RAM") {
    choosenProduct = ram;
  } else if (category.category === "Power Supply") {
    choosenProduct = powerSupply;
  } else if (category.category === "Monitor") {
    choosenProduct = monitor;
  } else if (category.category === "Storage") {
    choosenProduct = storage;
  } else if (category.category === "Other") {
    choosenProduct = other;
  }
  return (
    <Card bordered style={{ marginTop: 10 }}>
      <Link href={`/products/${category.category}`}>
        <Row
          justify="space-between"
          align="middle"
          style={{ marginLeft: 20, marginRight: 20 }}
        >
          <Col xs={24} md={12} lg={8}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Image
                src={category?.imageUrl}
                alt="banner"
                height={50}
                width={50}
              />
            </div>
            <h2 style={{ textAlign: "center" }}>{category?.category}</h2>
          </Col>

          {choosenProduct && (
            <Col xs={24} md={12} lg={8}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Image
                  src={choosenProduct?.imageUrl}
                  alt="banner"
                  height={50}
                  width={50}
                />
              </div>
              <h3 style={{ textAlign: "center" }}>{choosenProduct?.name}</h3>
              <h5 style={{ textAlign: "center", marginTop: -10 }}>
                {choosenProduct?.price}
              </h5>
            </Col>
          )}

          <Col xs={24} md={12} lg={4}>
            <Button type="primary" size="large" block>
              Choose
            </Button>
          </Col>
        </Row>
      </Link>
    </Card>
  );
};

export default Category;
