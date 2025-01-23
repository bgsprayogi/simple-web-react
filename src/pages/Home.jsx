import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { homeSection } from '../data/HomeSection'
import { coursesSection } from '../data/CoursesSection'

import parse from 'html-react-parser'
import '../styles/Home.css';


function Home() {
  return (
    <>
        <Navbar/>
        <div className='wrapper'>
          {/* home */}
          <section id="home">
              <img src={homeSection.image}/>
              <div className="kolom">
                {parse(homeSection.content)}
              </div>
          </section>
          {/* online course */}
          <section id="courses">
                    <div className="kolom">
                        {parse(coursesSection.content)}
                    </div>
                    <img src={coursesSection.image} />
          </section>
          {/* Tutors Sections*/}
          <section id="tutors">
            <div class="tengah">
                <div class="kolom">
                    <p class="deskripsi">Our Top Tutors</p>
                    <h2>Tutors</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, optio!</p>
                </div>
            </div>
        </section>
        </div>
        <Footer/>
    </>
  )
}

export default Home
