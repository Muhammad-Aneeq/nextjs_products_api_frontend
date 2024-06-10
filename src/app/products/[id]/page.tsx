import { getUserProducts } from "@/app/server";
import ProductsTable from "@/components/Tables/ProductsTable";
import React from "react";

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const products = await getUserProducts(id);

  return <ProductsTable data={products} />;
};

export default page;
