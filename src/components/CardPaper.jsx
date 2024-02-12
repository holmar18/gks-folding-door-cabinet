import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {CardActionArea} from "@mui/material";
import {Link} from "react-router-dom";

export default function CardPaper({imageSrc, btnText, link}) {
  return (
    <Link to={link} style={{textDecoration: "none"}}>
      <Card sx={{width: 240, boxShadow: 5}}>
        <CardActionArea>
          <CardMedia
            component='img'
            height='240'
            image={imageSrc}
            alt='green iguana'
            style={{objectFit: "contain"}}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant='h5'
              component='div'
              style={{textDecoration: "none"}}>
              {btnText}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
