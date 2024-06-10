import React from "react";
import { getAllProducts } from "../server";
import ProductsTable from "@/components/Tables/ProductsTable";

const page = async () => {
  const products = await getAllProducts();

  return <ProductsTable data={products} />;
};

export default page;
