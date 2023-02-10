const Projects = () => {
    const title: string = 'Projects'
    const projects = [
        { name: 'Portfolio', description: 'A web app developed using React. This web application is used in showcasing my work, and providing more information about myself. Your currently on this web app as we speak!' },
        { name: 'AWS Tic Tac Connect 5', description: 'AWS Tic Tac Connect 5 is a project I worked on in my Parallel and Cloud Computing course. This project involves using Amazon Web Services DynamoDB and Java to run the GUI and game logic. Players must place Xs and Os on a game grid, and get five in a row horizontally, vertically or diagonally. Communication between players occurs by sending messages to each player through DynamoDB.' }
    ]
    return (
        <div>
            <h1>{title}</h1>
            {
                projects.map((project) => (
                    <div>{project.name}</div>
                ))
            }
        </div>
    )
}

export default Projects