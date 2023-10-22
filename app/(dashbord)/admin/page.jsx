
import React from 'react'
import { authOptions } from '@/app/(all)/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'


export default async function Admin() {
	const session = await getServerSession(authOptions)
	if (session)
		return redirect('/admin/dashbord')
}
