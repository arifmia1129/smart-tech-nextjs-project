import React from "react";
import { Carousel } from "antd";
import Image from "next/image";

const HomeCarousel = () => (
  <Carousel autoplay>
    <div>
      <Image
        src={
          "https://www.startech.com.bd/image/cache/catalog/offer-page/gadget-fest-aug/live-now-gadget-fest-home-banner-982x500.webp"
        }
        alt="banner"
        layout="responsive" // Use responsive layout
        width={982}
        height={500}
      />
    </div>
    <div>
      <Image
        src={
          "https://www.startech.com.bd/image/cache/catalog/home/banner/gigbyte-month-live-now-home-banner-982x500.webp"
        }
        alt="banner"
        layout="responsive" // Use responsive layout
        width={982}
        height={500}
      />
    </div>
    <div>
      <Image
        src={
          "https://www.startech.com.bd/image/cache/catalog/home/banner/express-delivery-home-banner-june-982x500.webp"
        }
        alt="banner"
        layout="responsive" // Use responsive layout
        width={982}
        height={500}
      />
    </div>
  </Carousel>
);

export default HomeCarousel;
