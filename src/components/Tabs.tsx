import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useState } from "react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const tabStyle = {
    textTransform: "none",
    width: "33.33%",
    fontSize: "12px",
    padding: "0!important",
    fontWeight: "500",
    color: "#000",
    opacity: "0.9",
  };

  const marks = [
    {
      value: 0,
      label: "0",
    },
    {
      value: 10,
      label: "",
    },
    {
      value: 20,
      label: "",
    },
    {
      value: 30,
      label: "",
    },
    {
      value: 40,
      label: "",
    },
    {
      value: 50,
      label: "",
    },
    {
      value: 60,
      label: "60",
    },
  ];

  return (
    <Box sx={{ width: "100%" }}>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          textColor="inherit"
          TabIndicatorProps={{
            sx: { backgroundColor: "#000", height: "1.5px" },
          }}
        >
          <Tab sx={tabStyle} label="beije Ped" {...a11yProps(0)} />
          <Tab sx={tabStyle} label="beije Günlük Ped" {...a11yProps(1)} />
          <Tab sx={tabStyle} label="beije Tampon" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div className="pt-12">
          <div className="text-sm py-2">Standard Ped</div>
          <Slider
            defaultValue={0}
            valueLabelDisplay="auto"
            shiftStep={30}
            step={10}
            marks={marks}
            min={0}
            max={60}
            sx={{
              color: "#000",
            }}
            slotProps={{
              thumb: {
                style: {
                  boxShadow: "unset",
                  width: "16px",
                  height: "16px",
                },
                onMouseOver: (e) => {
                  e.currentTarget.style.boxShadow =
                    "0px 0px 0px 8px rgba(52, 49, 49, 0.16)";
                },
                onMouseOut: (e) => {
                  e.currentTarget.style.boxShadow = "unset";
                },
              },
              valueLabel: {
                style: { color: "red" },
              },
            }}
          />
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
  );
}
