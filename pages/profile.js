import HeaderNav from '../components/Navbar'

import { useSession } from 'next-auth'

export default function Profile() {
    const [ session, loading ] = useSession()
    console.log(session)
    return (
        <>
            <HeaderNav />
            {!session && signIn("discord", { callbackUrl: "/profile" })}
        </>
    )
}
