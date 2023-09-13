"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <Image
      onClick={() => router.push("/")}
      // kliknięcie resetuje zaznaczone kategorie i przekierowuje użytkownika na strone główną
      alt="Logo"
      className="md:block cursor-pointer"
      height="100"
      width="100"
      src="/images/logo.png"
    />
  );
};
export default Logo;
//
