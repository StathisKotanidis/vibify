import Image from "next/image";
import background_login from "@/public/bg.jpg";
import LoginForm from "@/app/_components/LoginForm";

export default function Page() {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <Image
        src={background_login}
        fill
        placeholder="blur"
        alt="backgound-image"
      />
      <div className="relative">
        <LoginForm />
      </div>
    </div>
  );
}
