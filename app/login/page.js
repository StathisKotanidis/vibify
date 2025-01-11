import Image from "next/image";
import background_login from "@/public/bg.jpg";
import LoginForm from "@/app/_components/LoginForm";

export default function Page() {
  return (
    <>
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
    </>
  );
}
