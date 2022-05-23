import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import imagedb from "./imagedb";

interface MenuProps {
  className: string;
  withHome: boolean;
  style?: any;
  onClose?: any;
}

const NavMenu = ({ className, style, withHome, onClose }: MenuProps) => (
  <>
    {withHome && (
      <NavLink
        className={className}
        style={style}
        to="/"
        key="/"
        onClick={onClose}
      >
        Inicio
      </NavLink>
    )}
    {Object.keys(imagedb).map((key) => (
      <NavLink
        className={className}
        style={style}
        to={key}
        key={key}
        onClick={onClose}
      >
        {key}
      </NavLink>
    ))}
  </>
);

const Menu = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!isOpen)}
        className="md:hidden text-black flex flex-col justify-around w-8 h-6"
      >
        <span className="w-8 h-1 rounded-lg bg-black" />
        <span className="w-8 h-1 rounded-lg bg-black" />
        <span className="w-8 h-1 rounded-lg bg-black" />
      </button>
      <nav className="hidden md:block text-black">
        <NavMenu
          className="relative mx-2 text-black uppercase text-xl hover:text-softPink  hover:border-softPink hover:border-b"
          // style={({ isActive }) => ({ color: isActive ? "#FBAB45" : "" })}
          withHome={false}
        />
      </nav>
      {isOpen && (
        <nav className="absolute top-0 left-0 h-screen w-screen bg-white flex flex-col items-center z-10 p-4 px-24">
          <button
            onClick={() => setOpen(false)}
            className="group w-12 h-12 absolute right-[84px] top-[24px]"
          >
            <span className="h-8 w-0.5 bg-black group-hover:bg-softPink absolute rotate-45 left-[23px] top-[8px]" />
            <span className="h-8 w-0.5 bg-black group-hover:bg-softPink absolute -rotate-45 left-[23px] top-[8px]" />
          </button>
          <NavMenu
            onClose={() => setOpen(false)}
            className="capitalize text-2xl py-4 w-full text-left text-black hover:text-softPink"
            withHome
          />
        </nav>
      )}
    </>
  );
};

const Header = () => (
  <header className="flex flex-wrap justify-between p-8 px-24 border-b bg-white font-saira tracking-header">
    <nav>
      <Link className="text-black uppercase text-2xl" to="/">
        Coetzy
      </Link>
    </nav>
    <Menu />
  </header>
);

export default Header;
