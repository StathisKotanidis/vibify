import SpotifyLogin from "@/app/_components/SpotifyLogin";
import Logo from "@/app/_components/Logo";
import SignUp from "@/app/_components/SignUp";

export default function LoginForm() {
  return (
    <div className="flex bg-gray-600 bg-opacity-20 flex-col border-4 border-gray-600 border-opacity-50 p-2 w-[300px] h-[400px] sm:w-[350px] sm:h-[450px] md:w-[400px] md:h-[500px] lg:w-[450px] lg:h-[550px] xl:h-[600] rounded-lg">
      <Logo />
      <SpotifyLogin />
      <SignUp />
    </div>
  );
}
