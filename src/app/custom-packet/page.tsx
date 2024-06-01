"use client";

import { useAppSelector, useAppDispatch } from "../../lib/hooks";
import { decrement, increment } from "../../lib/features/counter/counterSlice";
import Tabs from "../../components/Tabs";

export default function Page() {
  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector((state) => state.counterSlice.value);
  const dispatch = useAppDispatch();

  return (
    <div className="bg-customBg text-black min-h-screen flex justify-center p-5 md:px-16 lg:px-44">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-20 pt-5">
        <div id="left-side" className="flex flex-col gap-12">
          <div className="flex flex-col gap-5">
            <div className="flex justify-between items-center">
              <div className="text-2xl font-semibold">
                Kendi Paketini Oluştur
              </div>
              <div className="text-sm">Nasıl Çalışır?</div>
            </div>
            <div className="text-sm font-light opacity-90">
              Tercih ve ihtiyaçların doğrultusunda seçeceğin ürünlerden ve
              miktarlardan, sana özel bir paket oluşturalım.
            </div>
          </div>
          <div>
            <Tabs />
          </div>
        </div>
        <div id="right-side">asd</div>
      </div>
    </div>
  );
}
