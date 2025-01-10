import { FaSpotify } from "react-icons/fa";

export default function SignUp() {
  return (
    <div className="flex-grow font-semibold text-sm flex items-center justify-between basis-[30%] sm:text-[1rem] md:text-[1.2rem] lg:text-[1.3rem]">
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
  );
}
