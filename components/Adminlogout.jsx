import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react"
import Link from "next/link"

 function Adminlogout() {
    const { data: session, status } = useSession()
    if (status === "authenticated") {
      return (<>
      <li><Link href={"/admin"} 
      className="text-l text-slate-900 py-5 px-5 text-center  border-b-2 md:border-b-0  border-slate-700  md:hover:text-slate-500 md:hover:font-semibold md:hover:bg-transparent">
          Admin
        </Link>
        </li>
      <li><button className="text-l text-white rounded bg-green-500 hover:border-2 hover:border-green-500  md:my-3 md:py-2 md:px-2 py-5 px-6 text-center  border-b-2 md:border-b-0   md:hover:text-green-500  md:hover:bg-transparent"
          onClick={() => signOut()}>
          Log Out
        </button>
        </li></>)
    }
  return (
    <>
                </>
  )
}

export default Adminlogout