import { FaRegCopyright } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="flex h-[10%] pl-12 sm:pl-20 md:pl-56 lg:pl-60 xl:pl-64 text-sm gap-2 justify-center items-center bg-mainColor text-white sm:text-lg xl:font-semibold">
      <FaRegCopyright />
      <span>2025 Vibify. All rights reserved</span>
    </footer>
  );
}
