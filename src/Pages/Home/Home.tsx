import Testimonials from "../../Components/Testimonials/Testimonals";
import Team from "../../Components/Team/Team";
import Faq from "../../Components/Faq/Faq";
import ServiceHome from "../../Components/ServiceHome/ServiceHome";
import Welcome from "../../Components/Welcome/Welcome";

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
