import axios from "axios";
import { useEffect, useState, useMemo } from "react";
import isEmpty from "lodash/isEmpty";
import ReactPaginate from "react-paginate";

import Card from "./Card";
import Navbar from "./Navbar";

const HomePage = () => {
  const [allCountry, setAllCountry] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");
  const [searchFilter, setSearchFilter] = useState(allCountry);
  const [filterRegion, setFilterRegion] = useState("");
  const [itemOffset, setItemOffset] = useState(0);
  const [initalPage, setInitialPage] = useState(0);

  const getAllData = () => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        setAllCountry(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getAllData();
  }, []);

  const handleClickFilter = (value) => {
    setFilterRegion(value);
  };
  const displayCountry = useMemo(() => {
    if (!isEmpty(filterRegion)) {
      return allCountry.filter((data) => data.region === filterRegion);
    }
    if (filterRegion === "") {
      return allCountry;
    }
    return allCountry;
  }, [allCountry, filterRegion]);

  const displayFilter = useMemo(() => {
    if (!isEmpty(searchCountry)) {
      return searchFilter;
    }
    return displayCountry;
  }, [displayCountry, searchCountry, searchFilter]);

  const handleSearchCountry = (e) => {
    setSearchCountry(e.target.value);
    const searching = displayCountry.filter((country) =>
      country.name.common.toLowerCase().includes(e.target.value.toLowerCase())
    );
    console.log(searching);
    setSearchFilter(searching);
    setItemOffset(0);
    setInitialPage(0);
  };

  const itemsPerPage = 10;

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = displayFilter.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(displayFilter.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % displayFilter.length;
    setItemOffset(newOffset);
    setInitialPage(event.selected);
  };

  return (
    <>
      <Navbar
        countryValue={searchCountry}
        countryOnChange={handleSearchCountry}
        handleClick={handleClickFilter}
      />
      <h1 className="text-center text-3xl">{filterRegion}</h1>
      <div className="grid justify-center items-center sm:grid-cols-3 lg:grid-cols-4 gap-5 m-10">
        {currentItems?.map((data, index) => (
          <Card
            key={index}
            countryImg={data.flags.png}
            countryName={data.name.common}
            countryPopulation={data.population}
            countryRegion={data.region}
            countryCapital={data.capital}
          />
        ))}
      </div>
      <div>
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          forcePage={initalPage}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          containerClassName="flex justify-center items-center"
          pageClassName="mx-1 dark:text-white"
          pageLinkClassName="px-5 py-2 rounded-md bg-white hover:bg-neutral-50 dark:bg-darkblue dark:text-white dark:sm:hover:bg-white dark:sm:hover:text-black"
          previousClassName="dark:text-white"
          previousLinkClassName="border-[1px] px-5 py-2 me-2 hover:bg-white rounded-md dark:text-white dark:sm:hover:bg-white dark:sm:hover:text-black"
          nextClassName="page-item"
          nextLinkClassName="border-[1px] px-5 py-2 me-2 rounded-md hover:bg-white dark:text-white dark:sm:hover:bg-white dark:sm:hover:text-black"
          breakClassName="page-item"
          breakLinkClassName="border-[1px] px-5 py-2 me-2 rounded-md hover:bg-white dark:text-white dark:sm:hover:bg-white dark:sm:hover:text-black"
        />
      </div>
    </>
  );
};

export default HomePage;
