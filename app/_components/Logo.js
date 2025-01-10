import Image from "next/image";
import vibify_logo from "@/public/logo.png";

export default function Logo() {
  return (
    <div className="flex-grow basis-[40%]">
      <Image
        src={vibify_logo}
        className="object-cover w-full"
        alt="vibify-logo"
      />
    </div>
  );
}
