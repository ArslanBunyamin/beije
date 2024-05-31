import Image from "next/image";
import logo from "../../assets/logo.svg";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
type Props = {};

const Navbar = (props: Props) => {
  const linkStyle =
    "text-nowrap cursor-pointer border-b-black border-b border-opacity-0 hover:border-opacity-100 transition-all";
  return (
    <div className="p-5 bg-header text-black flex justify-center sm:gap-16 md:gap-24 lg:gap-32 text-sm">
      <a href="https://beije.co" className="w-fit">
        <Image src={logo} alt="logo" className="min-w-12 w-12" />
      </a>
      <div className="flex items-center gap-5">
        <div className="before:absolute before:w-2 before:aspect-square before:-left-2 before:-top-1 before:rounded-full before:bg-red-600 before:animate-wink relative text-nowrap cursor-pointer border-b-black border-b border-opacity-0 hover:border-opacity-100 transition-all">
          Ürünler
        </div>
        <div className={linkStyle}>Biz Kimiz?</div>
        <div className={linkStyle}>Bağış Kültürü</div>
        <div className={linkStyle}>Regl Testi!</div>
        <div className={linkStyle}>Kendi Paketini Oluştur</div>
      </div>
      <div className="flex gap-3 items-center text-xl">
        <ShoppingCartOutlinedIcon />
        <PersonOutlineOutlinedIcon />
      </div>
    </div>
  );
};

export default Navbar;
