"use client";

import { useAppSelector, useAppDispatch } from "../../lib/hooks";
import { decrement, increment } from "../../lib/features/counter/counterSlice";

export default function Page() {
  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector((state) => state.counterSlice.value);
  const dispatch = useAppDispatch();

  return (
    <div className="bg-customBg text-black min-h-screen flex justify-center"></div>
  );
}
