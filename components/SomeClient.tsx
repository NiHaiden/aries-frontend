"use client"
import {useSession} from "next-auth/react";

export default function SomeClientComponent() {
    const session = useSession()
    return (
        <div>
            {session.data?.user?.token}
        </div>
    )
}