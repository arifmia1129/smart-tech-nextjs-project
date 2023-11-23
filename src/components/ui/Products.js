import {
  addCpu,
  addMonitor,
  addMotherboard,
  addOther,
  addPowerSupply,
  addRam,
  addStorage,
} from "@/redux/features/builPc/buildPcSlice";
import { Button, Card, Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";

const Products = ({ products }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleChoseProduct = (product) => {
    if (product.category === "CPU") {
      dispatch(addCpu(product));
    } else if (product.category === "Motherboard") {
      dispatch(addMotherboard(product));
    } else if (product.category === "RAM") {
      dispatch(addRam(product));
    } else if (product.category === "Power Supply") {
      dispatch(addPowerSupply(product));
    } else if (product.category === "Monitor") {
      dispatch(addMonitor(product));
    } else if (product.category === "Storage") {
      dispatch(addStorage(product));
    } else if (product.category === "Other") {
      dispatch(addOther(product));
    }
    router.push("/pc-builder");
  };
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
        Products
      </h1>

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
            key={product._id}
            className="gutter-row"
            xs={24}
            sm={12}
            md={8}
            lg={6}
            style={{ marginBottom: 20 }}
          >
            <Card bordered={false}>
              <Link href={`/products/details/${product._id}`}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    src={product?.imageUrl}
                    alt="banner"
                    height={200}
                    width={150}
                  />
                </div>
                <h2
                  style={{
                    textAlign: "center",
                    color: "#F47C13",
                    fontSize: 28,
                    fontWeight: "bold",
                    height: 80,
                  }}
                >
                  {product?.name}
                </h2>
                <div style={{ height: 100 }}>
                  <ul>
                    <li style={{ color: "gray" }}>
                      Brand: {product?.features?.brand}
                    </li>
                    <li style={{ color: "gray" }}>
                      Model: {product?.features?.model}
                    </li>
                    <li style={{ color: "gray" }}>
                      Specification: {product?.features?.specification}
                    </li>
                  </ul>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      height: 30,
                      width: 30,
                      backgroundColor: "#FF7A64",
                      borderRadius: "100%",
                      margin: 5,
                    }}
                  ></div>
                  <div
                    style={{
                      height: 30,
                      width: 30,
                      backgroundColor: "#57BFC0",
                      borderRadius: "100%",
                      margin: 5,
                    }}
                  ></div>
                  <div
                    style={{
                      height: 30,
                      width: 30,
                      backgroundColor: "#FFB551",
                      borderRadius: "100%",
                      margin: 5,
                    }}
                  ></div>
                </div>
              </Link>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h3
                  style={{
                    color: "#F47C13",
                    fontWeight: "bold",
                    textAlign: "center",
                    fontSize: 42,
                    marginRight: 10,
                  }}
                >
                  {product.price}
                </h3>

                <Button
                  onClick={() => handleChoseProduct(product)}
                  size="large"
                  style={{
                    borderColor: "#F47C13",
                    color: "#F47C13",
                    fontWeight: "bold",
                    fontSize: 16,
                  }}
                >
                  Add for Builder
                </Button>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Products;
