import { useLoaderData, useParams } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";

const ConsultantDetails = () => {
  const persons = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const person = persons.find((person) => person.id === idInt);
  console.log(person);
  return (
    <div>
      <div className="lg:flex gap-10  p-6 dark:bg-gray-50 dark:text-gray-800">
        <img
          src={person.image}
          alt=""
          className="flex-1 flex-shrink-0 object-top h-96 mb-4 bg-center rounded-sm dark:bg-gray-500 aspect-square"
        />
        <div  >
          <h2 className="text-4xl font-semibold font-playfair">{person.name}</h2>
          <div className="flex items-center gap-2 mt-3 ">
            <FaLocationDot />
          <p className="block pb-2 text-sm dark:text-gray-600">
            {person.address}
          </p></div>
          
          <p className="mt-4 text-xl">
            {person.description}
          </p>
         
          
          <p className="mt-4 text-base">
            Skype: <span className="underline hover:text-[#418397]">{person.skype}</span>
          </p>
          <p className="mt-4 text-base">
           Email: <span className="underline hover:text-[#418397]">{person.email}</span>
          </p>
          <p className="mt-4 text-base">
            Website: <span className="underline hover:text-[#418397]">{person.website}</span>
          </p>
          <p className="mt-4 text-base">
           Phone: <span className="underline hover:text-[#418397]">{person.phone}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConsultantDetails;
