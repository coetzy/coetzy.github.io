import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <div
      className="grid bg-cover font-brandon bg-white h-screen"
      style={{
        gridTemplateRows: "max-content auto max-content",
      }}
    >
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
