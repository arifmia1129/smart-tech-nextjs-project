import { Button, Input } from "antd";
import Image from "next/image";
import React from "react";

const HeaderFeature = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", height: 500 }}>
      <div>
        <Image
          src={
            "https://www.startech.com.bd/image/catalog/home/banner/small/budget-desktop-pc-18k.webp"
          }
          alt="banner"
          height={200}
          width={300}
        />

        <div
          style={{
            background: "#ffe8a1",
            padding: 5,
            borderRadius: 10,
            marginTop: 20,
          }}
          width={300}
        >
          <h3 style={{ textAlign: "center" }}>Compare Product</h3>
          <h5 style={{ textAlign: "center", color: "gray", marginTop: -15 }}>
            Chose two product to compare
          </h5>
          <div style={{ margin: 20 }}>
            <div style={{ margin: 5 }}>
              <Input placeholder="Search Product and Select" />
            </div>
            <div style={{ margin: 5 }}>
              <Input placeholder="Search Product and Select" />
            </div>
            <Button type="dashed" block>
              Compare Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderFeature;
