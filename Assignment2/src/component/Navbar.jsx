import PropTypes from "prop-types";
import { Dropdown } from "flowbite-react";

const Navbar = ({ countryValue, countryOnChange, handleClick }) => {
  return (
    <>
      <div className="w-full mt-12">
        <div className="flex flex-col md:flex-row items-center justify-around gap-2">
          <div>
            <form className="max-w-md mx-auto w-[350px]">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-6 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  value={countryValue}
                  type="search"
                  id="default-search"
                  className="block w-full ps-16 p-4 pe-16 text-sm text-gray-900 border-none shadow-lg rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Search For a country..."
                  required
                  name="search"
                  onChange={countryOnChange}
                />
              </div>
            </form>
          </div>
          <div>
            <Dropdown
              label="Filter by Region"
              dismissOnClick={false}
              class="bg-white  rounded-lg shadow-lg p-1 dark:bg-darkblue dark:text-white"
            >
              <Dropdown.Item onClick={() => handleClick("Africa")}>
                Africa
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleClick("Americas")}>
                America
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleClick("Asia")}>
                Asia
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleClick("Europe")}>
                Europe
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleClick("Oceania")}>
                Oceania
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleClick("")}>All</Dropdown.Item>
            </Dropdown>
          </div>
        </div>
      </div>
    </>
  );
};

Navbar.propTypes = {
  countryValue: PropTypes.object,
  countryOnChange: PropTypes.func,
  handleClick: PropTypes.func,
};

export default Navbar;
