import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { homeSection } from '../data/HomeSection'
import { coursesSection } from '../data/CoursesSection'
import { tutorsSection, tutorsList } from '../data/TutorsSection'
import { partnersSection, partnersList } from '../data/PartnersSection'

import Tutors from '../components/Tutors'
import Partners from '../components/Partners'


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
                    <div className="tengah">
                        <div className="kolom">
                            {parse(tutorsSection.content)}
                        </div>
                        <Tutors tutorsList={tutorsList} />
                    </div>
          </section>
          {/* Partners Section */}
          <section id="partners">
            <div className="tengah">
                <div className="kolom">
                    { parse(partnersSection.content)}
                </div>
                <Partners partnersList={partnersList}/>
            </div>
          </section>
        </div>
        <Footer/> 
    </>
  )
}

export default Home
