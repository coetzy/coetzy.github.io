import { Outlet, useMatch } from "react-router-dom";

import { cx } from "./common";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  let match = useMatch("/");

  return (
    <div
      className={cx(
        "grid bg-cover bg-no-repeat min-h-screen bg-center font-brandon",
        match ? "bg-[url('images/1.jpg')]" : "bg-white"
      )}
      style={{
        gridTemplateRows: "max-content 1fr max-content",
      }}
    >
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
