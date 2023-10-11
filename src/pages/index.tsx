import {Inter} from 'next/font/google'
import {redirect} from "next/navigation";
import {signIn, useSession} from "next-auth/react";
import {router} from "next/client";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const { data: session } = useSession()

    if (session) {
        router.push("/whew")
    }
  return (
    <main
        className={'flex'}
    >
        <div
            className={"flex justify-center items-center flex-col bg-welcomebg bg-no-repeat bg-cover bg-fixed bg-center backdrop-blur-sm bg-white/30 w-1/2 h-screen max-h-[50%]"}>
            <div className={"drop-shadow-2xl items-center text-white font-black text-8xl"}>Welcome to Aries.</div>
            <div className={"drop-shadow-2xl text-white font-black text-4xl"}>Deploy away!</div>
        </div>

        <div className={"flex justify-center items-center flex-col w-1/2 h-screen"}>

            <button onClick={() => signIn('keycloak')}
                    className={"drop-shadow-2xl text-blue-500 bg-white border transition hover:transition hover:transform duration-500 hover:border-0 border-blue-500 p-4 rounded-2xl text-2xl w-1/2"}>Login</button>

        </div>
    </main>
  )
}
