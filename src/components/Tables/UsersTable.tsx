import { User, UserTableProps } from "@/app/types";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { FaLink } from "react-icons/fa6";

export function UserTable({ data }: UserTableProps) {
  return (
    <Table>
      <TableCaption>A list of your all users.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">First Name</TableHead>
          <TableHead>Last Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Age</TableHead>
          <TableHead>User Products</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((item: User) => (
          <TableRow key={item._id}>
            <TableCell className="font-medium">{item.firstName}</TableCell>
            <TableCell>{item.lastName}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>{item.age}</TableCell>
            <TableCell>
              <Link className="text-center" href={`/products/${item._id}`}>
                <FaLink fontSize={20} />
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
