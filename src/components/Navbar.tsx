"use client";

import Image from "next/image";
import logo from "../assets/logo.svg";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useState } from "react";

type Props = {};

const Navbar = (props: Props) => {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  const linkStyle = "text-nowrap cursor-pointer transition-all";
  const underlineAnimation =
    " after:opacity-0 after:block after:h-[0.5px] after:bg-black after:transition-all after:duration-500 hover:after:opacity-100";
  const extraMobileLinkStyle =
    " py-2 text-sm hover:underline decoration-[0.5px]";

  return (
    <div className="fixed top-0 w-full z-10 ">
      <div className="p-5 bg-header text-black flex justify-center text-sm md:px-16 lg:px-44">
        <a href="https://beije.co" className="grow">
          <Image src={logo} alt="logo" className="min-w-12 w-12" />
        </a>
        <div className="md:flex grow items-center gap-5 hidden">
          <div
            className={
              linkStyle +
              underlineAnimation +
              " before:absolute before:w-2.5 before:aspect-square before:-left-3 before:-top-1 before:rounded-full before:bg-red-600 before:animate-wink relative"
            }
          >
            Ürünler
          </div>
          <div className={linkStyle + underlineAnimation}>Biz Kimiz?</div>
          <div className={linkStyle + underlineAnimation}>Bağış Kültürü</div>
          <div className={linkStyle + underlineAnimation}>Regl Testi!</div>
          <div className={linkStyle + underlineAnimation}>
            Kendi Paketini Oluştur
          </div>
        </div>
        <div className="flex gap-3 items-center text-md">
          <button>
            <ShoppingCartOutlinedIcon />
          </button>
          <button>
            <PersonOutlineOutlinedIcon />
          </button>
          <div className="block md:hidden">
            {isMenuOpen ? (
              <button onClick={() => setisMenuOpen(false)}>
                <CloseIcon />
              </button>
            ) : (
              <button onClick={() => setisMenuOpen(true)}>
                <MenuIcon />
              </button>
            )}
          </div>
        </div>
      </div>
      {isMenuOpen ? (
        <div className="absolute w-full animate-scaleUp origin-top px-5 pb-5 bg-header text-black flex flex-col md:hidden shadow-xl">
          <div
            className={
              linkStyle +
              extraMobileLinkStyle +
              " before:absolute before:w-2.5 before:aspect-square before:-left-3 before:top-3 before:rounded-full before:bg-red-600 before:animate-wink relative"
            }
          >
            <span className="grow">Ürünler</span> <ChevronRightIcon />
          </div>
          <div className={linkStyle + extraMobileLinkStyle}>
            <span className="grow">Biz Kimiz?</span> <ChevronRightIcon />
          </div>
          <div className={linkStyle + extraMobileLinkStyle}>
            <span className="grow">Bağış Kültürü</span> <ChevronRightIcon />
          </div>
          <div className={linkStyle + extraMobileLinkStyle}>Blog</div>
          <div className={linkStyle + extraMobileLinkStyle}>Regl Testi!</div>
          <div className={linkStyle + extraMobileLinkStyle}>
            Kendi Paketini Oluştur
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
