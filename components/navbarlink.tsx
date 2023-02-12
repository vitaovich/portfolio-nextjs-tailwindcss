import Link from "./link";

const Navbarlink: React.FC<{ link: Link }> = (props) => {
    const link = props.link
  if (props.link.background) {
    return (
      <a
        href={props.link.href}
        className="px-12 py-3 text-slate-50 rounded-full bg-teal-400 hover:bg-teal-500 hover:text-slate-300"
        target='_blank'
        rel="noreferrer"
      >
        {props.link.text}
      </a>
    );
  }
  return (
    <a
      href={props.link.href}
      className="px-12 py-3 text-slate-50 rounded-full hover:bg-orange-500 hover:text-slate-300"
    >
      {props.link.text}
    </a>
  );
};

export default Navbarlink;
