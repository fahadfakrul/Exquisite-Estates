import { useLoaderData } from "react-router-dom";
import Consultant from "../Components/Consultant";
const ConsultancyHub = () => {
    const consultant = useLoaderData();
    return (
        <div>
            <section className="py-6 dark:bg-gray-100 dark:text-gray-800">
	<div className="container p-4 mx-auto space-y-16 sm:p-10">
		<div className="space-y-4">
        <h3 className="text-2xl font-bold leading-none sm:text-5xl">Meet our team</h3>
<p className="max-w-5xl dark:text-gray-600">Discover the expertise and dedication of our esteemed team of luxury real estate consultants. From Beverly Hills to Manhattan, Miami Beach to San Francisco, our consultants bring decades of experience and a passion for excellence to every client interaction. Whether you're seeking your dream home, looking to sell your property, or exploring investment opportunities, our team is here to guide you every step of the way. With personalized service, unparalleled market insights, and a commitment to exceeding your expectations, we're ready to help you achieve your luxury real estate goals.</p>
		</div>
		<div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
             { consultant.map(person => <Consultant key={person.id} person={person}></Consultant>)}
			
		</div>
	</div>
</section>
        </div>
    );
};

export default ConsultancyHub;