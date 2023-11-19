import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// Images
import hlidar from "../assets/images/hlidar.svg";
import bak from "../assets/images/bak.svg";
import hillur from "../assets/images/hillur.svg";
import hurdar from "../assets/images/hurdar.svg";
import toppur from "../assets/images/toppur.svg";

/*
  Height - Hæð = X
  Width - breidd = Y
  Depth - Dýpt = Z
*/
const TableDisplay = ({cv}) => {
  function createData(hlutur, efni, l, b, þ, magn, efni_kant, kantliming) {
    return {hlutur, efni, l, b, þ, magn, efni_kant, kantliming};
  }

  const rows = [
    createData(
      "Hliðar",
      cv.carcase_color,
      cv.height,
      cv.depth,
      cv.thickness,
      2,
      cv.edge_color,
      hlidar
    ),
    createData(
      "Toppur",
      cv.carcase_color,
      cv.width - cv.thickness * 2,
      cv.depth - cv.thickness - 2,
      cv.thickness,
      1,
      cv.edge_color,
      toppur
    ),
    createData(
      "Bak",
      cv.carcase_color,
      cv.height,
      cv.width - cv.thickness * 2,
      cv.thickness,
      1,
      cv.edge_color,
      bak
    ),
    createData(
      "Hillur",
      cv.carcase_color,
      cv.width - cv.thickness * 2,
      cv.shelf_depth,
      cv.thickness,
      cv.shelf_count,
      cv.edge_color,
      hurdar
    ),
    createData(
      "Hurðar",
      cv.carcase_color,
      cv.height - 5,
      cv.door_count === 2 ? cv.width / 2 - 8 : cv.width / 4 - 16,
      "no affect",
      cv.door_count,
      cv.edge_color,
      hillur
    ),
  ];

  return (
    <TableContainer component={Paper}>
      <Table sx={{minWidth: 700}} aria-label='customized table'>
        <TableHead>
          <TableRow>
            <TableCell>
              <b>Hlut nr.</b>
            </TableCell>
            <TableCell align='right'>
              <b>Efni</b>
            </TableCell>
            <TableCell align='right'>
              <b>Lengd</b>
            </TableCell>
            <TableCell align='right'>
              <b>Breidd</b>
            </TableCell>
            <TableCell align='right'>
              <b>Þykkt</b>
            </TableCell>
            <TableCell align='right'>
              <b>Magn</b>
            </TableCell>
            <TableCell align='right'>
              <b>Efni kant.</b>
            </TableCell>
            <TableCell align='right'>
              <b>Kantlíming</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.hlutur}>
              <TableCell component='th' scope='row'>
                {row.hlutur}
              </TableCell>
              <TableCell align='right'>{row.efni}</TableCell>
              <TableCell align='right'>{row.l < 0 ? 0 : row.l}</TableCell>
              <TableCell align='right'>{row.b < 0 ? 0 : row.b}</TableCell>
              <TableCell align='right'>{row.þ < 0 ? 0 : row.þ}</TableCell>
              <TableCell align='right'>{row.magn}</TableCell>
              <TableCell align='right'>{row.efni_kant}</TableCell>
              <TableCell align='right'>
                <img src={row.kantliming} alt='liming' />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableDisplay;
