import { setGunlukPed, setPed, setTampon } from "@/lib/features/cart/cartSlice";
import { useAppDispatch } from "@/lib/hooks";
import Slider from "@mui/material/Slider";
import { useState } from "react";

type Props = {
  label: string;
  range: number;
  productType: {
    type: string;
    subtype: string;
  };
};

const MuiSlider = (props: Props) => {
  const range = props.range;
  const productType = props.productType;

  const [sliderValue, setsliderValue] = useState(0);
  const dispatch = useAppDispatch();

  const marks = Array.from({ length: range / 10 + 1 }, (_, i) => {
    return i == 0 || i == range / 10
      ? { value: i * 10, label: String(i * 10) }
      : { value: i * 10, label: "" };
  });

  const slideHandler = (e: Event, newValue: number | number[]) => {
    setsliderValue(newValue as number);
    if (productType.type == "ped")
      dispatch(
        setPed({ pedType: productType.subtype, value: newValue as number })
      );
    if (productType.type == "gunlukPed")
      dispatch(
        setGunlukPed({
          pedType: productType.subtype,
          value: newValue as number,
        })
      );
    if (productType.type == "tampon")
      dispatch(
        setTampon({ pedType: productType.subtype, value: newValue as number })
      );
  };

  return (
    <div className="select-none">
      <div className="text-sm py-2">{props.label}</div>
      <Slider
        defaultValue={0}
        valueLabelDisplay={
          sliderValue == 0 || sliderValue == range ? "off" : "on"
        }
        shiftStep={30}
        step={10}
        marks={marks}
        min={0}
        max={range}
        value={sliderValue}
        onChange={slideHandler}
        sx={{
          color: "#333",
          ".MuiSlider-thumb:active, .MuiSlider-thumb:hover, .MuiSlider-thumb:focus":
            {
              boxShadow: "0px 0px 0px 8px rgba(51, 51, 51, 0.16)",
            },
          ".MuiSlider-valueLabel": {
            height: "20px",
            display: "flex!important",
            visibility: "visible",
            transform: "translateY(-100%) scale(1)",
          },
        }}
      />
    </div>
  );
};

export default MuiSlider;
