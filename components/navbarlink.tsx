import Link from "./link"

const Navbarlink: React.FC<{link: Link}> = (props) => {
    return (
        <div className="bg-blue-400">
            <a href={props.link.href} className="-m-1.5 p-1.5">{props.link.text}</a>
        </div>
        )
}

export default Navbarlink