import Link from "./link"
import Navbarlink from "./navbarlink"

const Navbar = () => {
    const links = [
        new Link('Github','https://github.com/vitaovich/',false),
        new Link('LinkedIn','https://www.linkedin.com/in/vitaliy-alekhnovich/',false)
    ]
    return (
        <div className="bg-gray-400 mx-auto flex space-x-4"> 
            <h1 className="text-3xl font-bold underline">Vitaliy&apos;s Site</h1>
            {links.map((link) => (
            <Navbarlink key={link.id} link={link}></Navbarlink>
            ))}
        </div>
    )
}

export default Navbar