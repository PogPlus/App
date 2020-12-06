import HeaderNav from "../components/Navbar";
import { Spinner } from 'react-bootstrap'
import { useSession } from 'next-auth'

export default function Upload() {
    const [session, loading] = useSession()
    return (
        <>
            {loading && <>
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </>}
            <HeaderNav />
        </>
    )
}