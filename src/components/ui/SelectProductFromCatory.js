import { Button, Card } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SelectProductFromCatory = ({ categories }) => {
  return (
    <>
      <div>
        {categories?.map((category) => (
          <Card key={category.id} bordered style={{ marginTop: 10 }}>
            <Link href={`/products/${category.category}`}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginLeft: 20,
                  marginRight: 20,
                }}
              >
                <div style={{ width: 200 }}>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Image
                      src={category?.imageUrl}
                      alt="banner"
                      height={50}
                      width={50}
                    />
                  </div>
                  <h2 style={{ textAlign: "center" }}>{category?.category}</h2>
                </div>
                <Button type="primary" size="large">
                  Choose
                </Button>
              </div>
            </Link>
          </Card>
        ))}
      </div>
    </>
  );
};

export default SelectProductFromCatory;
