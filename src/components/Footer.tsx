import Image from "next/image";
import logo from "../assets/logo_white.svg";
import TextField from "@mui/material/TextField";
import cards from "../assets/creditCards.png";
import {
  Facebook,
  Headphones,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="bg-[#262626] text-sm pt-20 pb-5 px-8 lg:px-32 text-center md:text-left">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 pb-12 md:pb-16">
        <div className="flex flex-col gap-5">
          <a
            href="https://beije.co"
            className="flex justify-center md:justify-normal"
          >
            <Image src={logo} alt="logo" className="min-w-12 w-12" />
          </a>
          <div>
            <div className="font-medium opacity-70">Arayı açmayalım!</div>
            <div className="text-xs opacity-60">
              beije’deki yeni ürün ve gelişmeleri sana haber verelim & aylık
              e-gazetemiz döngü’ye abone ol!
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-3">
            <TextField
              id="outlined-basic"
              label="e-mail adresin"
              variant="outlined"
              placeholder="halide.edip@adivar.com"
              size="small"
              sx={{
                color: "white",
                width: "100%",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#aaa8",
                  },
                  "&:hover fieldset": {
                    borderColor: "#aaa8",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#aaa8",
                    borderWidth: "1px",
                  },
                },
                "& input": {
                  color: "#aaa",
                },
                ".MuiFormLabel-root": {
                  color: "#aaa!important",
                },
              }}
            />
            <button className="bg-secondaryBg w-full md:w-auto text-black p-2 md:px-3 rounded-full font-semibold hover:bg-opacity-80">
              Gönder
            </button>
          </div>
          <div className="text-[10.5px] text-xs opacity-60">
            Abone olarak, beije KVKK ve Gizlilik Politikası&apos;nı kabul ediyor
            ve beije&apos;den haber almayı onaylıyorum.
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="grid grid-cols-2 gap-2 font-light">
            <div className="flex flex-col gap-4">
              <div>beije Ped</div>
              <div>beije Günlük Ped</div>
              <div>beije Tampon</div>
              <div>beije Store</div>
            </div>
            <div className="flex flex-col gap-4">
              <div>Blog</div>
              <div>Sıkça Sorulan Sorular</div>
              <div>Biz Kimiz?</div>
              <div>Quiz</div>
            </div>
          </div>
          <div className="flex flex-row justify-between md:flex-col gap-4 text-xs">
            <div>
              <Facebook className="scale-75" />
              <span className="hidden md:block"> Facebook</span>
            </div>
            <div>
              <Instagram className="scale-75" />
              <span className="hidden md:block"> Instagram</span>
            </div>
            <div>
              <Twitter className="scale-75" />
              <span className="hidden md:block"> Twitter</span>
            </div>
            <div>
              <LinkedIn className="scale-75" />
              <span className="hidden md:block"> Linkedin</span>
            </div>
            <div>
              <Headphones className="scale-75" />
              <span className="hidden md:block"> Spotify</span>
            </div>
          </div>
        </div>
      </div>
      <div className="h-px w-full bg-white"></div>
      <div className="flex flex-col md:flex-row opacity-70 py-8 gap-5 text-xs">
        <div className="font-medium grow">
          2024 beije. Tüm hakları saklıdır.
        </div>
        <div>KVKK</div>
        <div>KVKK Başvuru Formu</div>
        <div>Üyelik Sözleşmesi </div>
        <div>Gizlilik Politikası</div>
        <div>Çerez Politikası</div>
        <div>Test Sonuçları</div>
        <div className="grow text-center md:text-end pt-5 md:pt-0">EN | TR</div>
      </div>
      <div className="flex justify-center">
        <Image src={cards} alt="credit cart logos" className="scale-75" />
      </div>
    </div>
  );
};

export default Footer;
