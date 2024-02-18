import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

/*
  Height - Hæð = X
  Width - breidd = Y
  Depth - Dýpt = Z
*/
const FoldingDoorCabinetTable = ({cv, tableRows}) => {
  return (
    <>
      <span
        style={{
          padding: "0.4rem",
        }}>
        <b>Viðskiptavinur: {cv.customer}</b>
      </span>
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
            {tableRows.map((row) => (
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
                  <img
                    src={row.kantliming}
                    alt='liming'
                    height={50}
                    width={140}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <span style={{marginLeft: "auto", minWidth: "10rem", padding: "0.4rem"}}>
        <b>Sölumaður: {cv.seller}</b>
      </span>
    </>
  );
};

export default FoldingDoorCabinetTable;
