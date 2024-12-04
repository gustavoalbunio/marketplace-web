import { Outlet } from "react-router-dom";

import backgroundLoginImage from "@/assets/background-login.svg";
import logoImage from "@/assets/logo.svg";

export function AuthLayout() {
  return (
    <div className="flex bg-background min-h-screen">
      <div className="flex-1 relative flex justify-center">
        <img className="absolute top-8 left-8" src={logoImage} alt="" />
        <img src={backgroundLoginImage} alt="" />
      </div>

      <div className="bg-white rounded-[32px] m-4 px-20 py-16 flex-1 max-w-[563px] w-full">
        <Outlet />
      </div>
    </div>
  );
}
