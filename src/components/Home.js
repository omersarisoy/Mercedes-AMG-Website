import React, { Component } from "react";
import { useState } from "react";
import { CustomSlider } from "../assets/styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AmgLogo from "../images/amglogo1.svg";
import SearchButton from "../images/search.svg";
import MercedesLogo from "../images/Mercedes-Logo.svg";
import YellowCar from "../images/yellow-car.png";
import GreenCar from "../images/green-car.png";
import Vector from "../images/Vector.svg";
import RightArrow from "../images/arrow-right.svg";
import Close from "../images/close.svg";
import GreenVertical from "../images/green-vertical.png";
import YellowVertical from "../images/yellow-vertical.png";
import Hamburger from "../images/hamburger-menu.svg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import List from "@mui/material/List";

import { Link } from "react-router-dom";

import {
  HomeSlider,
  LeftSideBar,
  UpSideBar,
  AccordionContainer,
  FooterDiv,
  DrawerContainer,
  CustomDrawer,
  YellowHomeSlider,
  Mask,
  CustomTextField,
  CustomTextArea,
  CustomSearch,
  CustomButton,
} from "../assets/styled";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} onClick={onClick} />;
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} onClick={onClick} />;
}

const Home = () => {
  const [modal, setModal] = useState(false);
  const [isActive, setActive] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    useCSS: true,
    nextArrow: <ArrowForwardIcon />,
    prevArrow: <ArrowBackIcon />,
  };

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 368 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <p>
          kapat <img src={Close} />
        </p>
      </List>
    </Box>
  );

  const [drw, setDrw] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrw = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrw({ ...drw, [anchor]: open });
  };

  const listDrw = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 368 }}
      role="presentation"
      onClick={toggleDrw(anchor, false)}
      onKeyDown={toggleDrw(anchor, false)}
    >
      <List>
        <p>
          kapat <img src={Close} />
        </p>
      </List>
    </Box>
  );

  return (
    <>
      <UpSideBar>
        <Link to="/">
          <img src={AmgLogo} />
        </Link>
        <img
          src={SearchButton}
          alt="search"
          onClick={() => setModal(!modal)}
          className="searchButton"
        />

        {!isActive ? (
          <img
            src={Hamburger}
            className="hamburgerButton"
            onClick={() => setActive(!isActive)}
          />
        ) : (
          <p className="closeButton" onClick={() => setActive(!isActive)}>
            kapat <img src={Close} />
          </p>
        )}
      </UpSideBar>
      {!modal ? (
        <LeftSideBar className={isActive ? "show" : "hide"}>
          <div>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p>Araçlarım</p>
              </AccordionSummary>
              <AccordionDetails>
                <AccordionContainer>
                  <img src={GreenCar} />
                  <Link to="/services">Amg Gt R Pro</Link>
                  <img src={Vector} />
                </AccordionContainer>
                <AccordionContainer>
                  <img src={YellowCar} />
                  <Link to="/servicesGtS">Amg Gt S</Link>
                  <img src={Vector} />
                </AccordionContainer>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <p>Servis Durumu</p>
              </AccordionSummary>
              <AccordionDetails>
                <AccordionContainer>
                  <img src={GreenCar} />
                  <Link to="/services">Amg Gt R Pro</Link>
                  <img src={Vector} />
                </AccordionContainer>
                <AccordionContainer>
                  <img src={YellowCar} />
                  <Link to="/servicesGtS">Amg Gt S</Link>
                  <img src={Vector} />
                </AccordionContainer>
              </AccordionDetails>
            </Accordion>
          </div>
          <div>
            <img src={MercedesLogo}></img>
          </div>
        </LeftSideBar>
      ) : (
        <Mask>
          <div>
            <img src={AmgLogo}></img>
            <p onClick={() => setModal(!modal)}>
              kapat <img src={Close} />
            </p>
          </div>
          <h1>Arama Yap</h1>
          <CustomSearch>
            <CustomTextField placeholder="Arama Yapın" />
            <img src={SearchButton} />
          </CustomSearch>
        </Mask>
      )}
      <CustomSlider {...settings}>
        <HomeSlider>
          <FooterDiv>
            <h1>Amg Gt R Pro</h1>
            <DrawerContainer>
              {["right"].map((anchor) => (
                <React.Fragment key="drawer1">
                  <CustomButton onClick={toggleDrawer(anchor, true)}>
                    Araç Ayarları <img src={RightArrow} />
                  </CustomButton>
                  <CustomDrawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                  >
                    {list(anchor)}
                    <div className="drawerBody">
                      <img src={GreenVertical} />
                      <div>
                        <h6>Araç Aktiflik Durumu</h6>
                        <form>
                          <input
                            type="radio"
                            id="Aktif Araç"
                            name="fav_language"
                            value="Aktif Araç"
                          ></input>
                            <label for="Aktif Araç">Aktif Araç</label> 
                          <input
                            type="radio"
                            id="Yedek Araç"
                            name="fav_language"
                            value="Yedek Araç"
                            checked
                          ></input>
                            <label for="css">Yedek Araç</label>
                        </form>
                        <CustomButton component={Link} to="/services">
                          Servis Durumu <img src={RightArrow} />
                        </CustomButton>
                      </div>
                    </div>
                  </CustomDrawer>
                </React.Fragment>
              ))}
            </DrawerContainer>
          </FooterDiv>
        </HomeSlider>
        <YellowHomeSlider>
          <FooterDiv>
            <h1>Amg Gt S</h1>
            <DrawerContainer>
              {["right"].map((anchor) => (
                <React.Fragment key={anchor}>
                  <CustomButton onClick={toggleDrw(anchor, true)}>
                    Araç Ayarları <img src={RightArrow} />
                  </CustomButton>
                  <CustomDrawer
                    anchor={anchor}
                    open={drw[anchor]}
                    onClose={toggleDrw(anchor, false)}
                  >
                    {listDrw(anchor)}
                    <div className="drawerBody">
                      <img src={YellowVertical} />
                      <div>
                        <h6>Araç Aktiflik Durumu</h6>
                        <form>
                          <input
                            type="radio"
                            id="Aktif Araç"
                            name="fav_language"
                            value="Aktif Araç"
                          ></input>
                            <label for="html">Aktif Araç</label> 
                          <input
                            type="radio"
                            id="Yedek Araç"
                            name="fav_language"
                            value="Yedek Araç"
                            checked
                          ></input>
                            <label for="css">Yedek Araç</label>
                        </form>
                        <CustomButton component={Link} to="/services">
                          Servis Durumu <img src={RightArrow} />
                        </CustomButton>
                      </div>
                    </div>
                  </CustomDrawer>
                </React.Fragment>
              ))}
            </DrawerContainer>
          </FooterDiv>
        </YellowHomeSlider>
      </CustomSlider>
    </>
  );
};

export default Home;
