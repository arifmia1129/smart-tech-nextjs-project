import RootLayout from "@/components/Layouts/RootLayout";
import HomeCarousel from "@/components/ui/Carousel";
import HeaderFeature from "@/components/ui/HeaderFeature";
import { Col, Row } from "antd";
import React from "react";
import Marquee from "react-fast-marquee";

const Home = () => {
  return (
    <div>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        <Col className="gutter-row" span={18} xs={24} sm={18} md={18} lg={18}>
          <HomeCarousel />
        </Col>
        <Col className="gutter-row" xs={24} sm={6} md={6} lg={6}>
          <HeaderFeature />
        </Col>
      </Row>
      <Marquee style={{ marginTop: 20 }}>
        Smart Tech lanuch PC Builder. So now build your dream PC with Smart
        Tech.
      </Marquee>
    </div>
  );
};

export default Home;

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
