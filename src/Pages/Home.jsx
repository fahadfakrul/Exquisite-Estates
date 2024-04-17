import Banner from "../Components/Banner";

import Estates from "../Components/Estates";
import UseAuth from "../Hooks/UseAuth";

const Home = () => {
    const { loading} = UseAuth();
    if (loading) {
        return <div className="text-center">
            <span className="loading loading-spinner text-black loading-lg "></span>
        </div>
    }
    return (
        <div>
            
            <Banner></Banner>
            <Estates></Estates>
            
        </div>
    );
};

export default Home;