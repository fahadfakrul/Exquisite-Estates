import { useLoaderData } from "react-router-dom";
import Estate from "./Estate";

const Estates = () => {
    const estates = useLoaderData(); 
    console.log(estates);
    return (
        <div className="container mx-auto mt-10 lg:mt-24">
        <section className="  ">
          <div className="container  mx-auto space-y-8">
            <div className=" text-center">
              <h2 className="text-3xl font-bold font-playfair">Estates</h2>
            </div>
  
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {
              estates.map(estate => <Estate key={estate.id} estate={estate}></Estate>)
             }
            </div>
          </div>
        </section>
      </div>
    );
};

export default Estates;