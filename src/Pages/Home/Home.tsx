import Testimonials from "../../Components/Testimonials/Testimonals";
import Team from "../../Components/Team/Team";
import Faq from "../../Components/Faq/Faq";
import ServiceHome from "../../Components/ServiceHome/ServiceHome";
import Welcome from "../../Components/Welcome/Welcome";
import WhyChooseUs from "../../Components/WhyChooseUs/WhyChooseUs";

const Home = () => {
 

    return (
        <div className="min-h-screen">
            <Welcome />
            <ServiceHome/>
            <WhyChooseUs/>
            <Testimonials/>
            <Team/>
            <Faq/>
        </div>
    );
};

export default Home;
