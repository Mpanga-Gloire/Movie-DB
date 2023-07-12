import React from "react";
import { styled } from "@mui/system";

const FooterContainer = styled("footer")({
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100%",
  backgroundColor: "#ccc",
  textAlign: "center",
  padding: "10px 0",
  zIndex: "1000",
});

const Footer = () => {
  return (
    <FooterContainer>
      <span>upGrad Frontend Hackathon</span>
    </FooterContainer>
  );
};

export default Footer;
