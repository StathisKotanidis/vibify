import DashboardForm from "@/app/_components/DashboardForm";
import Footer from "@/app/_components/Footer";

export default function Dashboard() {
  return (
    <div className="w-screen bg-gray-100 flex-1 flex flex-col ">
      {/* <h2 className="text-2xl font-bold">Dashboard</h2> */}
      <DashboardForm />
      <Footer />
    </div>
  );
}
