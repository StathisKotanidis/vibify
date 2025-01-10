import Image from "next/image";
import vibify_logo from "@/public/logo.png";
import { FaSpotify } from "react-icons/fa";
import SpotifyLogin from "@/app/_components/SpotifyLogin";

export default function LoginForm() {
  return (
    <div className="flex bg-gray-600 bg-opacity-50 flex-col border-4 border-gray-600 border-opacity-50 p-2 w-[300px] h-[400px] rounded-lg">
      <div className="flex-grow basis-[40%]">
        <Image src={vibify_logo} className="object-cover" alt="vibify-logo" />
      </div>

      <div className="flex justify-center items-center flex-grow basis-[30%]">
        <SpotifyLogin />
      </div>

      <div className="flex-grow font-semibold text-sm flex items-center justify-between basis-[30%]">
        <span className="">Don&apos;t have an account?</span>
        <a
          href="https://www.spotify.com/us/signup"
          target="_target"
          className=" flex items-center hover:underline"
        >
          <span>Sign up for</span>
          <FaSpotify />
        </a>
      </div>
    </div>
  );
}
