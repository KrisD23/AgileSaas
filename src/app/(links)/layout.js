import LandingPageNavBar from "@/components/navbar/LandingPageNavBar";

export default function linkLayout({ children }) {
  return (
    <>
      <LandingPageNavBar />
      {children}
    </>
  );
}
