import './ContactIcons.css'
import instagram from '../../assets/instagram.svg'
import github from '../../assets/github.svg'
const ContactIcons = () =>{
    return <>
    <div className="contactIcons-wrapper">
        <div className="above-line">
        <a target="_blank" rel="noreferrer" href="                    https://github.com/EgzonBajrami/">
        <div className="icon-container1">
                <img src={github} alt="egzon.bajram1" />
            </div>
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/egzon.bajram1/">
            <div className="icon-container2">
                <img src={instagram} alt="egzon.bajram1" />
            </div>
            </a>
        </div>
       <div className="contactIcons-line">

       </div>

    </div>
    </>
}
export default ContactIcons;