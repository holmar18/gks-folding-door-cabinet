import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./componentStyles.css";
// Utils
import {
  slaglistB,
  karmurYfir,
  breiddHurd,
  hurdÞ_Tegund,
  karmur_yfir_hlid_tegund,
  lengdHurd,
  p,
} from "../utils/doorsCalculations";
/*
  Height - Hæð = X
  Width - breidd = Y
  Depth - Dýpt = Z
*/

const DoorTable = ({getDoorFromList, data}) => {
  return (
    <>
      <TableContainer
        className='doorTable'
        component={Paper}
        key={data?.id}
        onClick={() => getDoorFromList(data?.id)}>
        <Table sx={{minWidth: 700}} aria-label='customized table'>
          <TableHead>
            <TableRow>
              <TableCell align='center'>
                <b>Nr. Hurð: {data?.id}</b>
              </TableCell>
              <TableCell align='center'>
                <b>Tegund:{data.tegund.split("-")[1]}</b>
              </TableCell>
              <TableCell align='center' colSpan={3}>
                <b>
                  Gatmál: {p(data.height)}x{p(data.width)}x{p(data.vegg_tykkt)}
                </b>
              </TableCell>
              <TableCell align='center' colSpan={2}>
                <b>
                  Birgði: L:{lengdHurd(data) - 200} B:{breiddHurd(data) - 100}
                </b>
              </TableCell>
              <TableCell align='center' width='13%'>
                <b>Karmaþykkt: {data.karmþykkt}</b>
              </TableCell>
              <TableCell align='center' width='13%'>
                <b>Bil frá gólfi: {data.bil_vid_golf}</b>
              </TableCell>
              <TableCell align='center' width='13%'>
                <b>Bil að karmi: {data.rymi_utan_karms}</b>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <b>Nafn Hurðar: {data.nafn_hurdar}</b>
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
                <b>stk</b>
              </TableCell>
              <TableCell align='center'>
                <b>Efni</b>
              </TableCell>
              <TableCell align='center'>
                <b>Fram</b>
              </TableCell>
              <TableCell align='center'>
                <b>Bak</b>
              </TableCell>
              <TableCell align='center'>
                <b>Kantur</b>
              </TableCell>
              <TableCell align='center'>
                <b></b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* HURÐ*/}
            <TableRow>
              <TableCell align='center' component='th' scope='row'>
                Hurð
              </TableCell>
              <TableCell align='center'>{lengdHurd(data)}</TableCell>
              <TableCell align='center'>{breiddHurd(data)}</TableCell>
              <TableCell align='center'>{hurdÞ_Tegund(data)}</TableCell>
              <TableCell align='center'>1</TableCell>
              <TableCell align='center'>{data.tegund.split("-")[0]}</TableCell>
              <TableCell align='center'>{data.efni_hurd}</TableCell>
              <TableCell align='center'>{data.efni_hurd}</TableCell>
              <TableCell align='center'>{data.kantliming_hurd}</TableCell>
              <TableCell align='center'>
                {data.vinstri ? "Vinstri" : "Hægri"}
              </TableCell>
            </TableRow>

            {/* KARMUR YFIR*/}
            <TableRow>
              <TableCell align='center' component='th' scope='row'>
                Karmur yfir
              </TableCell>
              <TableCell align='center'>{karmurYfir(data)}</TableCell>
              <TableCell align='center'>{data.vegg_tykkt}</TableCell>
              <TableCell align='center'>{data.karmþykkt}</TableCell>
              <TableCell align='center'>1</TableCell>
              <TableCell align='center'>
                {karmur_yfir_hlid_tegund(data)}
              </TableCell>
              <TableCell align='center'>{data.efni_karmur}</TableCell>

              <TableCell align='center'>
                {data.gerreti ? "Bréf" : data.efni_karmur}
              </TableCell>
              <TableCell align='center'>{data.kantliming_karmur}</TableCell>
              <TableCell align='center'>{data.lamir}</TableCell>
            </TableRow>

            {/* KARMUR HLIÐ */}
            <TableRow>
              <TableCell align='center' component='th' scope='row'>
                Karmur hlið
              </TableCell>
              <TableCell align='center'>
                {p(data.height) - p(data.rymi_utan_karms)}
              </TableCell>
              <TableCell align='center'>{data.vegg_tykkt}</TableCell>
              <TableCell align='center'>{data.karmþykkt}</TableCell>
              <TableCell align='center'>
                {data.skra === "Faldar lamir" ? 2 : 1}
              </TableCell>
              <TableCell align='center'>
                {karmur_yfir_hlid_tegund(data)}
              </TableCell>
              <TableCell align='center'>{data.efni_karmur}</TableCell>

              <TableCell align='center'>
                {data.gerreti ? "Bréf" : data.efni_karmur}
              </TableCell>
              <TableCell align='center'>{data.kantliming_karmur}</TableCell>
              <TableCell align='center'>{data.skra}</TableCell>
            </TableRow>

            {/* KARMUR HLIÐ 2*/}
            {data.lamir === "Faldar lamir" ? (
              <TableRow>
                <TableCell align='center' component='th' scope='row'>
                  Karmur hlið
                </TableCell>
                <TableCell align='center'>
                  {p(data.height) - p(data.rymi_utan_karms)}
                </TableCell>
                <TableCell align='center'>{data.vegg_tykkt}</TableCell>
                <TableCell align='center'>{data.karmþykkt}</TableCell>
                <TableCell align='center'>1</TableCell>
                <TableCell align='center'>Límtré</TableCell>
                <TableCell align='center'>{data.efni_karmur}</TableCell>

                <TableCell align='center'>
                  {data.gerreti ? "Bréf" : data.efni_karmur}
                </TableCell>
                <TableCell align='center'>{data.kantliming_karmur}</TableCell>
                <TableCell align='center'>
                  {data.felli_throskuldur ? "Felli: Já" : "Felli: Nei"}
                </TableCell>
              </TableRow>
            ) : null}

            {/* SLAGLISTI*/}
            {data.slaglisti === "Gks listi" ? (
              <TableRow>
                <TableCell align='center' component='th' scope='row'>
                  Slaglisti
                </TableCell>
                <TableCell align='center'>LPX</TableCell>
                <TableCell align='center'>{slaglistB(data)}</TableCell>
                <TableCell align='center'>16</TableCell>
                <TableCell align='center'>3</TableCell>
                <TableCell align='center'>MDF</TableCell>
                <TableCell align='center'>{data.efni_karmur}</TableCell>

                <TableCell align='center'>
                  {data.gerreti ? "Bréf" : data.efni_karmur}
                </TableCell>
                <TableCell align='center'>{data.kantliming_karmur}</TableCell>
                <TableCell align='center'>
                  {data.throskuldur ? "Já" : "Nei"}
                </TableCell>
              </TableRow>
            ) : null}

            {/* GEREFTI*/}
            {data.gerreti ? (
              <TableRow>
                <TableCell align='center' component='th' scope='row'>
                  Gerefti
                </TableCell>
                <TableCell align='center'>LPX</TableCell>
                <TableCell align='center'>{data.geretti_tykkt}</TableCell>
                <TableCell align='center'>9</TableCell>
                <TableCell align='center'>5</TableCell>
                <TableCell align='center'>MDF</TableCell>
                <TableCell align='center'>{data.efni_karmur}</TableCell>

                <TableCell align='center'>
                  {data.gerreti ? "Bréf" : data.efni_karmur}
                </TableCell>
                <TableCell align='center'>{data.kantliming_karmur}</TableCell>
                <TableCell align='center'>&emsp;</TableCell>
              </TableRow>
            ) : null}

            {/* GLUGGI*/}
            {data.gerreti ? (
              <TableRow>
                <TableCell align='center' component='th' scope='row'>
                  Gluggi
                </TableCell>
                <TableCell align='center' colSpan={9}>
                  Stærð: {data.gluggi_height}&emsp; Breidd: {data.gluggi_width}
                  &emsp; Lengd frá top: {data.gluggi_fra_toppi}&emsp; Lengd frá
                  botn: {data.gluggi_fra_botni}&emsp; Lengd frá vinstri:{" "}
                  {data.gluggi_fra_vinstri}&emsp; Lengd frá hægri:{" "}
                  {data.gluggi_fra_hægri}&emsp;
                </TableCell>
              </TableRow>
            ) : null}
          </TableBody>
          {data.athugasemd !== "" ? (
            <TableRow>
              <TableCell colSpan={10}>
                <b>Athugasemd: {data.athugasemd}</b>
              </TableCell>
            </TableRow>
          ) : null}
        </Table>
      </TableContainer>
    </>
  );
};

export default DoorTable;
