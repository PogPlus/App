import { Container } from 'react-bootstrap'
import HeaderNav from '../components/Navbar'
import Post from '../components/Post'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Axios from 'axios'
import {useAsyncMemo} from "use-async-memo"

export default function Home() {

  const postList = async () => {
    const res = await Axios.get('http://localhost:4000/api/posts');
    return res.data.data.map(post => {
      return <Post title={post.title} _id={post._id} image={post.data} votes={post.likes}/>
    });
  }

  const postListValue = useAsyncMemo(postList, []);

  return (
    <>
      <ToastContainer />
      <HeaderNav />
      <Container style={{ backgroundColor: "#201f22", height: "100%", display: 'flex', justifyContent: 'center' }}>
        {postListValue}
      </Container>
    </>
  )
}
