"use client";

import { useAppDispatch, useAppSelector } from "../../lib/hooks";
import Tabs from "../../components/MuiTabs";
import Image from "next/image";
import pedImage from "../../assets/packet.webp";
import FlipCameraAndroidOutlinedIcon from "@mui/icons-material/FlipCameraAndroidOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { useEffect, useState } from "react";
import {
  gunlukPedSifirla,
  pedSifirla,
  tamponSifirla,
} from "@/lib/features/cart/cartSlice";

export type SubProduct = {
  name: string;
  quantity: number;
  pricePerTen: number;
};

export default function Page() {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart?.cart);
  const [isCartOpened, setisCartOpened] = useState(false);
  const [totalFee, settotalFee] = useState(0);
  const [cartPed, setCartPed] = useState<SubProduct[]>([]);
  const [cartGunlukPed, setCartGunlukPed] = useState<SubProduct[]>([]);
  const [cartTampon, setCartTampon] = useState<SubProduct[]>([]);

  useEffect(() => {
    settotalFee(() => 0);
    setCartPed(() => []);
    setCartGunlukPed(() => []);
    setCartTampon(() => []);
    for (const productType in cart) {
      const product = cart[productType as keyof typeof cart];
      for (const subProductType in product) {
        const subProduct: SubProduct =
          product[subProductType as keyof typeof product];
        if (subProduct.quantity) {
          settotalFee(
            (prev) => prev + subProduct.pricePerTen * subProduct.quantity
          );
          if (productType == "ped") setCartPed((prev) => [...prev, subProduct]);
          if (productType == "gunlukPed")
            setCartGunlukPed((prev) => [...prev, subProduct]);
          if (productType == "tampon")
            setCartTampon((prev) => [...prev, subProduct]);
        }
      }
    }
  }, [cart]);

  const removePed = () => {
    dispatch(pedSifirla());
  };
  const removeGunlukPed = () => {
    dispatch(gunlukPedSifirla());
  };
  const removeTampon = () => {
    dispatch(tamponSifirla());
  };

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
        <div id="right-side" className="hidden md:flex z-10">
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

              {!cartPed.length ? (
                ""
              ) : (
                <div className="flex flex-col gap-2 shadow p-6">
                  <div>
                    <div className="text-[15px] font-semibold">
                      Ped Paketleri
                    </div>
                    <div className="text-xs opacity-70">
                      {cartPed.map((item, index) => {
                        if (cartPed.length == 1 || index == 0)
                          return (
                            <span key={index}>
                              {item.quantity + " " + item.name}
                            </span>
                          );
                        return (
                          <span key={index}>
                            {index == cartPed.length - 1 ? " ve " : ", "}
                            <span>{item.quantity + " " + item.name}</span>
                          </span>
                        );
                      })}
                    </div>
                  </div>
                  <div
                    className="text-xs font-semibold opacity-90 select-none cursor-pointer"
                    onClick={removePed}
                  >
                    Paketten Çıkar
                  </div>
                </div>
              )}
              {!cartGunlukPed.length ? (
                ""
              ) : (
                <div className="flex flex-col gap-2 shadow p-6">
                  <div>
                    <div className="text-[15px] font-semibold">
                      Günlük Ped Paketleri
                    </div>
                    <div className="text-xs opacity-70">
                      {cartGunlukPed.map((item, index) => {
                        if (cartGunlukPed.length == 1 || index == 0)
                          return (
                            <span key={index}>
                              {item.quantity + " " + item.name}
                            </span>
                          );
                        return (
                          <span key={index}>
                            {index == cartGunlukPed.length - 1 ? " ve " : ", "}
                            <span>{item.quantity + " " + item.name}</span>
                          </span>
                        );
                      })}
                    </div>
                  </div>
                  <div
                    className="text-xs font-semibold opacity-90 select-none cursor-pointer"
                    onClick={removeGunlukPed}
                  >
                    Paketten Çıkar
                  </div>
                </div>
              )}
              {!cartTampon.length ? (
                ""
              ) : (
                <div className="flex flex-col gap-2 shadow p-6">
                  <div>
                    <div className="text-[15px] font-semibold">
                      Tampon Paketleri
                    </div>
                    <div className="text-xs opacity-70">
                      {cartTampon.map((item, index) => {
                        if (cartTampon.length == 1 || index == 0)
                          return (
                            <span key={index}>
                              {item.quantity + " " + item.name}
                            </span>
                          );
                        return (
                          <span key={index}>
                            {index == cartTampon.length - 1 ? " ve " : ", "}
                            <span>{item.quantity + " " + item.name}</span>
                          </span>
                        );
                      })}
                    </div>
                  </div>
                  <div
                    className="text-xs font-semibold opacity-90 select-none cursor-pointer"
                    onClick={removeTampon}
                  >
                    Paketten Çıkar
                  </div>
                </div>
              )}
            </div>
            <div>
              <button
                disabled={totalFee == 0}
                className="w-full flex justify-center disabled:bg-opacity-15 disabled:text-black disabled:text-opacity-40 bg-[#343131] hover:bg-[#242121] transition-all text-white rounded-full p-2"
              >
                <div>Sepete Ekle</div>
                <div>(₺{totalFee == 0 ? "0,00" : totalFee})</div>
              </button>
            </div>
          </div>
        </div>
        <div className="fixed z-10 md:hidden bottom-0 bg-secondaryBg shadow shadow-black w-full flex flex-col p-3">
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
              <div>
                {!cartPed.length ? (
                  ""
                ) : (
                  <div className="p-6 flex justify-between items-center animate-scaleUp">
                    <div className="">
                      <div className="text-lg font-bold opacity-80">
                        Ped Paketleri
                      </div>
                      <div className="text-base opacity-70">
                        {cartPed.map((item, index) => {
                          if (cartPed.length == 1 || index == 0)
                            return (
                              <span key={index}>
                                {item.quantity + " " + item.name}
                              </span>
                            );
                          return (
                            <span key={index}>
                              {index == cartPed.length - 1 ? " ve " : ", "}
                              <span>{item.quantity + " " + item.name}</span>
                            </span>
                          );
                        })}
                      </div>
                    </div>
                    <div className="cursor-pointer" onClick={removePed}>
                      <DeleteForeverOutlinedIcon className="scale-125" />
                    </div>
                  </div>
                )}
                {!cartGunlukPed.length ? (
                  ""
                ) : (
                  <div className="p-6 flex justify-between items-center animate-scaleUp">
                    <div className="">
                      <div className="text-lg font-bold opacity-80">
                        Günlük Ped Paketleri
                      </div>
                      <div className="text-base opacity-70">
                        {cartGunlukPed.map((item, index) => {
                          if (cartGunlukPed.length == 1 || index == 0)
                            return (
                              <span key={index}>
                                {item.quantity + " " + item.name}
                              </span>
                            );
                          return (
                            <span key={index}>
                              {index == cartGunlukPed.length - 1
                                ? " ve "
                                : ", "}
                              <span>{item.quantity + " " + item.name}</span>
                            </span>
                          );
                        })}
                      </div>
                    </div>
                    <div className="cursor-pointer" onClick={removeGunlukPed}>
                      <DeleteForeverOutlinedIcon className="scale-125" />
                    </div>
                  </div>
                )}
                {!cartTampon.length ? (
                  ""
                ) : (
                  <div className="p-6 flex justify-between items-center animate-scaleUp">
                    <div className="">
                      <div className="text-lg font-bold opacity-80">
                        Tampon Paketleri
                      </div>
                      <div className="text-base opacity-70">
                        {cartTampon.map((item, index) => {
                          if (cartTampon.length == 1 || index == 0)
                            return (
                              <span key={index}>
                                {item.quantity + " " + item.name}
                              </span>
                            );
                          return (
                            <span key={index}>
                              {index == cartTampon.length - 1 ? " ve " : ", "}
                              <span>{item.quantity + " " + item.name}</span>
                            </span>
                          );
                        })}
                      </div>
                    </div>
                    <div className="cursor-pointer" onClick={removeTampon}>
                      <DeleteForeverOutlinedIcon className="scale-125" />
                    </div>
                  </div>
                )}
              </div>
            ) : (
              ""
            )}
            {totalFee == 0 ? (
              ""
            ) : (
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
                <div className="opacity-60 text-lg">₺{totalFee}</div>
              </div>
            )}
          </div>
          <button
            disabled={totalFee == 0}
            className="w-full flex justify-center disabled:bg-opacity-15 disabled:text-black disabled:text-opacity-40 bg-[#343131] hover:bg-[#242121] transition-all text-white rounded-full py-3 text-base"
          >
            <div>Sepete Ekle</div>
          </button>
        </div>
      </div>
    </div>
  );
}
