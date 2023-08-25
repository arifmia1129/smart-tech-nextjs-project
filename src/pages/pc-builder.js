import RootLayout from "@/components/Layouts/RootLayout";
import SelectProductFromCatory from "@/components/ui/SelectProductFromCatory";

const PCBuilder = ({ categories }) => {
  return (
    <div
      style={{ maxWidth: "1280px", marginLeft: "auto", marginRight: "auto" }}
    >
      <h2 style={{ textAlign: "center", color: "blue" }}>
        PC Builder - Build Your Own Computer - Smart Tech
      </h2>
      <SelectProductFromCatory categories={categories} />
    </div>
  );
};

export default PCBuilder;

PCBuilder.getLayout = function getLayout(page) {
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
