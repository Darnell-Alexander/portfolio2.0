import './index.scss'
import smm from '../../Images/smm.jpg'
import css from '../../Images/download.jpeg'
import pic from '../../Images/pic2.jpg';
import seo from '../../Images/seo.jpg';
import Menu from '../Header'
import {motion} from 'framer-motion'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHtml5 , faJs , faReact , faSass , faJava , faPython} from '@fortawesome/free-brands-svg-icons'
import {faDatabase } from '@fortawesome/free-solid-svg-icons'
import {ContactForm , RightBox }from '../Contact';
import Footer from '../Footer';
const Landing =()=>{
    return(
       <>
       <Banner />
       <Menu />
       <h1 className='seperater'>Our Services</h1>
       <Services />
       <IconStrip />
       <h1 className='seperater'>No Risk , Just Profits.</h1>
       <Pitch />
       <div className='contact-area'>
           <ContactForm />
           <RightBox />
       </div>
       <Footer />
       </>

        
    )
}


const Pitch =()=>{
    return(
        <div className='pitch-container'>
            <div>
                <h1 style={{textAlign:'right'}}>Social Media Marketing</h1>
                <img src={smm} style={{float:'right'}}/>
                <p>
                Social media channels are a great opportunity for us to connect and engage with customers, prospects, and partners. 
                As such, we’re deliberate about how and when we post on different social platforms, how we drive engagement, and how we respond in various scenarios. 
                Our Social Media Plan Card outlines all of this and more, so we’re consistent and effective on social media." <a href='#'>Learn More</a>
                </p>
            </div>
            <div>
                <h1>SEO Optimizaiton</h1>
                <img src={seo}/>
                <p style={{float:'right'}}>
                    There are only 10 spots—that’s right, just 10—on a Google search page. 
                    So ask yourself, when you type in a Google search, how often do you venture off the first page onto the second, third, or twentieth page of the search results? 
                    If a prospective customer types in a topic relevant to what your business can provide, don’t you want to be on that first search results page alongside your competitors? 
                    If you aren’t in one of those top ten search spots, another business just gained a new customer—or, you just lost one.<a href='#'>Learn More</a>
                </p>
            </div>
            <div>
                <h1 style={{textAlign:'right'}}>Custom Software solutions</h1>
                <img src={css} style={{float:'right'}}/>
                <p>
                We specialize in open source platforms such as Drupal, Moodle, Wordpress, and Magento. 
                Our developers are experienced in a wide variety of development languages and platforms, including 
                Microsoft .Net, C#, PHP, Cold Fusion, SQL, mySQL Database, JQuery, HTML, and many more. <a href='#'>Learn More</a>
                </p>
            </div>
        </div>
    )
}

const Services =()=>{
    return(
        <div className='service-container'>
            
            <div className='service'>
                <h1>Web Development</h1>
                <ul>
                    <li>Responsive Design</li>
                    <li>Minimalistic Coding</li>
                    <li>Social Media Marketing</li>
                    <li>Full E-commerce Functionality</li>
                    <li>UI/UX Design</li>
                </ul>
                <button>Learn More</button>
            </div>

            <div className='service'>
                <h1>Mobile App Development</h1>
                <ul>
                    <li>Android & IOS support</li>
                    <li>Minimalistic Coding</li>
                    <li>Advertising Strategies</li>
                    <li>Cloud infrastruction</li>
                    <li>Mobile Focused UI/UX Design</li>
                </ul>
                <button>Learn More</button>
            </div>

            <div className='service'>
                <h1>Software Development</h1>
                <ul>
                    <li>Support for Businesses</li>
                    <li>Scalable Design</li>
                    <li>Custom Solutions</li>
                    <li>DevOps</li>
                    <li>Compatibility Testing</li>
                </ul>
                <button>Learn More</button>
            </div>
        </div>

    )
}


const Banner =()=>{
    return(
        <div className='banner-container'>
            
           <button className='contactbtn'>Contact</button>

            <div className='banner-text'>
                <h1>Web Development</h1>
                <h2>Made Simple</h2>
            </div>

            <button>Get A Qoute</button>
        </div>
    )
}

const IconStrip =()=>{
    return(
        <div className='is-container'>
            <FontAwesomeIcon icon={faHtml5} />
            <FontAwesomeIcon icon={faSass} />
            <FontAwesomeIcon icon={faJs} />
            <FontAwesomeIcon icon={faReact} />
            <FontAwesomeIcon icon={faDatabase} />
            <FontAwesomeIcon icon={faJava} />
            <FontAwesomeIcon icon={faPython} />
        </div>
    )
}
export default Landing