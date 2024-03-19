import data from "../../data/index.json";

export default function MySkills(){
    return(
        <section id="mySkills" className="skills--section">
            <div className="portfolio--container">
                <p className="section--title">My Skills</p>
                <h7 className="skills--section--heading">My Expertise</h7>
            </div>
            <div className="skills--section--container">
                {data?.skills?.map((item,index) => (
                    <div key={index} className="skills--section--card">
                        <div className="skills--section--img">
                            <img src={item.src} alt="Product Chain"/>
                        </div>
                        <div className="skills--section--card--content">
                            <h3 className="skills--section--title">{item.title}</h3>
                            <p className="skills--section--description">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}