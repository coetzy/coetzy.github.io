import { cx } from "./common";

interface CrossProps {
  className?: string;
  onClick?: any;
}

const Cross = ({ className = "", onClick }: CrossProps) => (
  <button
    onClick={onClick}
    className={cx("group w-8 h-8 relative shrink-0", className)}
  >
    <span className="h-8 w-0.5 bg-black group-hover:bg-softPink absolute top-0 left-0 right-0 text-center m-auto rotate-45" />
    <span className="h-8 w-0.5 bg-black group-hover:bg-softPink absolute top-0 left-0 right-0 text-center m-auto -rotate-45" />
  </button>
);

export default Cross;
