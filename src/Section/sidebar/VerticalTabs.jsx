import React, { useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ImageIcon from "@mui/icons-material/Image"; // Replace with your desired icon
import DescriptionIcon from "@mui/icons-material/Description";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import TextSection from "../text/TextSection";

const tabsWidth = 100;
const tabPanelWidth = 450;
const transitionDuration = 300;

const tabContent = [
  "Content for Tab One",
   <TextSection/>,
  "Content for Tab Three",
  "Content for Tab Four",
  "Content for Tab Five",
];

export default function VerticalTabs() {
  const [value, setValue] = useState(0);
  const [tabPanelOpen, setTabPanelOpen] = useState(true);

  const handleChange = (event, newValue) => {
    if (newValue === value && tabPanelOpen) {
      setTabPanelOpen(false);
    } else {
      setValue(newValue);
      setTabPanelOpen(true);
    }
  };

  return (
    <Box sx={{ display: "flex", height: "100%" }}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          borderRight: 1,
          bgcolor: "#fff",
          borderColor: "divider",
          zIndex: 99,
          width: `${tabsWidth}px`,
          boxShadow:3,
        }}
      >
        <Tab
          label={
            <>
              <ImageIcon />
              Products
            </>
          }
        />
        <Tab
          label={
            <>
              <DescriptionIcon />
              Text
            </>
          }
        />
        <Tab
          label={
            <>
              <AssignmentIcon />
              Uploads
            </>
          }
        />
        <Tab
          label={
            <>
              <ImageIcon />
              Elements
            </>
          }
        />
        <Tab
          label={
            <>
              <DescriptionIcon />
              Name
            </>
          }
        />
      </Tabs>
      <Box
        sx={{
          width: tabPanelWidth,
          flexShrink: 0,
          // border: 1,
          borderColor: "divider",
          // backgroundColor: "#252627",
          transition: `0.2s ease-out`,
          overflow: "hidden",
          maxWidth: tabPanelOpen ? tabPanelWidth : 0,
          // borderRadius: "6px",
          position: "relative",
        }}
      >
        <div
          onClick={() => setTabPanelOpen(false)}
          style={{
            cursor: "pointer",
            width: "max-content",
            textAlign: "center",
            position: "absolute",
            right: 0,
            top: "50%",
            transform: "translateY(-50%)",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 13 96"
            width="13"
            height="96"
            fill="#fff"
          >
            <path
              d="M0,0 h1 c0,20,12,12,12,32 v32 c0,20,-12,12,-12,32 H0 z"
              fill="#252627"
            ></path>
            <path
              d="M0.5,0 c0,20,12,12,12,32 v32 c0,20,-12,12,-12,32"
              fill="#252627"
            ></path>
            <path d="M1,48.5 L4,45.5 L4,51.5 Z" fill="#fff" />
          </svg>
        </div>

        <div
          style={{
            // border: "1px solid black",
            backgroundColor: "#fff", // #252627
            height: "100%",
            width: "calc(100% - 3%)",
            // color:"#fff"
            padding:"15px",
            boxSizing: "border-box", 
            overflowY:"scroll",
          }}
        >
          {tabContent[value]}
        </div>
      </Box>
    </Box>
  );
}
