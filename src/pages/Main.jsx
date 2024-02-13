import "./style.css";
import React from "react";
import Stack from "@mui/material/Stack";
// Components
import CardPaper from "../components/CardPaper";
// Images
import basic from "../assets/images/hurd/basic.png";
import cabinet from "../assets/images/taekjaskapur/4doors.png";

const Main = () => {
  return (
    <Stack direction='row' spacing={2} className='main-container'>
      <CardPaper btnText={"Tækjaskápur"} imageSrc={cabinet} link={"/fdc"} />
      <CardPaper btnText={"Hurðar"} imageSrc={basic} link={"/doors"} />
    </Stack>
  );
};

export default Main;
