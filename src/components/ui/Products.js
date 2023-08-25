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
            key={product._id}
            className="gutter-row"
            xs={24}
            sm={12}
            md={8}
            lg={6}
            style={{ marginBottom: 20 }}
          >
            <Card style={{ height: 700 }} bordered={false}>
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
                  Brand: {product?.features?.brand}
                </p>
                <p style={{ color: "gray" }}>
                  Model: {product?.features?.model}
                </p>
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
                Price: {product.price}
              </h3>
              <h4
                style={{
                  marginTop: 5,
                  color: "orange",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {product.status}
              </h4>
              <h4
                style={{
                  marginTop: 5,
                  color: "blue",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Rating: {product.individualRating} of 5
              </h4>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 40,
                  height: 50,
                }}
              >
                <Button
                  onClick={() => handleChoseProduct(product)}
                  type="primary"
                  size="large"
                >
                  Add to Builder
                </Button>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: 50,
                }}
              >
                <Link href={`products/details/${product._id}`}>
                  <Button type="primary" size="large">
                    Details
                  </Button>
                </Link>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Products;
