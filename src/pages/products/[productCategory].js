import RootLayout from "@/components/Layouts/RootLayout";
import Products from "@/components/ui/Products";
import { useRouter } from "next/router";
import React from "react";

const ProductsWithCategory = ({ products }) => {
  const router = useRouter();
  return (
    <div>
      <Products products={products} />
    </div>
  );
};

export default ProductsWithCategory;

ProductsWithCategory.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async ({ params }) => {
  const res = await fetch("http://localhost:3000/api/products");
  const data = await res.json();

  let filteredCategory;

  filteredCategory = data?.data?.filter(
    (product) => product.category === params.productCategory
  );

  return {
    props: {
      products: filteredCategory,
    },
  };
};
