import { getAllUsers } from "./server";
import { UserTable } from "@/components/Tables/UsersTable";

export default async function Home() {
  const users = await getAllUsers();

  return <UserTable data={users} />;
}
