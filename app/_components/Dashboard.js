import DashboardForm from "@/app/_components/DashboardForm";

export default function Dashboard() {
  return (
    <div className="p-2 w-screen bg-gray-100 flex-1 flex flex-col ">
      {/* <h2 className="text-2xl font-bold">Dashboard</h2> */}
      <DashboardForm />
    </div>
  );
}
