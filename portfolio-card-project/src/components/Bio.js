// components/Bio.js

const Bio = () => {
    const bioText = "Passionate about crafting engaging user experiences and bringing designs to life through code. Always eager to learn and explore new technologies in the frontend development landscape.";
    const skills = ["Java", "Python", "HTML", "CSS", "JavaScript","React.js", "SQL", "Git"];

    return(
        <div className="bio-section">
            <h3>About me</h3>
            <p className="bio-text">{bioText}</p>
            <h3>Skills</h3>
            <div className="skills-container">
                {skills.map((skill,index) => (
                    <span key={index} className="skill-tag">
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
    
}

export default Bio;
