import { auth } from "@/auth"
import Authorization from "@/config/authorization";
import DashboardPage from "./dashboard";






export default async function Page(){
  const session = await auth();
  return (
    <>
    <Authorization/>
    <DashboardPage userId={session?.user?.id}/>
    </>
  )
}