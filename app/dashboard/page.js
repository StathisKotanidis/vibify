import Sidebar from "@/app/_components/Sidebar";

export default function Page() {
  return (
    <div className="flex">
      <Sidebar />
      {/* DashBoard */}
      <div className="p-8 w-screen bg-gray-100 min-h-screen flex-1">
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <p className="text-2xl font-bold">Dashboard to the right side</p>
      </div>
    </div>
  );
}
