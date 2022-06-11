import { useState } from "react";
import { Link } from "react-router-dom";

import { useData } from "./api";
import Burger from "./Burger";
import Cross from "./Cross";

interface MenuProps {
  className: string;
  onClick?: any;
  withHome?: boolean;
}

const NavMenu = ({ className, onClick, withHome = false }: MenuProps) => {
  const { isLoading, isError, data } = useData();

  if (isLoading || isError) {
    return null;
  }

  return (
    <>
      {withHome && (
        <div className="flex w-full items-center justify-between">
          <Link className={className} to="/" key="/" onClick={onClick}>
            Inicio
          </Link>
          <Cross onClick={onClick} />
        </div>
      )}
      {data &&
        data.menu.map((key) => (
          <Link className={className} to={key} key={key} onClick={onClick}>
            {key}
          </Link>
        ))}
    </>
  );
};

const Menu = () => {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => setOpen(!isOpen);

  return (
    <>
      <Burger className="md:hidden" onClick={handleClick} />
      <nav className="hidden md:block text-black">
        <NavMenu className="relative mx-2 text-black uppercase text-xl hover:text-softPink  hover:border-softPink hover:border-b" />
      </nav>
      {isOpen && (
        <nav className="absolute top-0 left-0 h-screen w-screen bg-white flex flex-col items-center z-10 px-8">
          <NavMenu
            onClick={handleClick}
            className="capitalize w-full text-2xl py-4 text-left text-black hover:text-softPink"
            withHome
          />
        </nav>
      )}
    </>
  );
};

const Header = () => {
  const { data } = useData();
  return (
    <header className="flex flex-wrap justify-between px-8 items-center border-b bg-white font-saira tracking-header">
      <Link className="text-black uppercase text-2xl" to="/">
        <img className="h-16" src={data && data.logo}></img>
      </Link>
      <Menu />
    </header>
  );
};

export default Header;
