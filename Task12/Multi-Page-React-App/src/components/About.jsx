import portfolio from "../assets/public/images/portfolio.jpg"
const About = ()=>{
    return (
        <>
         <section className="section_part">
         <h3>About Me</h3>
                       <div className="detail-about">
                        <div className="content">
                            <p><strong>Hi, I’m Vishal 👋</strong> <br/> myself vishal i am currently doing a mern stack internship <br/>
                              in the part of scaloy technology that are i have currently doing this portfolio website
                            </p>
                            <button>view services</button>
                            <div className="location"> 
                                 <i className="fa-solid fa-location-dot fa-xl"></i>
                                 <p>Rajkot,Gujrat</p>
                            
                            </div>
                        </div>
                        
                        <div className="img_section">
                            <img src={portfolio} alt="img "/>
                        </div>
                       </div>
                       </section>
        </>
    )
};

export default About;