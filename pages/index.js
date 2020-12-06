import { Container } from 'react-bootstrap'
import HeaderNav from '../components/Navbar'
import Post from '../components/Post'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Axios from 'axios'
export default function Home() {

  const postList = Axios.get('http://localhost:4000/api/posts').then(res => {
      return res.data.data.map(function(post, i) {
        console.log(post)
        return <Post title={post.title} _id={post._id} image={post.image}/>
      })
    })

  return (
    <>
      <ToastContainer />
      <HeaderNav />
      <Container style={{ backgroundColor: "#201f22", height: "100%", display: 'flex', justifyContent: 'center' }}>
        {postList}
      </Container>
    </>
  )
}
