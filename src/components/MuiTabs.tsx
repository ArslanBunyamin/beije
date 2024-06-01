import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";
import MuiSlider from "./MuiSlider";

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
      {value === index && <Box sx={{ paddingTop: "48px" }}>{children}</Box>}
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
    fontSize: "13px",
    padding: "0!important",
    fontWeight: "500",
    color: "#000",
    opacity: "0.9",
  };

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
        <MuiSlider label="Standart Ped" range={60} />
        <MuiSlider label="Süper Ped" range={60} />
        <MuiSlider label="Süper+ Ped" range={60} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <MuiSlider label="Günlük Ped" range={100} />
        <MuiSlider label="Süper Günlük Ped" range={100} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <MuiSlider label="Mini Tampon" range={60} />
        <MuiSlider label="Standart Tampon" range={60} />
        <MuiSlider label="Süper Tampon" range={60} />
      </CustomTabPanel>
    </Box>
  );
}
