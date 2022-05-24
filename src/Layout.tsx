import { Outlet, useMatch } from "react-router-dom";

import { cx } from "./common";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  let match = useMatch("/");

  return (
    <div
      className={cx(
        "grid bg-cover font-brandon bg-white",
        match ? "h-screen" : "min-h-screen"
      )}
      style={{
        gridTemplateRows: "max-content minmax(0,1fr) max-content",
      }}
    >
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
