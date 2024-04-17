import { IoBedOutline } from "react-icons/io5";
import { FaShower } from "react-icons/fa6";
import { FaCar } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import 'animate.css';
const Estate = ({ estate }) => {
  
  const {
    image,
    facilities,
    status,
    estate_title,
    price,
    location,
    description,
    bathroom,
    bedroom,
    carparkings,
  } = estate;

  const handleProperty = () => {
    window.scrollTo(0, 0);
  }
  return (
    <div>
      <div className="card lg:w-96 bg-base-100 shadow-xl border border-[#13131326] transition  hover:scale-105 border-opacity-30">
        <div>
          <figure className="px-4 pt-4 ">
            <img src={image} alt="Book" className="rounded-xl h-56" />
           
          </figure>
        </div>

        <div className="flex justify-between items-center pr-6">
        <p className="mt-4 px-8 text-[#267188] animate__animated animate__shakeX">{price}</p>
        <p className="mt-4 px-2 text-white bg-[#267188] rounded-2xl">{status}</p>
        </div>
        <div className="card-body  ">
          <div className="dark:text-gray-600">
            <div className="h-16">
              <h2 className="card-title text-2xl font-bold font-playfair text-black ">
                {estate_title}
              </h2>
            </div>
            <p className="mt-5 ">{description.slice(0,55)}.......</p>
            <ul className="list-disc mt-5">
              {facilities.map((facility) => (
                <li className="text-base font-normal  " key={facility.id}>
                  {facility}
                </li>
              ))}
            </ul>
            <p className="my-5 font-medium">Location : {location}</p>
            <hr />
            <div className="flex justify-between font-medium dark:text-gray-600">
              <div className="flex items-center gap-3">
                <IoBedOutline />
                <span>{bedroom}</span>
                <FaShower />
                <span>{bathroom}</span>
                <FaCar />
                <span>{carparkings}</span>
              </div>
              <Link
                to={`/estate/${estate.id}`}
                className="btn bg-[#267188] text-white"
                onClick={handleProperty}
              >
                View Property
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Estate.propTypes = {
  estate: PropTypes.object,
}
export default Estate;
