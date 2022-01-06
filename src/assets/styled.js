import styled, { createGlobalStyle } from "styled-components";
import {
  Accordion,
  Container,
  Drawer,
  Button,
  Tabs,
  Tab,
  TabPanel,
  TextField,
} from "@mui/material";
import { Colors } from "./colors";
import Slider from "react-slick";
import PanelHome from "../images/Panel-Home.jpg";
import YellowPanelHome from "../images/Yellow-Panel-Home.png";
import MaskedCar from "../images/mercedes-masked.png";
import MaskedYellowCar from "../images/mercedes-masked-yellow.png";
import CarInside from "../images/inside.png";
import CarEngine from "../images/Engine.png";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        font-family: 'Playfair Display', serif;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
`;

export const HomeSlider = styled.div`
  background: url(${PanelHome});
  width: 100vw;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

export const CustomSlider = styled(Slider)`
  width: 100vw;
  height: 100vh;

  .slick-next {
    top: 80%;
    right: 20px;
    color: white;
    background-color: transparent;
    font-size: 80px;

    @media (max-width: 576px) {
      top: 90%;
      left: 150px;
      z-index: 1;
    }
  }
  .slick-prev {
    top: 80%;
    left: 85%;
    z-index: 90;
    background-color: transparent;
    color: white;
    font-size: 80px;

    @media (max-width: 576px) {
      top: 90%;
      left: 10px;
      z-index: 1;
    }
  }
`;

export const UpSideBar = styled.div`
  position: fixed;
  width: 100vw;
  height: 56px;
  border: 1px solid rgba(255, 255, 255, 0.09);
  background: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(30px);
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &.serviceUpBar {
    width: 99.9%;
  }

  img {
    margin: 0 20px;
    &.searchButton {
      @media (max-width: 576px) {
        display: none;
      }
    }
  }

  .hamburgerButton {
    @media (min-width: 576px) {
      display: none;
    }
  }

  .closeButton {
    font-size: 20px;
    line-height: 27px;
    color: white;
    display: flex;
    align-items: center;
    float: right;

    img {
      padding-left: 10px;
      padding-top: 5px;
    }
    @media (min-width: 576px) {
      display: none;
    }
  }
`;

export const LeftSideBar = styled.div`
  position: fixed;
  padding-top: 60px;
  height: 100vh;
  width: 237px;
  background: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(50px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 2;
  @media (max-width: 576px) {
    &.show {
      width: 100%;
    }

    &.hide {
      display: none;
      
    }
  }

  

  > div {
    padding-bottom: 100px;
    padding-left: 27px;

    @media (max-width: 576px) {
      text-align: center;
    }

    .css-1elwnq4-MuiPaper-root-MuiAccordion-root {
      background: transparent;
      color: white;
      box-shadow: none;
      margin: 0;

      a,
      p {
        font-family: "Playfair Display", serif;
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        text-decoration: none;
        color: white;
        @media (max-width: 576px) {
          font-size: 28px;
          line-height: 37px;
        }
      }

      svg {
        color: white;
      }
      .css-sh22l5-MuiButtonBase-root-MuiAccordionSummary-root {
        padding-left: 0;
        margin: 0;
      }
      .css-15v22id-MuiAccordionDetails-root {
        padding: 0;
      }
    }
  }
`;

export const AccordionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 10px 20px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.09); ;
`;

export const FooterDiv = styled.div`
  width: calc(100% - 240px);
  height: 358px;
  position: absolute;
  bottom: 0;
  left: 237px;
  z-index: 1;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);

  @media (max-width: 576px) {
    left: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  h1 {
    font-size: 54px;
    line-height: 72px;
    color: white;
    margin: 70px 0 20px 20px;
  }
`;

export const CustomDrawer = styled(Drawer)`
  .css-i9fmh8-MuiBackdrop-root-MuiModal-backdrop {
    background-color: rgba(0, 0, 0, 0);
  }
  .css-1160xiw-MuiPaper-root-MuiDrawer-paper {
    /* background: rgba(27, 31, 39, 0.9); */
    background: rgba(43, 43, 43, 0.5);
  }

  .css-9k59jz {
    p {
      font-size: 20px;
      line-height: 27px;
      color: #ffffff;
      display: flex;
      align-items: center;
      padding: 5px 20px;

      img {
        padding-left: 10px;
        padding-top: 5px;
      }
      @media (max-width: 576px) {
        float: right;
      }
    }
  }

  .drawerBody {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 100vh;

    /* @media (max-width: 576px) {
      width: 100%;
    } */

    div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      height: 150px;
    }
  }

  h6 {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;
    color: white;
  }

  form {
    display: flex;
    justify-content: space-between;

    input {
      padding-right: 10px;
    }

    label {
      font-size: 14px;
      line-height: 19px;
      color: #ffffff;
      padding-right: 10px;
      padding-left: 10px;
    }
  }
`;

export const CustomButton = styled(Button)`
  && {
    background-color: white;
    text-transform: none;
    font-family: "Playfair Display", serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    color: #000000;
    margin-left: 20px;
    border-radius: 10px;
    padding: 10px;

    img {
      padding-left: 10px;
    }

    &:hover {
      background-color: white;
    }
  }
`;

export const DrawerContainer = styled.div``;

export const YellowHomeSlider = styled.div`
  background: url(${YellowPanelHome});
  width: 100vw;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

export const ServiceContainer = styled.div`
  background-color: #1b1f27;
  height: 100vh;
`;

export const MaskedMercedes = styled.div`
  background: url(${MaskedCar});
  height: 224px;
  width: calc(100% - 237px);
  float: right;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 58px;

  @media (max-width: 576px) {
    width: 100%;
  }

  &.maskedYellow {
    background: url(${MaskedYellowCar});
    height: 224px;
    width: calc(100% - 237px);
    float: right;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    position: relative;
  margin-top: 58px;


    @media (max-width: 576px) {
      width: 100%;
    }
  }

  p {
    font-size: 54px;
    line-height: 72px;
    color: white;
    margin-left: 30px;
    @media (max-width: 576px) {
      margin: auto;
      padding-bottom: 75px;
    }
  }

  img {
    position: absolute;
    right: 30px;
    bottom: 0;
    transform: translate(0, 55%);
    z-index: 99;

    @media (max-width: 576px) {
      width: 70%;
      position: absolute;
      right: 0;
      bottom: 0;
      transform: translate(-25%, 50%);
      z-index: 1;
    }
  }
`;

export const TabContainer = styled.div`
  position: relative;
  width: calc(100% - 237px);
  float: right;

  @media (max-width: 576px) {
    width: 100%;
    padding-left: 10px;
  }

  .tabPanel {
    padding: 0;
    height: 50vh;
    background-color: #1b1f27;

    @media (max-width: 576px) {
      height: 110vh;
    }
  }
`;

export const CustomTabs = styled(Tabs)`
  && {
    background-color: #1b1f27;
    background: rgba(0, 0, 0, 0.31);
    height: 90px;

    @media (max-width: 576px) {
      height: 120px;
    }

    .css-1h9z7r5-MuiButtonBase-root-MuiTab-root {
      font-family: "Montserrat", sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 20px;
      text-align: center;
      color: #d4d8d5;
      text-transform: none;
    }
    .css-1h9z7r5-MuiButtonBase-root-MuiTab-root.Mui-selected {
      font-family: "Montserrat", sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 20px;
      text-align: center;
      color: #d4d8d5;
    }

    .css-1aquho2-MuiTabs-indicator {
      background-color: #c4c4c4;
    }

    .css-heg063-MuiTabs-flexContainer {
      position: absolute;
      bottom: 0;

      @media (max-width: 576px) {
        transform: translate(25%, 0);
      }
    }
  }
`;

export const CustomTab = styled(Tab)`
  && {
  }
`;

export const TextForm = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  padding-top: 10px;

  h6 {
    margin-top: 35px;
  }
`;

export const CustomTextField = styled(TextField)`
  && {
    padding-top: 8px;

    .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root {
      border-radius: 10px;
    }
    input {
      width: 100%;
      display: block;
      color: #d4d8d5;
      font-size: 18px;
      line-height: 24px;
      font-family: "Playfair Display", serif;
      color: #d4d8d5;
      background: rgba(0, 0, 0, 0.31);
      padding: 10px;
      border-radius: 10px;


      &::placeholder {
        color: white;
      }

      &:focus {
        outline: none !important;
      }
    }

    label {
      font-size: 18px;
      line-height: 24px;
      font-family: "Playfair Display", serif;
      color: #d4d8d5;

      &:focus {
        font-size: 8px;
        line-height: 13px;
        color: red;
      }
    }

    .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline{
      border-color: transparent;
    }

    .css-cio0x1-MuiInputBase-root-MuiFilledInput-root:after{
      border-bottom: none;
    }
  }
`;

export const ImageContainer = styled.div`
  height: 410px;
  background: url(${CarInside});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-top: 30px;

  &.engine {
    background: url(${CarEngine});
    background-repeat: no-repeat;
    background-position: center;
    height: 410px;
  }
`;

export const CustomTextArea = styled.div`
  position: relative;
  width: 100%;
  .css-1u3bzj6-MuiFormControl-root-MuiTextField-root {
    width: 100%;
  }
  img {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translate(0, -30%);
  }
`;

export const ServisButton = styled(Button)`
  && {
    background-color: white;
    text-transform: none;
    font-family: "Playfair Display", serif;
    font-size: 18px;
    line-height: 24px;
    color: #000000;
    height: 44px;
    margin-top: 28px;
    border-radius: 10px;
    margin-left: auto;
    padding: 10px;
    img {
      padding-left: 10px;
    }

    &:hover {
      background-color: white;
    }
  }
`;

export const Mask = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.91);
  z-index: 999;

  h1 {
    margin-top: 132px;
    margin-bottom: 25px;
    font-size: 54px;
    line-height: 72px;
    color: #ffffff;
    text-align: center;
  }

  p {
    font-size: 20px;
    line-height: 27px;
    color: #ffffff;
    display: flex;
    align-items: center;
    padding: 5px 20px;
    float: right;

    img {
      padding-left: 10px;
      padding-top: 5px;
    }
  }

  img {
    padding-left: 20px;
    padding-top: 18px;
  }

  .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root {
    border-radius: 10px;
    padding: 10px 10px 10px 20px;
  }

  input {
    width: 100%;
    display: block;
    color: #d4d8d5;
    font-size: 18px;
    line-height: 24px;
    font-family: "Playfair Display", serif;
    color: #d4d8d5;
    background: rgba(0, 0, 0, 0.31);
    border-radius: 10px;
    padding: 20px;

    &::placeholder {
      color: white;
    }

    &:focus {
      outline: none !important;
    }
  }
`;

export const CustomSearch = styled.div`
  position: relative;
  width: 57%;
  margin: auto;

  .css-1u3bzj6-MuiFormControl-root-MuiTextField-root {
    width: 100%;
  }
  img {
    position: absolute;
    right: 40px;
    top: 50%;
    transform: translate(0, -60%);
  }

  fieldset {
    border-color: #4e4e4e;
  }
`;
