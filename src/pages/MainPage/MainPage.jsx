import './MainPage.css'
import Intro from '../../components/Intro/Intro';
import AboutMe from '../../components/AboutMe/AboutMe';
import Projects from '../../components/Projects/Projects';
import Contacts from '../../components/Contact/Contact.jsx'
import ScrollReveal from 'scrollreveal';
import {useEffect} from 'react';
const MainPage = () =>{
    useEffect(()=>{
        ScrollReveal().reveal('.about-me',{
            reset:false,
            delay:300
        })
        ScrollReveal().reveal('.projects',{
            reset:false,
            delay:300
        })
        ScrollReveal().reveal('.contact',{
            reset:false,
            delay:300
        })

    })

    return <>
    <div className="wrapper">
        <div className="intro-container">
            <Intro />
        </div>
        <div className="about-me">
            <AboutMe />
        </div>
        <div className="projects">
            <Projects />
        </div>
        <div className="contact">
            <Contacts />
        </div>

    </div>
    </>
}
export default MainPage;