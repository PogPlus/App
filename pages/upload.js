import HeaderNav from "../components/Navbar";
import { Form, Spinner, Container } from 'react-bootstrap'
import { useSession, signIn } from 'next-auth/client'
import { useState } from "react";

import Axios from 'axios'

// const preventDefault = f => e => {
//     e.preventDefault()
//     f(e)
// }

// const toBase64 = file => new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => resolve(reader.result);
//     reader.onerror = error => reject(error);
// });

export default async function Upload() {
    const [session, loading] = useSession()

    const [title, setTitle] = useState("")

    const [file, setFile] = useState("")

    if (!session && !loading) await signIn("discord", { callbackUrl: "/profile" })

    console.log("signin")

    const handleSubmit = () => {
        let image
        toBase64(file).then(result => {
            image = result
        })
        Axios.post("http://localhost:4000/api/post", {
            "title": title,
            "image": image,
            "user": session
        })
    }

    const handleChange = setValue => e => setValue(e.target.value)

    return (
        <>
            {console.log("header")}
            <HeaderNav />
            <Container>
                {console.log("container")}
                    <Form onSubmit={handleSubmit}>
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="string" placeholder="Enter Title" onChange={handleChange(setTitle)} value={title} />
                                <Form.File 
                                id="image"
                                label="Meme to Upload"
                                custom
                                value={file}
                                onChange={handleChange(setFile)}
                            />
                            {console.log("form")}
                    </Form>
                </Container>
        </>
    )
}