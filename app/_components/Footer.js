import { FaRegCopyright } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="flex text-sm basis-[10%] gap-2 justify-center items-center bg-mainColor text-white sm:text-lg">
      <FaRegCopyright />
      <span>2025 Vibify. All rights reserved</span>
    </footer>
  );
}
