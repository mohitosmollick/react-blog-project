const MobileNav = () => {
  return (
    <div
      class="fixed w-full h-full  left-0 top-0 z-10 xl:hidden bg-opacity-25 invisible "
      id="sidebar_wrapper"
    >
      <div
        class="fixed top-0 w-64 h-full bg-white dark:bg-gray-900  shadow-md z-10 flex flex-col"
        id="sidebar"
      >
        {/* <!-- search bar --> */}
        <div class="relative ml-auto group mr-auto mt-4 block md:hidden">
          <input
            class="block w-52 shadow-sm border-none bg-gray-50 text-sm text-gray-500 rounded-sm px-3 py-1 focus:outline-none focus:border-gray-300 focus:ring-gray-300 focus:ring-2 outline-2 dark:bg-gray-700 dark:text-gray-500 dark:focus:border-gray-400 dark:focus:ring-1 sm:text-sm"
            type="text"
            placeholder="Search.."
          />

          <span class="absolute right-3 top-2  text-sm text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300">
            <i class="fas fa-search"></i>
          </span>
        </div>
        {/* <!-- navbar --> */}
        <div class="p-5 block">
          <h3 class="font-roboto text-xl font-semibold dark:text-gray-300 mb-3">
            Menu
          </h3>
          <a
            href=" "
            class="menu dark:hover:bg-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
          >
            <span class="mr-2">
              <i class="fas fa-home"></i>
            </span>
            Home
          </a>
          <a
            href=" "
            class="menu dark:hover:bg-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
          >
            <span class="mr-2">
              <i class="far fa-file-alt"></i>
            </span>
            About
          </a>
          <a
            href=" "
            class="menu dark:hover:bg-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
          >
            <span class="mr-2">
              <i class="fas fa-phone"></i>
            </span>
            Contact
          </a>
        </div>
        {/* <!-- category --> */}
        <div class="p-5">
          <h3 class="font-roboto text-xl font-semibold dark:text-gray-300 text-gray-700 mb-3">
            Category
          </h3>
          <div class="text-gray-700 space-y-2">
            <a
              href=" "
              class="flex items-center font-semibold leading-4 hover:bg-gray-200 px-3 py-2 rounded-md transition dark:hover:bg-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            >
              <span class="mr-2">
                <i class="fa-solid fa-apple-whole"></i>
              </span>
              <span>Fruit</span>
              <span class="ml-auto text-xs px-1 text-white rounded-full bg-gray-500 ">
                12
              </span>
            </a>
            <a
              href=" "
              class="flex items-center font-semibold leading-4 hover:bg-gray-200 px-3 py-2 rounded-md transition dark:hover:bg-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            >
              <span class="mr-2">
                <i class="fa-solid fa-apple-whole"></i>
              </span>
              <span>Fruit</span>
              <span class="ml-auto text-xs px-1 text-white rounded-full bg-gray-500 ">
                12
              </span>
            </a>
            <a
              href=" "
              class="flex items-center font-semibold leading-4 hover:bg-gray-200 px-3 py-2 rounded-md transition dark:hover:bg-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            >
              <span class="mr-2">
                <i class="fa-solid fa-apple-whole"></i>
              </span>
              <span>Fruit</span>
              <span class="ml-auto text-xs px-1 text-white rounded-full bg-gray-500 ">
                12
              </span>
            </a>
            <a
              href=" "
              class="flex items-center font-semibold leading-4 hover:bg-gray-200 px-3 py-2 rounded-md transition dark:hover:bg-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            >
              <span class="mr-2">
                <i class="fa-solid fa-apple-whole"></i>
              </span>
              <span>Fruit</span>
              <span class="ml-auto text-xs px-1 text-white rounded-full bg-gray-500 ">
                12
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
