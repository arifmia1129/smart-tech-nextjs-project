import RootLayout from "@/components/Layouts/RootLayout";
import SelectProductFromCatory from "@/components/ui/SelectProductFromCatory";
import { Button } from "antd";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";

const PCBuilder = ({ categories }) => {
  const [isCompleteBtnDisable, setIsCompleteBtnDisable] = useState(true);
  const { cpu, motherboard, ram, powerSupply, monitor, storage, other } =
    useSelector((state) => state.buildPc);

  useEffect(() => {
    if (
      cpu &&
      motherboard &&
      monitor &&
      ram &&
      powerSupply &&
      storage &&
      other
    ) {
      setIsCompleteBtnDisable(false);
    }
  }, [cpu, motherboard, monitor, ram, powerSupply, storage, other]);
  return (
    <div
      style={{ maxWidth: "1280px", marginLeft: "auto", marginRight: "auto" }}
    >
      <h2 style={{ textAlign: "center", color: "blue" }}>
        PC Builder - Build Your Own Computer - Smart Tech
      </h2>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <Button
          onClick={() => toast.success("Successfully build your PC")}
          disabled={isCompleteBtnDisable}
          type="primary"
          size="large"
        >
          Complete Your PC Build
        </Button>
      </div>
      <SelectProductFromCatory categories={categories} />
    </div>
  );
};

export default PCBuilder;

PCBuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/categories");
  const data = await res.json();

  return {
    props: {
      categories: data?.data,
    },
  };
};
