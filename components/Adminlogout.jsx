import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react"
import Link from "next/link"
import { FiLogOut } from "react-icons/fi";

 function Adminlogout({onClick}) {
    const { data: session, status } = useSession()
    if (status === "authenticated") {
      return (<>
      <li className="text-l text-slate-800 py-5 px-5 text-center  border-b-2 md:border-b-0  border-slate-400  md:hover:text-slate-500 md:hover:font-semibold md:hover:bg-transparent">
        <Link href={"/admin"} onClick={onClick}>
          Admin
        </Link>
        </li >
      <li className="text-l mt-5 md:mt-0 mx-auto">
        <button className="flex text-l items-center text-red-500 rounded border border-red-500  hover:border-2 hover:bg-red-500  md:my-3 md:py-1 md:px-2 py-5 px-6 text-center hover:text-white  md:hover:bg-red-500"
          // onClick={console.log("Clicked")}
          onClick={() => signOut()}
          >
          <FiLogOut/>
        </button>
        </li></>)
    }
  return (
    <>
                </>
  )
}

export default Adminlogout