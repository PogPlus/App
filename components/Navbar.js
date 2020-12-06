import { Navbar, Nav, Button, Container, Spinner, DropdownButton, Dropdown } from 'react-bootstrap'
import { useSession, signIn, signOut } from "next-auth/client";

import Link from 'next/link';

export default function HeaderNav() {
    const [ session, loading ] = useSession()
    return (
        <>
            <Navbar variant="dark" style={{ backgroundColor: '#0C0910', color: "#FCF7F8" }}>
                <Container>
                    <Link passHref href="/">
                        <Navbar.Brand style={{ fontWeight: 700, fontFamily: "Montserrat" }}>PogPlus</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        {loading && <>
                            <Spinner animation="border" role="status">
                                <span className="sr-only">Loading...</span>
                            </Spinner>
                        </>}
                        {!loading && <>
                            {!session && <>
                                <Button style={{ paddingRight: "16px", borderRadius: "16px", textDecoration: 'none', color: 'white', fontWeight: 700 }} variant="link" onClick={() => signIn('discord', { callbackUrl: "/profile" })}>
                                    Log In
                                </Button>
                            </>}
                            {session && <>
                                <DropdownButton id="name-dropdown" style={{ paddingRight: "16px", borderRadius: "16px", textDecorationLine: 'none', textDecorationColor: 'white' ,color: 'white', fontWeight: 700 }} variant="link" title={session.user.name}>
                                    <Link passHref href="/profile">
                                        <Dropdown.Item style={{ fontWeight: 600 }}>Profile</Dropdown.Item>
                                    </Link>
                                    <Link passHref href="/settings">
                                        <Dropdown.Item style={{ fontWeight: 600 }}>Settings</Dropdown.Item>
                                    </Link>
                                    <Dropdown.Divider />
                                    <Dropdown.Item onClick={() => signOut({callbackUrl:"/"})} style={{ fontWeight: 600 }}>Log Out</Dropdown.Item>
                                </DropdownButton>
                            </>}
                            <Link passHref href="/upload">
                                <Button variant="dark" style={{ fontWeight: 700 }}>
                                    Upload Meme
                                </Button>
                            </Link>
                        </>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}