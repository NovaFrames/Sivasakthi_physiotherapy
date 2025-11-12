import Testimonials from "../Components/Testimonals";
import Team from "../Components/Team";
import Faq from "../Components/Faq";
import ServiceHome from "../Components/ServiceHome";
import Welcome from "../Components/Welcome";

const Home = () => {
 

    return (
        <div className="min-h-screen">
            <Welcome />
            <ServiceHome/>
            <Testimonials/>
            <Team/>
            <Faq/>
        </div>
    );
};

export default Home;
