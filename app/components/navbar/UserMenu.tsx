"use client";

import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import MenuItem from "../navbar/MenuItem";
import { useCallback, useState } from "react";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";

import { signOut } from "next-auth/react";
import { SafeUser } from "@/app/types";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}
const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={() => {}}
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
        >
          Airbnb your home
        </div>
        <div
          onClick={toggleOpen}
          className="p-4
        md:py-1
        md:px-2
        border-[1px]
        flex
        flex-row
        items-center
        gap-3
        rounded-full
        cursor-pointer
        hover:shadow-md
        transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/ bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem label="My trips" onClick={() => {}} />
                <MenuItem label="Favorites" onClick={() => {}} />
                <MenuItem label="Reservations" onClick={() => {}} />
                <MenuItem label="Properties" onClick={() => {}} />
                <MenuItem label="Airnb my home" onClick={() => {}} />
                <hr />
                <MenuItem onClick={() => signOut()} label="Logout" />
              </>
            ) : (
              <>
                <MenuItem label="Login" onClick={loginModal.onOpen} />
                <MenuItem onClick={registerModal.onOpen} label="Sign-up" />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

// After the logging in, the user will se 5 options in the menu: My trips, Favorites, Reservations, Properties, Airnb my home. The only 2 options are Login and Sign-up after successfully loggin out,.

export default UserMenu;
// Ten fragment kodu to funkcjonalny komponent w React o nazwie UserMenu. Renderuje on menu użytkownika z kilkoma opcjami. Komponent korzysta z hooków Reacta takich jak useState i useCallback do zarządzania stanem i obsługi interakcji użytkownika. Po kliknięciu ikony menu, przełącza on widoczność menu rozwijanego. Menu rozwijane zawiera opcje logowania i rejestracji, które są obsługiwane przez loginModal.onOpen i registerModal.onOpen odpowiednio.
