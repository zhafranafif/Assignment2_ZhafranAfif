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
    setItemOffset(1);
    const searching = displayCountry.filter((country) =>
      country.name.common.toLowerCase().includes(e.target.value.toLowerCase())
    );
    console.log(searching);
    setSearchFilter(searching);
  };

  const itemsPerPage = 10;

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = displayFilter.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(displayFilter.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % displayFilter.length;

    setItemOffset(newOffset);
  };

  return (
    <>
      <Navbar
        countryValue={searchCountry}
        countryOnChange={handleSearchCountry}
        handleClick={handleClickFilter}
      />
      <h1 className="text-center text-3xl">{filterRegion}</h1>
      <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-5 m-10">
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
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakClassName="page-item"
          breakLinkClassName="page-link"
          activeClassName="active"
          className="w-full rounded-lg  flex justify-center items-center"
        />
      </div>
    </>
  );
};

export default HomePage;
