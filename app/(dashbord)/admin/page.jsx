
import React from 'react'
import { authOptions } from '@/app/(all)/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import LoginForm from '@/components/InsertForm/LoginForm'

export default async function Admin() {
	const session = await getServerSession(authOptions)

	// redirect if already logged in as admin
	if (session)
		return redirect('/admin/dashbord')

//   return (
//     <>

// <LoginForm/>

//     </>
//   )
}
