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

                <div class="tutor-list">
                    <div class="kartu-tutor">
                        <img src="https://dfu1k3y1rami2.cloudfront.net/wp-content/uploads/2014/07/26195109/2020_cb.jpg"/>
                        <p>Jason Lee Scott</p>
                    </div>
                    <div class="kartu-tutor">
                        <img src="https://images.ctfassets.net/1wryd5vd9xez/4DxzhQY7WFsbtTkoYntq23/a4a04701649e92a929010a6a860b66bf/https___cdn-images-1.medium.com_max_2000_1_Y6l_FDhxOI1AhjL56dHh8g.jpeg"/>
                        <p>John Doe</p>
                    </div>
                    <div class="kartu-tutor">
                        <img src="https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/fc/3021752-inline-i-1-why-square-designed-its-new-offices-to-work-like-a-city.jpg"/>
                        <p>Michael Dell</p>
                    </div>
                    <div class="kartu-tutor">
                        <img src="https://blogs-images.forbes.com/jackkelly/files/2019/06/Jack-Kelly_avatar_1559658819-400x400.jpg"/>
                        <p>Bruce Wills</p>
                    </div>
                </div>
            </div>
        </section>
        </div>
        <Footer/>
    </>
  )
}

export default Home
