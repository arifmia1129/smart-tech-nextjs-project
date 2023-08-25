import RootLayout from "@/components/Layouts/RootLayout";
import HomeCarousel from "@/components/ui/Carousel";
import FeaturedCategories from "@/components/ui/FeaturedCategories";
import HeaderFeature from "@/components/ui/HeaderFeature";
import { Card, Col, Image, Row } from "antd";
import React from "react";
import Marquee from "react-fast-marquee";

const Home = ({ categories }) => {
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
      <FeaturedCategories categories={categories} />
    </div>
  );
};

export default Home;

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/categories");
  const data = await res.json();
  console.log(data);

  return {
    props: {
      categories: data,
    },
  };
};
