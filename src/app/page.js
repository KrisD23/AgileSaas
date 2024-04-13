import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { connectToDb } from "../../lib/utils";

async function HomePage() {
  return (
    <div className="btn">
      <RegisterLink>Maa chuda</RegisterLink>
      Hello Universe!
    </div>
  );
}

export default HomePage;
