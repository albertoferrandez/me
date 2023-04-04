import Link from "next/link"
import UseAnimations from "react-useanimations"
import arrowUp from 'react-useanimations/lib/arrowUp'

interface Links {
  href: string;
  text: string;
}

const links: Links[] = [
  { href: "/experience", text: "Experiencia" },
  { href: "/projects", text: "Proyectos" },
  { href: "/education", text: "Formación" },
  { href: "/contact", text: "Contacto" },
]

const NavBar = () => {
  return (
    <aside className="inline-flex flex-row gap-6 md:flex-col 
    md:gap-16 text-sm md:text-2xl lg:text-4xl 
    text-[#696969] justify-center">
      {links.map(({ href, text }, i) => (
        <Link
          href={`${href}`}
          key={i}
          className="text-slate-300 hover:text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-purple-400
          transition duration-300 inline-flex"
        >
          {text} 
          <UseAnimations animation={arrowUp} strokeColor='#cbd5e1' className="opacity-0 rotate-45" autoplay={false}/>
        </Link>
      ))}
    </aside>
  );
};

export default NavBar;
