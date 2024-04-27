import LandingPageNavBar from "@/components/navbar/LandingPageNavBar";
import LandingPageHeroComponent from "./LandingPageHeroComponent";

async function HomePage() {
  return (
    <div className="h-full w-full ">
      <LandingPageNavBar />
      <LandingPageHeroComponent />
    </div>
  );
}

export default HomePage;
