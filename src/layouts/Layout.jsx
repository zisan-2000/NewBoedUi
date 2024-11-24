// Layout.jsx

import Footer from "../components/Footer/Footer";
import Navbar2 from "../components/navbar/Navbar2";

const Layout = ({ children }) => {
  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <Navbar2 />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
