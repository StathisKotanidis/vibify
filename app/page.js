import { redirect } from "next/navigation";

export default function RootPage() {
  redirect("/login"); // Automatically redirect to /dashboard
}
