import React from "react";

const BigPost = () => {
  return (
    <div className="overflow-hidden bg-white dark:bg-gray-800 shadow-sm rounded-sm ">
      <a href=" " className=" rounded-md">
        <img
          src="/image/photo-1511497584788-876760111969.jpg"
          className="w-full h-80 object-cover hover:scale-110 duration-500 transition "
          alt=""
        />
      </a>
      <div className="p-4 pb-5 space-y-3">
        <a href=" ">
          <h2
            className="block text-xl font-semibold text-gray-500 hover:text-gray-700 
                        dark:text-gray-400 dark:hover:text-gray-300
                        font-roboto text-justify"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat,
            minus.
          </h2>
        </a>
        <div className="mt-3 flex space-x-4">
          <div className=" text-gray-400 text-sm items-center hidden md:block hover:text-gray-700 dark:hover:text-gray-300">
            <div className="flex ">
              <a href="user.html" className="mr-2 ">
                <img
                  src="/image/dfsdf.jpg"
                  className="w-6 h-6 rounded-full "
                  alt=""
                />
              </a>
              <a href=" " className="">
                Jon Doe
              </a>
            </div>
          </div>
          <div className="flex text-gray-400 text-sm items-center">
            <span className="mr-2 text-sm">
              <i className="fa-solid fa-apple-whole"></i>
            </span>
            Vegetable
          </div>
          <div className="flex text-gray-400 text-sm items-center">
            <span className="mr-2 text-sm">
              <i className="far fa-clock"></i>
            </span>
            2 days ago
          </div>
        </div>
        <p
          className="text-gray-500
                    dark:text-gray-400 text-sm  text-justify first-letter:text-3xl first-letter:font-semibold first-letter:mr-1"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          perferendis ratione sequi id quo aliquid quos animi sint illum commodi
          dignissimos, Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Modi quos veritatis dignissimos facilis maiores tempora praesentium
          quasi maxime magnam consequatur quod assumenda, accusamus alias
          dolores sapiente eligendi cumque in culpa repellat, reprehenderit
          dolorem! Hic quisquam voluptates ad at nostrum assumenda corporis
          aliquid architecto. Voluptas, totam nisi perferendis aut veniam
          reprehenderit rem tempore nesciunt fugiat fuga vel quibusdam
          repellendus nam aspernatur, dolorem adipisci saepe modi possimus odit
          ullam sint incidunt deleniti! Nemo adipisci voluptates
        </p>
        <p className=" text-sm  text-justify border border-gray-400 bg-gray-300 p-4 text-gray-700 dark:bg-gray-400">
          <span className="text-gray-500 text-xl">
            <i className="fas fa-quote-left"></i>
          </span>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          perferendis ratione sequi id quo aliquid quos animi sint illum commodi
          dignissimos, Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          voluptates
          <span className="text-gray-500 text-xl ml-1">
            <i className="fas fa-quote-right"></i>
          </span>
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm  text-justify ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          perferendis ratione sequi id quo aliquid quos animi sint illum commodi
          dignissimos, Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Modi quos veritatis dignissimos facilis maiores tempora praesentium
          quasi maxime magnam consequatur quod assumenda, accusamus
        </p>
        <a href=" " className="block rounded-md overflow-hidden">
          <img
            src="/image/musician-plays-acoustic-guitar_169016-3933.jpg"
            className="w-full h-80 object-cover hover:scale-110 duration-500 transition "
            alt=""
          />
        </a>
        <p
          className="text-gray-500 
                    dark:text-gray-400 text-sm  text-justify"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          perferendis ratione sequi id quo aliquid quos animi sint illum commodi
          dignissimos, Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Modi quos veritatis dignissimos facilis maiores tempora praesentium
          quasi maxime magnam consequatur quod assumenda, accusamus alias
          dolores sapiente eligendi cumque in culpa repellat, reprehenderit
          dolorem! Hic quisquam voluptates ad at nostrum assumenda corporis
          aliquid architecto. Voluptas, totam nisi perferendis aut veniam
          reprehenderit rem tempore nesciunt fugiat fuga vel quibusdam
          repellendus nam aspernatur, dolorem adipisci saepe modi possimus odit
          ullam sint incidunt deleniti! Nemo adipisci voluptates
        </p>
      </div>
    </div>
  );
};

export default BigPost;
