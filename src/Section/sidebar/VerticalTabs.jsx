import React, { useState } from "react";
import {
  Tabs,
  Tab,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import LooksOneOutlinedIcon from "@mui/icons-material/LooksOneOutlined";
import ProductSection from "../products/ProductSection";
import TextSection from "../text/TextSection";
import UploadsSection from "../uploads/UploadsSection";
import ClipartSection from "../clipart/ClipartSection";

const tabsWidth = 100;
const tabPanelWidth = 450;

const tabContent = [
  {
    label: "Products",
    icon: <ImageIcon />,
    content: <ProductSection />,
  },
  {
    label: "Text",
    icon: <TextFieldsIcon />,
    content: <TextSection />,
  },
  {
    label: "Uploads",
    icon: <CloudUploadOutlinedIcon />,
    content: <UploadsSection />,
  },
  {
    label: "Elements",
    icon: <AddPhotoAlternateOutlinedIcon />,
    content: <ClipartSection />,
  },
  {
    label: "Name",
    icon: <LooksOneOutlinedIcon />,
    content: "Content for Tab Five",
  },
];

const VerticalTabs = () => {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("sm"));
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
      {isMobileView ? (
        <Box
          sx={{
            width: "100%",
            bgcolor: "#fff",
            borderColor: "divider",
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 99,
            boxShadow: 3,
          }}
        >
          <Tabs
            orientation="horizontal"
            value={value}
            onChange={handleChange}
            aria-label="Horizontal tabs "
            sx={{ overflowX: "auto", maxWidth: "100%" }}
          >
            {tabContent.map((tab, index) => (
              <Tab
                key={index}
                label={
                  <>
                    {tab.icon}
                    <Typography
                      variant="subtitle1"
                      sx={{ fontSize: "12px", fontWeight: "bold" }}
                    >
                      {tab.label}
                    </Typography>
                  </>
                }
              />
            ))}
          </Tabs>
        </Box>
      ) : (
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs "
          sx={{
            borderRight: 1,
            bgcolor: "#fff",
            borderColor: "divider",
            zIndex: 99,
            width: `${tabsWidth}px`,
            boxShadow: 3,
          }}
        >
          {tabContent.map((tab, index) => (
            <Tab
              key={index}
              label={
                <>
                  {tab.icon}
                  <Typography
                    variant="subtitle1"
                    sx={{ fontSize: "12px", fontWeight: "bold" }}
                  >
                    {" "}
                    {tab.label}
                  </Typography>
                </>
              }
            />
          ))}
        </Tabs>
      )}
      <Box
        sx={{
          width: tabPanelWidth,
          flexShrink: 0,
          borderColor: "divider",
          transition: `0.1s ease-out`,
          overflow: "hidden",
          maxWidth: isMobileView ? "100%" : tabPanelOpen ? tabPanelWidth : 0,
          position: "relative",
        }}
      >
        {isMobileView ? null : (
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
        )}

        <div
          style={{
            backgroundColor: "#fff",
            height: isMobileView ? "calc(100% - 60px)" : "100%",
            width: isMobileView ? "100%" : "calc(100% - 3%)",
            padding: isMobileView ? "5px" : "15px",
            boxSizing: "border-box",
            overflowY: "scroll",
          }}
        >
          {tabContent[value].content}
        </div>
      </Box>
    </Box>
  );
};

export default VerticalTabs;

