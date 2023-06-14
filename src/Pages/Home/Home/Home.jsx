import Banner from "../../../components/Banner/Banner";
import Gallery from "../../../components/gallery/Gallery";
import PopularInstructor from "../../../Pages/Home/PopularInstructor/PopularInstructor";
import PopularClasses from "../../../Pages/Home/PopularClasses/PopularClasses";
import OurSkill from "../../OurSkill/OurSkill";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <PopularInstructor></PopularInstructor>
      <PopularClasses></PopularClasses>
      <Gallery></Gallery>
      <OurSkill></OurSkill>
    </div>
  );
};

export default Home;
