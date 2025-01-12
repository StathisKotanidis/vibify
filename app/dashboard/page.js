import Sidebar from "@/app/_components/Sidebar";
import Dashboard from "@/app/_components/Dashboard";

export default function Page() {
  return (
    <div className="flex min-h-screen overflow-y-hidden">
      <Sidebar />
      <Dashboard />
      <footer></footer>
    </div>
  );
}
