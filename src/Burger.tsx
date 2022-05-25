import { cx } from "./common";

interface BurgerProps {
  className?: string;
  onClick?: any;
}

const Burger = ({ className = "", onClick }: BurgerProps) => (
  <button
    onClick={onClick}
    className={cx("text-black flex flex-col justify-around w-8 h-6", className)}
  >
    <span className="w-8 h-1 rounded-lg bg-black" />
    <span className="w-8 h-1 rounded-lg bg-black" />
    <span className="w-8 h-1 rounded-lg bg-black" />
  </button>
);

export default Burger;
