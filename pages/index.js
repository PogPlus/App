import { Container } from 'react-bootstrap'
import HeaderNav from '../components/Navbar'
import Post from '../components/Post'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (
    <>
      <ToastContainer />
      <HeaderNav />
      <Container style={{ backgroundColor: "#201f22", height: "100%", display: 'flex', justifyContent: 'center' }}>
        <Post title="pog" _id="yesrandomlettershere" image="https://cdn.discordapp.com/attachments/715332913419255868/784990721677328394/FullSizeRender.png" user={{ _id: "HDkjSHdkJ", username: "bruh moment" }}/>
        <Post title="pog" _id="yesrandomlettershere" image="https://cdn.discordapp.com/attachments/715332913419255868/784990721677328394/FullSizeRender.png" user={{ _id: "HDkjSHdkJ", username: "bruh moment" }}/>
        <Post title="pog" _id="yesrandomlettershere" image="https://cdn.discordapp.com/attachments/715332913419255868/784990721677328394/FullSizeRender.png" user={{ _id: "HDkjSHdkJ", username: "bruh moment" }}/>
      </Container>
    </>
  )
}
