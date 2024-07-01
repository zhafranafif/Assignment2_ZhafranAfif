import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = ({
  countryImg,
  countryName,
  countryPopulation,
  countryRegion,
  countryCapital,
}) => {
  return (
    <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img className="rounded-t-lg h-[150px] w-full" src={countryImg} alt="" />
      <div className="p-5 pb-10">
        <Link to={`/${countryName}`}>
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {countryName}
          </h5>
        </Link>
        <div className="flex flex-col gap-1">
          <p className="dark:text-white">
            {" "}
            <span className="font-semibold dark:text-white">
              Population:
            </span>{" "}
            {new Intl.NumberFormat().format(countryPopulation)}
          </p>
          <p className="dark:text-white">
            <span className="font-semibold dark:text-white">Region:</span>{" "}
            {countryRegion}
          </p>
          <p className="dark:text-white">
            <span className="font-semibold dark:text-white">Capital:</span>{" "}
            {countryCapital}
          </p>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  countryImg: PropTypes.string,
  countryName: PropTypes.string,
  countryPopulation: PropTypes.number,
  countryRegion: PropTypes.string,
  countryCapital: PropTypes.array,
  countryOnchange: PropTypes.array,
};

export default Card;
