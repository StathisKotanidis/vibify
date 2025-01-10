import Image from "next/image";
import background_login from "@/public/bg.jpg";
import LoginForm from "@/app/_components/LoginForm";

export default function Page() {
  return (
    <div className="relative py-4 flex items-center justify-center min-h-screen  w-screen xl:justify-end xl:pr-[3rem]">
      <Image
        src={background_login}
        placeholder="blur"
        fill
        className="object-cover"
        alt="backgound-image"
      />
      <div className="relative z-10">
        <LoginForm />
      </div>
    </div>
  );
}
