"use client";

import { useAppSelector, useAppDispatch } from "../../lib/hooks";
import { decrement, increment } from "../../lib/features/counter/counterSlice";

export default function Page() {
  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector((state) => state.counterSlice.value);
  const dispatch = useAppDispatch();

  return (
    <div className="bg-customBg text-black min-h-screen flex justify-center md:px-16 lg:px-44">
      <div className="flex flex-col md:flex-row justify-center gap-12 ">
        <div id="left-side" className="flex flex-col gap-5 ">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-medium">Kendi Paketini Oluştur</div>
            <div className="text-sm">Nasıl Çalışır?</div>
          </div>
          <div>
            Tercih ve ihtiyaçların doğrultusunda seçeceğin ürünlerden ve
            miktarlardan, sana özel bir paket oluşturalım.
          </div>
        </div>
        <div id="right-side" className="grow">
          asd
        </div>
      </div>
    </div>
  );
}
