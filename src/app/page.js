import LandingPageNavBar from "@/components/navbar/LandingPageNavBar";
import LandingPageHeroComponent from "./LandingPageHeroComponent";

async function HomePage() {
  return (
    <div>
      <LandingPageNavBar />
      <LandingPageHeroComponent />
    </div>
  );
}

export default HomePage;
