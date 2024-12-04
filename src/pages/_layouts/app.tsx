import { Button } from "@/components/ui/button";
import { ChartColumn, Package, Plus } from "lucide-react";
import { Link, Outlet, useNavigate } from "react-router-dom";

import LogoMiniImage from "@/assets/logo-mini.svg";
import { Avatar } from "@/components/Avatar";

export function AppLayout() {
  const navigate = useNavigate();

  return (
    <div>
      <header className="flex items-center justify-between p-5 border-b-[1px] border-shape">
        <img src={LogoMiniImage} alt="" />
        <nav className="flex items-center gap-2">
          <Link
            to="/"
            className="flex items-center gap-2 bg-shape rounded-xl text-orange-base text-sm px-4 py-3"
          >
            <ChartColumn /> Dashboard
          </Link>
          <Link
            to="/products"
            className="flex items-center gap-2 text-gray-300 text-sm px-4 py-3"
          >
            <Package /> Produtos
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button className="gap-2" onClick={() => navigate("/product/new")}>
            <Plus />
            Novo produto
          </Button>
          <Avatar />
        </div>
      </header>

      <div className="mx-auto max-w-[1030px] w-full mb-10">
        <Outlet />
      </div>
    </div>
  );
}
