export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  user: string;
  __v: number;
}

export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  products: Product[];
  __v: number;
}
export interface ProductsTableProps {
  data: Product[];
}

export interface UserTableProps {
  data: User[];
}
