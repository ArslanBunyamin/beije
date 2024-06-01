import Slider from "@mui/material/Slider";

type Props = {
  label: string;
  range: number;
};

type Mark = {
  value: number;
  label: string;
};

const MuiSlider = (props: Props) => {
  const range = props.range;
  const marks = Array.from({ length: range / 10 + 1 }, (_, i) => {
    return i == 0 || i == range / 10
      ? { value: i * 10, label: String(i * 10) }
      : { value: i * 10, label: "" };
  });
  return (
    <div className="select-none">
      <div className="text-sm py-2">{props.label}</div>
      <Slider
        defaultValue={0}
        valueLabelDisplay={"on"}
        shiftStep={30}
        step={10}
        marks={marks}
        min={0}
        max={range}
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
