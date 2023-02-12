import Image from 'next/image'

const About = () => {
  const title = "About Me";
  const paragraphs = [
    {key: 1, text: "I'm Vitaliy Alekhnovich. I grew up in Kennewick, Washington after immigrating to the U.S. when I was three years old from a small village in Belarus. I've been fascinated with computers since I was little mainly because of the limitless possibilities they offer. I started coding my first few lines when I got my hands on a Parallax SumoBot kit in my freshman engineering class at Southridge High School. Ever since that day I've fallen in love with programming."},
    {key: 2, text: "I continue to hone my skills as a Software Engineer with patience and an insatiable thirst for knowledge. I love exploring all ideas and concepts whether that means working with assembly on MIPS to full stack web development in JavaScript, and even the pointer filled world of C. I don’t see challenges as road blocks. Instead, I see them as learning experiences to improve my skills."},
  ];
  const selfImage = "/assets/images/vitaliy_alekhnovich.png";
  return (
    <section id="about">
      <div className="bg-orange-50 p-6 m-2 shadow-2xl rounded-md">
        <div className="container mx-auto text-black">
          <h1 className="mb-2 text-black">
            {title}
          </h1>
          <div className="flex flex-col justify-between lg:flex-row gap-x-5">
            <Image
              src={selfImage}
              alt="Image of Vitaliy"
              className="max-w-md rounded-l-md"
              width={825}
              height={638}
            />
            <div className="lg:w-[50%] space-y-5">
              {paragraphs.map((paragraph) => (
                <p key={paragraph.key}>{paragraph.text}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
