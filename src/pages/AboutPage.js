import React from "react";
import Category from "../components/Categories";
import SocialPlugin from "../components/SocialPlugin";
import Tags from "../components/Tags";
import TotalInfo from "../components/TotalInfo";

const AboutPage = () => {
  return (
    <>
      <div className="w-3/12 hidden xl:block ">
        <SocialPlugin />
        <Category />
        <Tags />
      </div>
      {/* <!-- Main post --> */}
      <div className="xl:w-6/12 lg:w-8/12 lg:mx-6  w-full overflow-hidden">
        <div className="flex justify-between bg-white dark:bg-gray-800 px-3 py-2 items-center rounded-sm">
          <h5 className="text-base  font-semibold font-roboto dark:text-gray-300">
            About
          </h5>
          <a
            href=" "
            className="text-white bg-gray-400 dark:bg-gray-500 dark:hover:bg-gray-400 px-3 py-1 rounded-sm text-sm hover:bg-gray-500"
          >
            See More
          </a>
        </div>
        <div className="overflow-hidden mt-4 p-5 bg-white dark:bg-gray-800 shadow-sm rounded-sm ">
          <p
            className="text-gray-500
                        dark:text-gray-400 text-sm  text-justify first-letter:text-3xl first-letter:font-semibold first-letter:mr-1"
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            perferendis ratione sequi id quo aliquid quos animi sint illum
            commodi dignissimos, Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Modi quos veritatis dignissimos facilis maiores
            tempora praesentium quasi maxime magnam consequatur quod assumenda,
            accusamus alias dolores sapiente eligendi cumque in culpa repellat,
            reprehenderit dolorem! Hic quisquam voluptates ad at nostrum
            assumenda corporis aliquid architecto. Voluptas, totam nisi
            perferendis aut veniam reprehenderit rem tempore nesciunt fugiat
            fuga vel quibusdam repellendus nam aspernatur, dolorem adipisci
            saepe modi possimus odit ullam sint incidunt deleniti! Nemo adipisci
            voluptates
          </p>
        </div>
      </div>
      {/* <!-- right sidebar --> */}
      <TotalInfo />
    </>
  );
};

export default AboutPage;
