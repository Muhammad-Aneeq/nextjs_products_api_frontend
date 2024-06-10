import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Product, ProductsTableProps } from "@/app/types";
const ProductsTable = ({ data }: ProductsTableProps) => {
  return (
    <Table>
      <TableCaption>A list of your all user specific produtcs.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((item: Product) => (
          <TableRow key={item._id}>
            <TableCell className="font-medium">{item.name}</TableCell>
            <TableCell>{item.description}</TableCell>
            <TableCell>{item.price}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ProductsTable;
