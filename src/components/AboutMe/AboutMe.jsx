import './AboutMe.css'
import js from '../../assets/js.svg'
import reactLogo from '../../assets/reactLogo.png'
import nodejs from '../../assets/nodejs.svg'
import express from '../../assets/express.png'
import mongodb from '../../assets/mongodb.svg'
import mongoose from '../../assets/mongoose.png'
import portfolioImage from '../../assets/portfolioImage.jpg'
import redux from '../../assets/redux.svg';
import typescript from '../../assets/typescript.svg'
const AboutMe = () =>{
    return <>
    <div className="about-wrapper">
        <div className="about-text">
            <div className="about-firstText">
                <p><span>About Me</span></p>
            </div>
            <div className="about-secondText">
                <p>Hello! My name is Egzon and I really enjoy creating websites. My first interests in web development started when I first learned about text-editor tags in forums, where I had my first interactions with HTML & CSS and learned what they are.</p>

            </div>
            <div className="about-thirdText">
                <p>I haven't had the opportunity to work for a web development company yet, but I've worked on several projects that include web development.
                    Where I learned critical thinking and how to not rush into a solution and think things through.
                     I also have experience with clients due to my old job requiring a lot client - worker interactions.</p>
            </div>
            <div className="about-fourthText">
                <p>A few of the technologies I have been working with:</p>
            </div>
            <div className="frameworks">
                <div className="technolog">
                    <div className="image-container-frame">
                    <img src={js} alt="js-icon" />
                    </div>
                   <div className="technology">

              
                    <p>Javascript</p>
                    </div>
                </div>
                <div className="technolog">
                    <div className="image-container-frame">
                    <img src={typescript} alt="js-icon" />
                    </div>
                   <div className="technology">

              
                    <p>Typescript</p>
                    </div>
                </div>
                <div className="technolog">
                    <div className="image-container-frame">
                    <img src={reactLogo} alt="js-icon" />
                    </div>
                   <div className="technology">

              
                    <p>React</p>
                    </div>
                </div>
                <div className="technolog">
                    <div className="image-container-frame">
                    <img src={redux} alt="js-icon" />
                    </div>
                   <div className="technology">

              
                    <p>React-Redux</p>
                    </div>
                </div>
                <div className="technolog">
                    <div className="image-container-frame">
                    <img src={nodejs} alt="js-icon" />
                    </div>
                   <div className="technology">

              
                    <p>NodeJs</p>
                    </div>
                </div>
                <div className="technolog">
                    <div className="image-container-frame-express">
                    <img src={express} alt="js-icon" />
                    </div>
                   <div className="technology">

              
                    <p>Express</p>
                    </div>
                </div>
                <div className="technolog">
                    <div className="image-container-frame">
                    <img src={mongodb} alt="js-icon" />
                    </div>
                   <div className="technology">

              
                    <p>MongoDB</p>
                    </div>
                </div>
                <div className="technolog">
                    <div className="image-container-frame">
                    <img src={mongoose} alt="js-icon" />
                    </div>
                   <div className="technology">

              
                    <p>Mongoose</p>
                    </div>
                </div>
            </div>

        </div>
        <div className="about-image">
            <div className="about-img-container">
            <img src={portfolioImage} alt="ugly" />

            </div>
          

        </div>

    </div>
    </>
}
export default AboutMe;