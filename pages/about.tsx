const About = () => {
    const title = 'About Me'
    const about = 'I\'m Vitaliy Alekhnovich. I grew up in Kennewick, Washington after immigrating to the U.S. when I was three years old from a small village in Belarus. I\'ve been fascinated with computers since I was little mainly because of the limitless possibilities they offer. I started coding my first few lines when I got my hands on a Parallax SumoBot kit in my freshman engineering class at Southridge High School. Ever since that day I\'ve fallen in love with programming. I continue to hone my skills as a Software Engineer with patience and an insatiable thirst for knowledge. I love exploring all ideas and concepts whether that means working with assembly on MIPS to full stack web development in JavaScript, and even the pointer filled world of C. I don’t see challenges as road blocks. Instead, I see them as learning experiences to improve my skills.'
    return (
        <div>
            <h1>{title}</h1>
            <img alt="My Image Here"></img>
            <p>
                {about}
            </p>
        </div>
    )
}

export default About