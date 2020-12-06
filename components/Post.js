import { Component } from 'react'
import { Card, Container, Button } from 'react-bootstrap'
import HeaderNav from '../components/Navbar'
import Axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import { useSession } from 'next-auth/client'
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'next/link'

export default function Post(props) {
    const [ session, loading ] = useSession()

    const upvote = (id) => {
        if (!session) {
            return toast.error("Not signed in!", { position: 'top-right' })
        }
        Axios.post("http://localhost:4000/api/post/vote", {
            "_id": id,
            "token": session,
            "type": "upvote"
        })
        .then(res => {
            if (res.data.error) {
                return toast.error(res.data.message, { position: 'top-right' })
            }
        })
    }

    const downvote = (id) => {
        if (!session) {
            return toast.error("Not signed in!", { position: 'top-right' })
        }
        Axios.post("http://localhost:4000/api/post/vote", {
            "_id": id,
            "token": session,
            "type": "downvote"
        }).then(res => {
            if (res.data.error) {
                return toast.error(res.data.message, { position: 'top-right' })
            }
        })
    }

    return <Card style={{ width: '50%', borderRadius: "8px", marginTop: '32px' }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
            <div className="votes-container" style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ alignItems: 'center' }}>
                    <Card.Title>{props.title}</Card.Title>
                </div>
                <div>
                    <Button variant="link" onClick={() => upvote(props._id)}><img src="verypog.png" style={{ width: "50px", height: "50px" }} size="sm"/></Button>
                    <Button variant="link" onClick={() => downvote(props._id)}><img src="notpog.png" style={{ width: "50px", height: "50px" }} size="sm"/></Button>    
                </div>
            </div>
            <p className="votes" id="votes"> votes</p>
        </Card.Body>
    </Card>
}
