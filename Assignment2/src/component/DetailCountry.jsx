import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import isEmpty from "lodash/isEmpty";

const DetailCountry = () => {
  let { countryName } = useParams();
  const [detailCountry, setDetailCountry] = useState([]);
  const [borderCountry, setBorderCountry] = useState([]);

  console.log(countryName);
  useEffect(() => {
    const getDetailCountry = () => {
      axios
        .get(`https://restcountries.com/v3.1/name/${countryName}`)
        .then((response) => {
          setDetailCountry(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getDetailCountry();
  }, [countryName]);

  useEffect(() => {
    const getBorderCountry = () => {
      axios
        .get(`https://restcountries.com/v3.1/all`)
        .then((response) => {
          setBorderCountry(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getBorderCountry();
  }, []);

  return (
    <div className="w-full h-screen pt-20 ps-10 mb-0 pb-32">
      <Link to={"/"}>
        <button
          type="button"
          className="flex items-center gap-3 py-1.5 px-7 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:shadow-lg"
        >
          <FaArrowLeftLong /> Back
        </button>
      </Link>
      {detailCountry?.map((data, index) => {
        return (
          <div
            key={index}
            className="w-full h-full flex justify-center items-center gap-20 mt-16"
          >
            <div>
              <img src={data.flags.png} alt="" className="w-full" />
            </div>
            <div className="flex flex-col justify-start gap-5">
              <h1 className="text-lg font-extrabold dark:text-white">
                {data.name.common}
              </h1>
              <div className="flex gap-36">
                <div>
                  <h3 className="dark:text-white">
                    <span className="font-semibold dark:text-white">
                      Native Name:
                    </span>{" "}
                    {Object.values(data.name.nativeName)[0].common}
                  </h3>
                  <h3 className="dark:text-white">
                    <span className="font-semibold dark:text-white">
                      Population:{" "}
                    </span>
                    {new Intl.NumberFormat().format(data.population)}
                  </h3>
                  <h3 className="dark:text-white">
                    <span className="font-semibold dark:text-white">
                      Region:
                    </span>{" "}
                    {data.region}
                  </h3>
                  <h3 className="dark:text-white">
                    <span className="font-semibold dark:text-white">
                      Sub Region:
                    </span>{" "}
                    {data.subregion}
                  </h3>
                  <h3 className="dark:text-white">
                    <span className="font-semibold dark:text-white">
                      Capital:
                    </span>{" "}
                    {data.capital}
                  </h3>
                </div>
                <div>
                  <h3 className="dark:text-white">
                    <span className="font-semibold dark:text-white">
                      Top Level Domain:
                    </span>{" "}
                    {data.tld}{" "}
                  </h3>
                  <h3 className="dark:text-white">
                    <span className="font-semibold dark:text-white">
                      Currencies:
                    </span>
                    {Object.values(data.currencies)[0].name}
                  </h3>
                  <h3 className="dark:text-white">
                    <span className="font-semibold dark:text-white">
                      Languages:
                    </span>{" "}
                    {Object.values(data.languages)[0]}
                  </h3>
                </div>
              </div>
              <div className="flex justify-start items-center gap-3">
                <h2 className="dark:text-white">
                  <span className="font-semibold dark:text-white">
                    Border Countries:
                  </span>{" "}
                </h2>
                {!isEmpty(data.borders)
                  ? data.borders.map((btn, index) => (
                      <div key={index}>
                        {borderCountry.map((data, index) => {
                          if (data.cca3 === btn) {
                            return (
                              <Link key={index} to={`/${data.name.common}`}>
                                <button className="bg-white w-[100px] rounded-sm shadow-lg dark:bg-darkblue text-white">
                                  {data.name.common}
                                </button>
                              </Link>
                            );
                          }
                          return null;
                        })}
                      </div>
                    ))
                  : null}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DetailCountry;
