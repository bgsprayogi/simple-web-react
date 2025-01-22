import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { homeSection    } from '../data/HomeSection'
import '../styles/Home.css';


function Home() {
  return (
    <>
        <Navbar/>
        <div className='wrapper'>
          <section id="home">
              <img src=""/>
              <div className="kolom">
              </div>
          </section>
        </div>
        <Footer/>
    </>
  )
}

export default Home
