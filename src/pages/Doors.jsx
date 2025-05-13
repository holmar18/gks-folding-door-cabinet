import React, {useRef} from "react";
import "./style.css";
// Components
import Input from "../components/Input";
import CheckBox from "../components/CheckBox";
import SelectInput from "../components/SelectInput";
import CustomizedSnackbars from "../components/SnackBar";
// Material UI
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Paper from "@mui/material/Paper";
// Utils
import currentDate from "../utils/currentDate";
// Hooks
import useDoor from "../hooks/useDoor";
import useSaveAsPdf from "../hooks/useSaveAsPdf";
import DoorTable from "../components/DoorTable";
import useDoorImages from "../hooks/useDoorImages.js";

const Doors = () => {
  const {
    doorValues,
    update,
    saveDoor,
    allDoors,
    getDoorFromList,
    errorText,
    error,
    setError,
  } = useDoor();
  const {handleGeneratePdf} = useSaveAsPdf();

  const {currImgSrc, setBreiddFocus, setImgHaedFocus, setImgVeggTykkt} =
    useDoorImages(doorValues);

  const singleItemRef = useRef(null);
  const tableRef = useRef(null);

  return (
    <Paper
      sx={{
        p: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
      <Container ref={singleItemRef}>
        <Grid container>
          <Grid item xs={8}>
            <h1>Hurð</h1>
          </Grid>
          <Grid container flex={1} justifyContent='flex-end'>
            <Input
              TitleText={"Verk númer"}
              size={8}
              type='number'
              value={doorValues.verk_nr}
              valueVariable={[doorValues.verk_nr, update, "verk_nr"]}
            />
          </Grid>
        </Grid>
        <Divider />
        <Grid container gap={4} pt={1} className='container'>
          <Input
            TitleText={"Viðskiptavinur"}
            size={4}
            value={doorValues?.customer}
            valueVariable={[doorValues?.customer, update, "customer"]}
          />
          <Input
            TitleText={"Sölumaður"}
            value={doorValues?.seller}
            valueVariable={[doorValues?.seller, update, "seller"]}
          />
          <Input TitleText={"Dags"} value={currentDate()} />
        </Grid>

        <Grid container gap={4} pt={4} className='container'>
          <Grid item xs={4} m={4} className='container'>
            <img src={currImgSrc} alt='cabinet' />
          </Grid>

          <Grid item xs={4} gap={4}>
            <Input
              TitleText={"Nafn hurðar"}
              value={doorValues?.nafn_hurdar}
              valueVariable={[doorValues?.nafn_hurdar, update, "nafn_hurdar"]}
            />
            <Input
              TitleText={"Hæð"}
              type='number'
              value={doorValues?.height}
              valueVariable={[doorValues?.height, update, "height"]}
              onBlur={setImgHaedFocus}
              onFocus={setImgHaedFocus}
            />
            <Input
              TitleText={"Breidd"}
              type='number'
              value={doorValues?.width}
              valueVariable={[doorValues?.width, update, "width"]}
              onBlur={setBreiddFocus}
              onFocus={setBreiddFocus}
            />
            <Input
              TitleText={"Vegg þykkt"}
              type='number'
              value={doorValues?.vegg_tykkt}
              valueVariable={[doorValues?.vegg_tykkt, update, "vegg_tykkt"]}
              onBlur={setImgVeggTykkt}
              onFocus={setImgVeggTykkt}
            />
            <SelectInput
              values={[
                "33RT8 - Venjuleg",
                "33VL - Glerhurð",
                "33RH - E30",
                "42VL - E60",
                "38S3K - Hljóðeinangrun",
                "33S2K - 38 DB",
                "Eurolight - Rennihurð",
              ]}
              update={update}
              changeLabel='tegund'
              label='Tegund'
              value={doorValues?.tegund}
            />
          </Grid>
        </Grid>

        <Grid container item className='container'>
          <Grid item xs={6} paddingLeft={8}>
            <Grid container className='container'>
              <Grid item xs={4}>
                <CheckBox
                  TitleText={"Vinstri"}
                  update={update}
                  changeLabel='vinstri'
                  isDisabled={doorValues?.haegri}
                  value={doorValues?.vinstri}
                />
              </Grid>
              <Grid item xs={4}>
                <CheckBox
                  TitleText={"Hægri"}
                  update={update}
                  changeLabel='haegri'
                  isDisabled={doorValues?.vinstri}
                  value={doorValues?.haegri}
                />
              </Grid>
            </Grid>

            <Grid container className='container'>
              <Grid item xs={4}>
                <CheckBox
                  TitleText={"Felliþröskuldur"}
                  update={update}
                  changeLabel='felli_throskuldur'
                  value={doorValues?.felli_throskuldur}
                />
              </Grid>
              <Grid item xs={4}>
                <CheckBox
                  TitleText={"Gluggi"}
                  update={update}
                  changeLabel='gluggi'
                  value={doorValues?.gluggi}
                />
              </Grid>
            </Grid>

            <Grid container className='container'>
              <Grid item xs={4}>
                <CheckBox
                  TitleText={"Þröskuldur"}
                  update={update}
                  changeLabel='throskuldur'
                  value={doorValues?.throskuldur}
                />
              </Grid>
              <Grid item xs={4}>
                <CheckBox
                  TitleText={"Gerefti"}
                  update={update}
                  changeLabel='gerreti'
                  value={doorValues?.gerreti}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={6} paddingBottom={3}>
            <Grid container paddingLeft={6}>
              <Input
                TitleText={"Efni hurð"}
                value={doorValues?.efni_hurd}
                valueVariable={[doorValues?.efni_hurd, update, "efni_hurd"]}
                size={12}
              />
              <Input
                TitleText={"Efni karmur"}
                value={doorValues?.efni_karmur}
                valueVariable={[doorValues?.efni_karmur, update, "efni_karmur"]}
                size={12}
              />
              <Input
                TitleText={"Kantlíming hurð"}
                value={doorValues?.kantliming_hurd}
                valueVariable={[
                  doorValues?.kantliming_hurd,
                  update,
                  "kantliming_hurd",
                ]}
                size={12}
              />
              <Input
                TitleText={"Kantlíming karmur"}
                value={doorValues?.kantliming_karmur}
                valueVariable={[
                  doorValues?.kantliming_karmur,
                  update,
                  "kantliming_karmur",
                ]}
                size={12}
              />
            </Grid>
          </Grid>

          <Grid container item className='container'>
            <Grid item xs={6}>
              {doorValues.gluggi ? (
                <Grid item xs={12} paddingLeft={10}>
                  <Grid container paddingLeft={6} xs={11} spacing={4}>
                    <Grid item xs={6}>
                      <Input
                        TitleText={"Gluggi breidd"}
                        type='number'
                        value={doorValues?.gluggi_width}
                        valueVariable={[
                          doorValues?.gluggi_width,
                          update,
                          "gluggi_width",
                        ]}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Input
                        TitleText={"Gluggi hæð"}
                        type='number'
                        value={doorValues?.gluggi_height}
                        valueVariable={[
                          doorValues?.gluggi_height,
                          update,
                          "gluggi_height",
                        ]}
                      />
                    </Grid>
                  </Grid>
                  <Grid container paddingLeft={6} xs={11} spacing={4}>
                    <Grid item xs={6}>
                      <Input
                        TitleText={"Gluggi frá botni"}
                        type='number'
                        value={doorValues?.gluggi_fra_botni}
                        valueVariable={[
                          doorValues?.gluggi_fra_botni,
                          update,
                          "gluggi_fra_botni",
                        ]}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Input
                        TitleText={"Gluggi frá toppi"}
                        type='number'
                        value={doorValues?.gluggi_fra_toppi}
                        valueVariable={[
                          doorValues?.gluggi_fra_toppi,
                          update,
                          "gluggi_fra_toppi",
                        ]}
                      />
                    </Grid>
                  </Grid>
                  <Grid container paddingLeft={6} xs={11} spacing={4}>
                    <Grid item xs={6}>
                      <Input
                        TitleText={"Gluggi frá vinstri"}
                        type='number'
                        value={doorValues?.gluggi_fra_vinstri}
                        valueVariable={[
                          doorValues?.gluggi_fra_vinstri,
                          update,
                          "gluggi_fra_vinstri",
                        ]}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Input
                        TitleText={"Gluggi frá hægri"}
                        type='number'
                        value={doorValues?.gluggi_fra_hægri}
                        valueVariable={[
                          doorValues?.gluggi_fra_hægri,
                          update,
                          "gluggi_fra_hægri",
                        ]}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              ) : (
                <Grid item xs={6} paddingLeft={10}></Grid>
              )}

              {doorValues.gerreti ? (
                <Grid item xs={12} paddingLeft={10} paddingTop={4}>
                  <Grid container paddingLeft={6} xs={11} spacing={4}>
                    <Grid item xs={6}>
                      <Input
                        TitleText={"Geretti þykkt"}
                        type='number'
                        value={doorValues?.geretti_tykkt}
                        valueVariable={[
                          doorValues?.geretti_tykkt,
                          update,
                          "geretti_tykkt",
                        ]}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Input
                        TitleText={"Geretti breidd"}
                        type='number'
                        value={doorValues?.geretti_breidd}
                        valueVariable={[
                          doorValues?.geretti_breidd,
                          update,
                          "geretti_breidd",
                        ]}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              ) : null}
            </Grid>

            <Grid item xs={6}>
              <Grid item paddingLeft={6} xs={9}>
                <SelectInput
                  values={[
                    "Pinnalamir",
                    "KDH Symetric",
                    "Faldar lamir",
                    "Annað",
                  ]}
                  update={update}
                  changeLabel='lamir'
                  label='Lamir'
                  value={doorValues?.lamir}
                />
                <SelectInput
                  values={["ASSA", "Þýsk", "Þýsk Segul", "Annað"]}
                  update={update}
                  changeLabel='skra'
                  label='Skrá'
                  value={doorValues?.skra}
                />
                <SelectInput
                  values={["Innval", "Gks listi"]}
                  update={update}
                  changeLabel='slaglisti'
                  label='Slaglisti'
                  value={doorValues?.slaglisti}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid container mt={1} mb={4} paddingTop={7} paddingLeft={14}>
            <Grid item xs={7} paddingRight={16}>
              <Input
                TitleText={"Athugasemdir"}
                multiline={true}
                rows={4}
                variant='outlined'
                value={doorValues?.athugasemd}
                valueVariable={[doorValues?.athugasemd, update, "athugasemd"]}
              />
            </Grid>
            <Grid item xs={5}>
              <Grid item xs={8}>
                {/* <Input
                  TitleText={"Parket"}
                  valueVariable={[doorValues?.parket, update, "parket"]}
                  value={doorValues?.parket}
                /> */}
                <Input
                  TitleText={"Karmþykkt"}
                  type='number'
                  value={doorValues?.karmþykkt}
                  valueVariable={[doorValues?.karmþykkt, update, "karmþykkt"]}
                />
              </Grid>
              <Grid item xs={8}>
                {/* <Input
                  TitleText={"Flisar"}
                  valueVariable={[doorValues?.flisar, update, "flisar"]}
                  value={doorValues?.flisar}
                /> */}
                <Input
                  TitleText={"Bil við gólf"}
                  type='number'
                  value={doorValues?.bil_vid_golf}
                  valueVariable={[
                    doorValues?.bil_vid_golf,
                    update,
                    "bil_vid_golf",
                  ]}
                />
              </Grid>
              <Grid item xs={8}>
                <Input
                  TitleText={"Rými utan karms"}
                  type='number'
                  value={doorValues?.rymi_utan_karms}
                  valueVariable={[
                    doorValues?.rymi_utan_karms,
                    update,
                    "rymi_utan_karms",
                  ]}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>

      {/* <Container>
        <Grid container mb={8} mt={16} ml={12}>
          <Grid item xs={2}>
            <Button
              variant='outlined'
              onClick={() =>
                handleGeneratePdf(
                  doorValues.seller,
                  doorValues.customer,
                  currentDate(),
                  singleItemRef
                )
              }>
              Vista Hurð PDF
            </Button>
          </Grid>

          <Grid item xs={2}>
            <Button
              variant='outlined'
              onClick={() =>
                handleGeneratePdf(
                  doorValues.seller,
                  doorValues.customer,
                  currentDate(),
                  tableRef
                )
              }>
              Vista töflu PDF
            </Button>
          </Grid>

          <Grid container xs={6} justifyContent='flex-end'>
            <Button variant='outlined' onClick={saveDoor}>
              Skrá Hurð
            </Button>
          </Grid>
        </Grid>
      </Container> */}

      <CustomizedSnackbars
        open={error}
        setOpen={setError}
        text={errorText}
        severity='error'
      />

      <Container ref={tableRef}>
        {allDoors.length > 0 ? (
          <div
            style={{
              marginTop: "6rem",
            }}>
            <span
              style={{
                padding: "0.4rem",
                marginRight: "3rem",
              }}>
              <b>Viðskiptavinur: {allDoors[0]?.customer}</b>
            </span>
            <span
              style={{
                padding: "0.4rem",
                marginRight: "3rem",
              }}>
              <b>Sölumaður: {allDoors[0]?.seller}</b>
            </span>
            <span
              style={{
                padding: "0.4rem",
                marginRight: "3rem",
              }}>
              <b>Dags: {currentDate()}</b>
            </span>
            <span
              style={{
                padding: "0.4rem",
                marginRight: "3rem",
              }}>
              <b>Verknúmer: {allDoors[0]?.verk_nr}</b>
            </span>
          </div>
        ) : null}
        {allDoors.length > 0
          ? allDoors.map((row) => (
              <Grid container mb={8} mt={8} key={row.id}>
                <DoorTable getDoorFromList={getDoorFromList} data={row} />
              </Grid>
            ))
          : null}
      </Container>

      <Box
        sx={{
          "& > :not(style)": {m: 1},
          position: "absolute",
          bottom: 0,
          right: "2%",
        }}>
        <Box display={"flex"} flexDirection={"column"}>
          <Fab
            style={{padding: "12px", marginBottom: "0.8rem"}}
            variant='extended'
            size='small'
            color='primary'
            onClick={saveDoor}>
            Skrá hurð
          </Fab>
          <Fab
            style={{padding: "12px"}}
            variant='extended'
            size='small'
            color='primary'
            onClick={() =>
              handleGeneratePdf(
                doorValues.seller,
                doorValues.customer,
                currentDate(),
                tableRef
              )
            }>
            Vista töflu PDF
          </Fab>
        </Box>
      </Box>

      {/* {doorValues ? (
        <Container ref={tableRef}>
          <Grid container mb={8} mt={16} key={doorValues?.id}>
            <DoorTable getDoorFromList={getDoorFromList} data={doorValues} />
          </Grid>
        </Container>
      ) : null} */}
    </Paper>
  );
};

export default Doors;
