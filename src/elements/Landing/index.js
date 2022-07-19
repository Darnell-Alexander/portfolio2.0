import './index.scss'
import pic from '../../Images/pic2.jpg';
import Menu from '../Header'
import PEffect from '../Particles/Particle';
import {motion} from 'framer-motion'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHtml5 , faJs , faBootstrap , faReact , faSass , faJava , faPython} from '@fortawesome/free-brands-svg-icons'
import {faDatabase } from '@fortawesome/free-solid-svg-icons'

const Landing =()=>{
    return(
       <>
       <Banner />
       <Menu />
       <h1 className='seperater'>Our Services</h1>
       <Services />
       <IconStrip />
       <h1 className='seperater'>There Are No Cons</h1>
       </>

        
    )
}

const Pitch =()=>{
    return(
        <div className='pitch-container'>
            
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
                    <li>Mobile Optimization</li>
                    <li>Full E-commerce Functionality</li>
                    <li>UI/UX Design</li>
                </ul>
                <button>Learn More</button>
            </div>

            <div className='service'>
                <h1>Mobile App Development</h1>
                <ul>
                    <li>Responsive Design</li>
                    <li>Minimalistic Coding</li>
                    <li>Mobile Optimization</li>
                    <li>Cloud infrastruction</li>
                    <li>Mobile Focused UI/UX Design</li>
                </ul>
                <button>Learn More</button>
            </div>

            <div className='service'>
                <h1>Software Development</h1>
                <ul>
                    <li>Responsive Design</li>
                    <li>Minimalistic Coding</li>
                    <li>Mobile Optimization</li>
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