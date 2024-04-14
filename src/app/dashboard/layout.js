import DashboardPageNavBar from "@/components/navbar/DashboardPageNavBar";

const layout = ({ children }) => {
  return (
    <div>
      <DashboardPageNavBar />
      {children}
    </div>
  );
};

export default layout;
