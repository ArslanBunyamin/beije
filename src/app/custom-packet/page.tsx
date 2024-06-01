"use client";

import { useAppSelector, useAppDispatch } from "../../lib/hooks";
import { decrement, increment } from "../../lib/features/counter/counterSlice";
import Tabs from "../../components/MuiTabs";
import Image from "next/image";
import pedImage from "../../assets/packet.webp";
import FlipCameraAndroidOutlinedIcon from "@mui/icons-material/FlipCameraAndroidOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { useState } from "react";

export default function Page() {
  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector((state) => state.counterSlice.value);
  const dispatch = useAppDispatch();
  const [isCartOpened, setisCartOpened] = useState(false);

  return (
    <div className="bg-customBg text-black min-h-screen text-sm flex justify-center p-5 px-8 lg:px-44">
      <div className="flex justify-center gap-28 py-5 pb-28">
        <div id="left-side" className="flex flex-col gap-12">
          <div className="flex flex-col gap-5">
            <div className="flex justify-between items-center">
              <div className="text-3xl md:text-2xl font-medium">
                Kendi Paketini Oluştur
              </div>
              <div className="hidden md:block">Nasıl Çalışır?</div>
            </div>
            <div className="text-base md:text-sm font-light opacity-90">
              Tercih ve ihtiyaçların doğrultusunda seçeceğin ürünlerden ve
              miktarlardan, sana özel bir paket oluşturalım.
            </div>
          </div>
          <div>
            <Tabs />
          </div>
        </div>
        <div id="right-side" className="hidden md:flex">
          <div className="w-full shadow-xl rounded-xl flex flex-col gap-6 p-7 bg-white">
            <div className="flex flex-col gap-5">
              <div className="text-2xl font-medium">Özel Paketin</div>
              <div className="flex items-center gap-3 p-2 shadow">
                <FlipCameraAndroidOutlinedIcon
                  style={{ width: "1rem", aspectRatio: 1 }}
                />
                2 ayda 1 gönderim
              </div>
              <Image src={pedImage} alt="pedImage" />
              <div className="flex flex-col gap-2 shadow p-6">
                <div>
                  <div className="text-[15px] font-semibold">
                    Günlük Ped Paketleri
                  </div>
                  <div className="text-xs opacity-70">10 Günlük ped</div>
                </div>
                <div className="text-xs font-semibold opacity-90">
                  Paketten Çıkar
                </div>
              </div>
            </div>
            <div>
              <button className="w-full bg-[#343131] hover:bg-[#242121] transition-all text-white rounded-full p-2">
                Sepete Ekle (₺119,85)
              </button>
            </div>
          </div>
        </div>
        <div className="fixed md:hidden bottom-0 bg-secondaryBg shadow shadow-black w-full flex flex-col p-3">
          <div className="flex flex-col gap-5">
            {isCartOpened ? (
              <div className="flex items-center gap-3 p-2 shadow animate-scaleUp">
                <FlipCameraAndroidOutlinedIcon
                  style={{ width: "1rem", aspectRatio: 1 }}
                />
                2 ayda 1 gönderim
              </div>
            ) : (
              ""
            )}
            {isCartOpened ? (
              <div className="p-6 flex justify-between items-center animate-scaleUp">
                <div className="">
                  <div className="text-lg font-bold opacity-80">
                    Günlük Ped Paketleri
                  </div>
                  <div className="text-base opacity-70">10 Günlük ped</div>
                </div>
                <div>
                  <DeleteForeverOutlinedIcon className="scale-125" />
                </div>
              </div>
            ) : (
              ""
            )}
            <div
              className="p-2 mb-2 w-full flex justify-between"
              onClick={() => setisCartOpened((prev) => !prev)}
            >
              <div>
                <span className="opacity-70 text-base">Toplam</span>
                <span>
                  <KeyboardArrowDownIcon
                    className={
                      isCartOpened
                        ? "scale-125 opacity-80"
                        : "rotate-180 scale-125 opacity-80"
                    }
                  />
                </span>
              </div>
              <div className="opacity-60 text-lg">₺119,85</div>
            </div>
          </div>
          <button className="w-full text-base font-bold bg-[#343131] hover:bg-[#242121] transition-all text-white rounded-full py-3">
            Sepete Ekle
          </button>
        </div>
      </div>
    </div>
  );
}
