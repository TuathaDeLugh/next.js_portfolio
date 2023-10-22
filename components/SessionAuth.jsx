"use client"
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
export default function SessionAuth() {
    const router = useRouter();
    const { data: session, status } = useSession()

    if (status === "unauthenticated"){
        router.push('/login')
    }
}
