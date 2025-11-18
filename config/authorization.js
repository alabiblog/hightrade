import { auth } from "@/auth"
import { redirect } from "next/navigation"



export default async function Authorization(){
    const session = await auth()
    if(!session?.user){
        redirect("/auth/login")
    }
    return(
        <main>

        </main>
    )
}