import RootLayout from "@/components/Layouts/RootLayout";
import HomeCarousel from "@/components/ui/Carousel";
import FeaturedCategories from "@/components/ui/FeaturedCategories";
import HeaderFeature from "@/components/ui/HeaderFeature";
import Products from "@/components/ui/Products";
import { Card, Col, Image, Row } from "antd";
import React from "react";
import Marquee from "react-fast-marquee";

const Home = ({ categories, products }) => {
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
      <Products products={products} />
    </div>
  );
};

export default Home;

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

function selectRandomProducts(data, numProducts = 6) {
  if (numProducts > data.length) {
    return;
  }

  const randomProducts = [];
  const copyData = [...data];

  while (randomProducts.length < numProducts) {
    const randomIndex = Math.floor(Math.random() * copyData.length);
    randomProducts.push(copyData.splice(randomIndex, 1)[0]);
  }

  return randomProducts;
}

export const getStaticProps = async () => {
  const res = await fetch(
    "https://smart-tech-arifmia1129.vercel.app/api/categories"
  );
  const data = await res.json();
  const res2 = await fetch(
    "https://smart-tech-arifmia1129.vercel.app/api/products"
  );
  const data2 = await res2.json();
  const products = selectRandomProducts(data2.data);
  return {
    props: {
      categories: data?.data,
      products,
    },
  };
};
