import React from "react";
import { ShoppingCartIcon } from "lucide-react";
import Link from "next/link";

const Menu = () => {
  return (
    <div className="flex justify-end">
      <nav className="flex gap-3 w-full">
        <Link href="/signin" className="flex items-center header-button">
          Hello, Sign in
        </Link>

        <Link href="/cart" className="header-button">
          <div className="flex items-center">
            <ShoppingCartIcon className="w-8 h-8" />
            Cart
          </div>
        </Link>
      </nav>
    </div>
  );
};

export default Menu;
