import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="flex flex-col font-oswald tracking-oswald bg-white h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
