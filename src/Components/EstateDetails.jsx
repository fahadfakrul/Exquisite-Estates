import { useLoaderData, useParams } from "react-router-dom";
import { GiMaze } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";
import { PiBathtubLight,PiBedLight } from "react-icons/pi";
import { IoCarOutline } from "react-icons/io5";

const EstateDetails = () => {
  const estates = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const estate = estates.find((estate) => estate.id === idInt);
  return (
    <div className="border border-gray-300 rounded-xl p-5">
      <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex flex-col-reverse mx-auto lg:flex-row">
          <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-2/3 xl:w-2/5 border text-black">
            <div className="flex gap-4">
              <p className="mt-4 px-2 text-white bg-[#267188] rounded-2xl">
                {estate.status}
              </p>
              <p className="mt-4 px-2 text-white bg-[#267188] rounded-2xl">
                {estate.segment_name}
              </p>
            </div>
            <div className=" text-gray-500">
              <p className="text-3xl font-bold font-playfair text-black">
                {estate.estate_title}
              </p>
              <div className="flex items-center gap-2 mt-3 text-lg">
                <FaLocationDot />
                <p>{estate.location}</p>
              </div>
            </div>
            <div className="flex gap-8 ">
              <div className="flex flex-col w-max items-center">
                <GiMaze size={32} />
                <p>{estate.area}</p>
              </div>
              <div className="flex flex-col w-max items-center">
              <PiBedLight size={32} />
                <p>{estate.bedroom}</p>
              </div>
              <div className="flex flex-col w-max items-center">
              <PiBathtubLight  size={32}/>
                <p>{estate.bathroom}</p>
              </div>
              <div className="flex flex-col w-max items-center">
                < IoCarOutline size={32} />
                <p>{estate.carparkings}</p>
              </div>
            </div>
            <div className="flex space-x-2 sm:space-x-4 ">
              
                
              <div className="space-y-4">
                <p className="text-lg font-medium leading-snug">
                 Description
                </p>
                <p className="leading-snug text-gray-500">
                  {estate.description}
                </p>
                <ul className="list-disc mt-5 ">
              {estate.facilities.map((facility) => (
                <li className="text-xl font-normal  text-gray-500" key={facility.id}>
                  {facility}
                </li>
              ))}
            </ul>
                <p className="font-playfair text-4xl font-semibold ">{estate.price}</p>
              </div>
            </div>
            
          </div>
          <div className="lg:w-1/3 xl:w-3/5 dark:bg-gray-100">
            <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
              <img
                src={estate.image}
                alt=""
                className="rounded-lg shadow-lg dark:bg-gray-500 aspect-video sm:min-h-96"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EstateDetails;
