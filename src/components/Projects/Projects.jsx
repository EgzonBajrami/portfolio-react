import './Projects.css'
import conadkosova from '../../assets/conadkosova.png'
import github from '../../assets/github.svg'
import ebrealestate from '../../assets/ebrealestate.png'

const Projects = () =>{

    return <>
    <div className="projects-wrapper">
        <div className="projects-container">
        <div className="projects-firstText">
                <p><span>Some websites I have developed</span></p>
            </div>
            <div className="insideProjects" onClick={()=>{

            }}>
  <a target="_blank" rel="noreferrer" href="https://conadkosova.com/">
                          
                <div className="insideProjects-img">
                    <img src={conadkosova} alt="conadkosova" />
                </div>
                </a>
                
                
                <div className="insideProjects-txt">
                    <p>Featured Project</p>
                    <h3>Conad Kosova</h3>
                    <div className="text-container">
                        A website designed with the purpose of posting the translated products from Italian to Albanian for the store Conad Kosova. It contains a short description about the store and their products and their sales.

                    </div>
                    <div className="tech-container">
                        <p>React</p>
                        <p>Express</p>
                        <p>MongoDB</p>
                        <p>Google Cloud</p>
                    </div>
                    <a target="_blank" rel="noreferrer" href="                    https://github.com/EgzonBajrami/conad-react-front">
                    <div className="github-container">

                        <img src={github} alt="github-link" />
                    </div>
                    </a>
                </div>

            </div>
            <div className="insideProjects" onClick={()=>{

}}>

    
    <div className="insideProjects-txt">
        <p>Featured Project</p>
        <h3>EB Real Estate</h3>
        <div className="text-container">
           Website designed for a real estate company. Main purpose of it is to post their properties, apartments or houses that they have contracted. 

        </div>
        <div className="tech-container">
            <p>React</p>
            <p>Express</p>
            <p>MongoDB</p>
            <p>Google Cloud</p>
        </div>
        <a target="_blank" rel="noreferrer" href="https://github.com/EgzonBajrami/realestate-react">
        <div className="github-container">

            <img src={github} alt="github-link" />
        </div>
        </a>
    </div>
    <a target="_blank"  rel="noreferrer" href="https://www.eb-patundshmeri.com/">
              
    <div className="insideProjects-img">
        <img src={ebrealestate} alt="eb-realestate" />
    </div>
    </a>
    

</div>
        </div>

    </div>
    </>
}
export default Projects;