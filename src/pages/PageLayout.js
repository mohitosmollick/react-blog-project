import React from "react";
import ProfileIcon from "../components/ProfileIcon";
import Footer from "./Footer";
import Header from "./Header";

const PageLayout = ({ children, open, setOpen, ...rest }, ref) => {
  return (
    <>
      <Header open={open} setOpen={setOpen} />
      <div className="menu-container" ref={ref}>
        <ProfileIcon open={open} setOpen={setOpen} />
      </div>

      <main className="py-5 bg-gray-100 dark:bg-gray-900 md:min-h-screen ">
        <div className="container mx-auto flex flex-wrap lg:flex-nowrap px-10">
          {children}
        </div>
      </main>

      <Footer />
    </>
  );
};

const forwardmenu = React.forwardRef(PageLayout);

export default forwardmenu;
