import React, { useState } from "react";
import AmgLogo from "../images/amglogo1.svg";
import SearchButton from "../images/search.svg";
import MercedesLogo from "../images/Mercedes-Logo.svg";
import YellowCar from "../images/yellow-car.png";
import GreenCar from "../images/green-car.png";
import Vector from "../images/Vector.svg";
import MercedesH1 from "../images/Mercedes-H1.png";
import CarInside from "../images/inside.png";
import UserIcon from "../images/users.11.svg";
import RightArrow from "../images/arrow-right.svg";
import PhoneIcon from "../images/iphone.1 .svg";
import MailIcon from "../images/mail.1.svg";
import KmIcon from "../images/broadcast1.svg";
import PlakaIcon from "../images/bottom-bar.svg";
import SasiIcon from "../images/expand-wide.svg";
import CaretDown from "../images/chevron-down.svg";
import Calendar from "../images/calendar-day.svg";
import Close from "../images/close.svg";
import Hamburger from "../images/hamburger-menu.svg";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import Stack from "@mui/material/Stack";
// import AdapterDateFns from "@mui/lab/AdapterDateFns";
// import LocalizationProvider from "@mui/lab/LocalizationProvider";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { TextField, Grid, Button } from "@mui/material";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";

import { Link } from "react-router-dom";

import {
  LeftSideBar,
  UpSideBar,
  AccordionContainer,
  ServiceContainer,
  MaskedMercedes,
  TabContainer,
  CustomTabs,
  CustomTab,
  CustomTabPanel,
  TextForm,
  CustomTextField,
  CustomTextArea,
  ImageContainer,
  ServisButton,
} from "../assets/styled";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Service = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [modal, setModal] = useState(false);
  const [isActive, setActive] = useState(false);

  const [value1, setValue1] = React.useState(new Date("2014-08-18T21:11:54"));

  const handleChange1 = (newValue) => {
    setValue(newValue);
  };

  return (
    <ServiceContainer>
      <UpSideBar className="serviceUpBar">
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

      <MaskedMercedes>
        <p>Amg Gt R Pro</p>
        <img src={MercedesH1}></img>
      </MaskedMercedes>

      <TabContainer>
        <CustomTabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <CustomTab label="Servis Bilgileri" {...a11yProps(0)} />
          <CustomTab label="Kullanıcı Bilgileri" {...a11yProps(1)} />
        </CustomTabs>
        <TabPanel value={value} index={0} className="tabPanel">
          <Grid container className="gridBox">
            <Grid item lg={3} xs={12}>
              <TextForm>
                <p>Araç Bilgileri</p>

                <CustomTextArea>
                  <CustomTextField label="Araç Kilometresi" variant="filled" />
                  <img src={KmIcon} />
                </CustomTextArea>

                <CustomTextArea>
                  <CustomTextField label="Araç Plakası" variant="filled" />
                  <img src={PlakaIcon} />
                </CustomTextArea>

                <CustomTextArea>
                  <CustomTextField label="Şasi Numarası" variant="filled" />
                  <img src={SasiIcon} />
                </CustomTextArea>

                <h6>Servis Bilgileri</h6>
                <CustomTextArea>
                  <CustomTextField
                    label="Servis Türü Seçiniz"
                    variant="filled"
                  />
                  <img src={CaretDown} />
                </CustomTextArea>
                <CustomTextArea>
                  <CustomTextField
                    label="Servis Zamanı Seçiniz"
                    variant="filled"
                  />
                  <img src={Calendar} />
                </CustomTextArea>

                  {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Stack spacing={3}>
                      <DesktopDatePicker
                        label="Date desktop"
                        inputFormat="MM/dd/yyyy"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </Stack>
                  </LocalizationProvider> */}

                <ServisButton onClick={() => handleChange(null, 1)}>
                  Servis Kaydı Oluştur <img src={RightArrow} />
                </ServisButton>
              </TextForm>
            </Grid>

            <Grid item lg={9} xs={12}>
              <ImageContainer className="engine"></ImageContainer>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1} className="tabPanel">
          <Grid container>
            <Grid item lg={3} xs={12}>
              <TextForm>
                <p>Kişi Bilgileri</p>

                <CustomTextArea>
                  <CustomTextField label="Adı" variant="filled" />
                  <img src={UserIcon} />
                </CustomTextArea>

                <CustomTextArea>
                  <CustomTextField label="Soyadı" variant="filled" />
                  <img src={UserIcon} />
                </CustomTextArea>

                <CustomTextArea>
                  <CustomTextField label="Telefon Numarası" variant="filled" />
                  <img src={PhoneIcon} />
                </CustomTextArea>

                <CustomTextArea>
                  <CustomTextField label="Mail Adresi" variant="filled" />
                  <img src={MailIcon} />
                </CustomTextArea>
              </TextForm>
            </Grid>

            <Grid item lg={9} xs={12}>
              <ImageContainer></ImageContainer>
            </Grid>
          </Grid>
        </TabPanel>
      </TabContainer>
    </ServiceContainer>
  );
};

export default Service;
