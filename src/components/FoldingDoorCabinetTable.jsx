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
      <TableContainer component={Paper}>
        <Table sx={{minWidth: 700}} aria-label='customized table'>
          <TableHead>
            <TableRow>
              <TableCell>
                <b>Hlut nr.</b>
              </TableCell>
              <TableCell align='center'>
                <b>Efni</b>
              </TableCell>
              <TableCell align='center'>
                <b>Lengd</b>
              </TableCell>
              <TableCell align='center'>
                <b>Breidd</b>
              </TableCell>
              <TableCell align='center'>
                <b>Þykkt</b>
              </TableCell>
              <TableCell align='center'>
                <b>Magn</b>
              </TableCell>
              <TableCell align='center'>
                <b>Efni kant.</b>
              </TableCell>
              <TableCell align='center'>
                <b>Kantlíming</b>
              </TableCell>             
              <TableCell align='center'>
                <b>Vörunumer</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableRows.map((row) => (
              <TableRow key={row.hlutur}>
                <TableCell component='th' scope='row'>
                  {row.hlutur}
                </TableCell>
                <TableCell align='center'>{row.efni}</TableCell>
                <TableCell align='center'>{row.l < 0 ? 0 : row.l}</TableCell>
                <TableCell align='center'>{row.b < 0 ? 0 : row.b}</TableCell>
                <TableCell align='center'>{row.þ < 0 ? 0 : row.þ}</TableCell>
                <TableCell align='center'>{row.magn}</TableCell>
                <TableCell align='center'>{row.efni_kant}</TableCell>
                <TableCell align='center'>
                  <img
                    src={row.kantliming}
                    alt='liming'
                    height={50}
                    width={140}
                  />
                </TableCell>
                <TableCell align='center'>{row.vorunumer}</TableCell>
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
