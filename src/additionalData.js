// additionalData.js

export const getAdditionalStaticProps = async () => {
  // Fetch additional data from your desired source
  const res = await fetch("http://localhost:3000/api/products");
  const data = await res.json();

  const randomData = selectRandomProducts(data?.data);

  return {
    props: {
      products: randomData,
    },
  };
};
