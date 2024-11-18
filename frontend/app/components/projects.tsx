import Image from 'next/image'

const Projects = () => {
  const title: string = "Projects";
  const iconRoot = "/assets/images/";
  const projects = [
    {
      title: "Portfolio",
      description:
        "A web app developed using React. This web application is used in showcasing my work, and providing more information about myself. Your currently on this web app as we speak!",
      icon: {
        details: "portfolio.png",
      },
    },
    {
      title: "AWS Tic Tac Connect 5",
      description:
        "AWS Tic Tac Connect 5 is a project I worked on in my Parallel and Cloud Computing course. This project involves using Amazon Web Services DynamoDB and Java to run the GUI and game logic. Players must place Xs and Os on a game grid, and get five in a row horizontally, vertically or diagonally. Communication between players occurs by sending messages to each player through DynamoDB.",
      icon: {
        details: "tictacConnect5Project.png",
      },
    },
    {
      title: "Arduino Pin Ball Machine",
      description:
        "The Arduino Pin Ball Machine project involved programming an Arduino Mega to control an old school pinball machine that has been adapted to use a custom shield on it. This project involved coding all the gaming logic you'd find in a pinball machine. This included reading sensor data, switch states, and keeping track of this data for scores.",
      icon: {
        details: "pinball.jpg",
      },
    },
    {
      title: "Train Simulator",
      description:
        "Train Simulator project was used in my Software Engineering course to give students a taste of proper techniques in developing well written software. At first we had to plan out the entire project, and then paired up into groups to work on different components of a simply train simulator program.",
      icon: {
        details: "Train.png",
      },
    },
    {
      title: "C Silly Bash Shell",
      description:
        "Silly Bash Shell was a coding project I had in my Operating Systems course. We had to create the basic functionality you would find a bash shell using C.",
      icon: {
        details: "Bash.jpg",
      },
    },
    {
      title: "Python Packet Sniffer",
      description:
        "Python Packet Sniffer was a project I worked on during my Advanced Networking course. I had to code up a program that could read in network packets, and print out their information similarily to what you would find in programs such as WireShark.",
      icon: {
        details: "PacketSniffer.png",
      },
    },
    {
      title: "Selenium Functional Tests",
      description:
        "This project was one I got to work on at my time at the Washington State Digital Archives (WSDA). This project involved learning Selenium API in order to write functional tests for web applications used by the WSDA. I got to incorporate a page object design pattern, and create a basic framework for writing easily readable functional tests. These functional tests got incorporated with a continuous integration setup",
      icon: {
        details: "selenium_testing.png",
      },
    },
    {
      title: "Web Crawler",
      description:
        "Web Crawler was a legacy web application I inherited at the Washington State Digital Archives that I got to develop and support for. One of the big features I got to work on was replacing the backend of this web application from using Wingows Communication Foundation (WCF) to a more modern RESTFul API.",
      icon: {
        details: "web_crawler.jpg",
      },
    },
    {
      title: "Android Ashman",
      description:
        "Ashman was a project for my Android course. I had to create a clone of pacman using nothing but standard Android libraries. This includes having to create the entire GUI and gaming logic.",
      icon: {
        details: "ashman.png",
      },
    },
    {
      title: "Stu Reports",
      description:
        "Stu Reports is short for Student Reports, and was my senior capstone project. This project involved a real client, who tasked us with creating a web application that can be used in managing senior capstone projects.",
      icon: {
        details: "ewu_stu_reports.png",
      },
    },
  ];

  return (
    <section id="projects" className="hero">
      <div className="hero-body">
        <p className="title box">
          {title}
        </p>
        <div className="container flex flex-col mx-auto lg:flex-row">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 pt-3">
            {projects.map((project) => (
              <div key={project.title} className="relative group p-5 box rounded-xl">
                <h2 className="text-white">{project.title}</h2>
                <Image
                  src={iconRoot + project.icon.details}
                  alt={project.icon.details}
                  className="rounded-xl"
                  width={1280}
                  height={800}
                />
                <div className="absolute rounded-b-xl bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
                  <div className="flex justify-between w-full">
                    <p>{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default Projects;
