import Image from 'next/image'

import selfImage from '../../public/assets/images/vitaliy_alekhnovich.png'
import selfImageMobile from '../../public/assets/images/vitaliy_alekhnovich_mobile.png'

const About = () => {
  const title = "About Me";
  const paragraphs = [
    { key: 1, text: "I'm Vitaliy Alekhnovich. I grew up in Kennewick, Washington after immigrating to the U.S. when I was three years old from a small village in Belarus. I've been fascinated with computers since I was little mainly because of the limitless possibilities they offer. I started coding my first few lines when I got my hands on a Parallax SumoBot kit in my freshman engineering class at Southridge High School. Ever since that day I've fallen in love with programming." },
    { key: 2, text: "I continue to hone my skills as a Software Engineer with patience and an insatiable thirst for knowledge. I love exploring all ideas and concepts whether that means working with assembly on MIPS to full stack web development in JavaScript, and even the pointer filled world of C. I don’t see challenges as road blocks. Instead, I see them as learning experiences to improve my skills." },
  ];
  return (
    <section id="about" className="hero">
      <div className="hero-body">
        <p className="title box">About Me</p>
          <div className="columns box mx-2">
            <div className="column is-one-third">
              <Image
                src={selfImage}
                alt="Image of Vitaliy"
                className="hidden lg:block rounded-l-md h-400"
              />
              <Image
                src={selfImageMobile}
                alt="Image of Vitaliy"
                className="lg:hidden rounded-md w-full"
              />
            </div>
            <div className="column">
              {paragraphs.map((paragraph) => (
                <p key={paragraph.key}>{paragraph.text}</p>
              ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default About;
