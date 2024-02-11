import "./main.css";
import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
// pages
import {Link} from "react-router-dom";

const Main = () => {
  return (
    <Stack direction='row' spacing={2} className='main-container'>
      <Link to='/fdc'>
        <Button variant='outlined' size='large'>
          Tækjaskápur
        </Button>
      </Link>
      <Link to='/doors'>
        <Button variant='outlined' size='large'>
          Hurðar
        </Button>
      </Link>
    </Stack>
  );
};

export default Main;
