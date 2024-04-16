import { IoBedOutline } from "react-icons/io5";
import { FaShower } from "react-icons/fa6";
import { FaCar } from "react-icons/fa";
import { Link } from "react-router-dom";
const Estate = ({estate}) => {
    const {image,facilities,estate_title,price,location,description,bathroom,bedroom,carparkings}= estate;
    return (
        <div>
         <div className="card lg:w-96 bg-base-100 shadow-xl border border-[#13131326] transition  hover:scale-105 border-opacity-30">
            <figure className="px-4 pt-4">
              <img
                src={image}
                alt="Book"
                className="rounded-xl h-56"
              />
            </figure>
            
            
            <p className="mt-4 px-8 text-[#267188]">{price}</p>
            <div className="card-body  ">
          
              <div className="dark:text-gray-600" ><div className="h-16">
              <h2 className="card-title text-2xl font-bold font-playfair text-black ">{estate_title}</h2>
              </div>
              <p className="mt-5 ">{description}</p>
              <ul className="list-disc mt-5">
                {facilities.map(facility => <li className="text-base font-normal  " key={facility.id}>{facility}</li>)}
              </ul>
              <p className="my-5 font-medium">Location : {location}</p>
              <hr />
              <div className="flex justify-between font-medium dark:text-gray-600">
						<div className="flex items-center gap-3"><IoBedOutline /><span>{bedroom}</span><FaShower /><span>{bathroom}</span><FaCar /><span>{carparkings}</span></div>
                        <Link to={`/estate/${estate.id}`} className="btn bg-[#267188] text-white">View Property</Link>
					</div></div>
            </div>
         
        
         </div>   
        </div>
    );
};

export default Estate;