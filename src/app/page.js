import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { connectToDb } from "../lib/utils";
import LandingPageNavBar from "@/components/navbar/LandingPageNavBar";

async function HomePage() {
  return (
    <div>
      {/* Navbar for landing page */}
      <LandingPageNavBar />
    </div>
  );
}

export default HomePage;
