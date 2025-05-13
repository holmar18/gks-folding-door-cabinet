import React, {useState} from "react";
import "./style.css";
// Components
import Input from "../components/Input";
import CheckBox from "../components/CheckBox";
import SelectInput from "../components/SelectInput";
// Material UI
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Paper from "@mui/material/Paper";
// Components
import FoldingDoorCabinetTable from "../components/FoldingDoorCabinetTable";
import CustomizedSnackbars from "../components/SnackBar";
// Utils
import currentDate from "../utils/currentDate";
import FdcTabelData from "../utils/foldingDoorCabinetCalculation";
// Hooks
import useFoldingDorCabinet from "../hooks/useFoldingDorCabinet";
import useFoldingDoorCabinetImage from "../hooks/useFoldingDoorCabinetImage";
// Context
import {useTranslationContext} from "../context/TranslationContext";

const FoldingDorCabinet = () => {
  const {
    cabinetValues,
    update,
    clear,
    errorText,
    error,
    setError,
    savePdf,
    pdfTemplateRef
  } = useFoldingDorCabinet();

  const img = useFoldingDoorCabinetImage(cabinetValues);
  const {translations, setCurrentTranslation, currentTranslation} =
    useTranslationContext();


    const [vorunumer, setVorunumer ] = useState(false);

  const saveToPdf = () => {
    // Ef það er hakað í frá Nobilia þá þarf að setja inn vörunúmer
    if(cabinetValues.carcase_nobilia && !vorunumer) {
        setVorunumer(true);
    } else {
      savePdf();
    }
  }

  const closeDialog = () => {
    savePdf();
    setVorunumer(false);
  }

  return (
    <Paper
      sx={{
        p: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
      <Container ref={pdfTemplateRef}>
        <h1>{translations.Tækjaskapur}</h1>
        <Divider />

        <Grid container gap={4} pt={1} className='container'>
          <Input
            TitleText={translations.Viðskiptavinur}
            size={4}
            value={cabinetValues.customer}
            valueVariable={[cabinetValues.customer, update, "customer"]}
          />
          <Input
            TitleText={translations.Sölumaður}
            value={cabinetValues.seller}
            valueVariable={[cabinetValues.seller, update, "seller"]}
          />
          <Input TitleText={translations.Dags} value={currentDate()} />
        </Grid>

        <Grid container gap={4} pt={4} className='container'>
          <Grid item xs={4} m={4} className='container'>
            <img src={img} alt='cabinet' />
          </Grid>

          <Grid item xs={4} gap={4}>
            <Input
              TitleText={translations.Breidd}
              type='number'
              value={cabinetValues.width}
              valueVariable={[cabinetValues.width, update, "width"]}
            />
            <Input
              TitleText={translations.Hæð}
              type='number'
              value={cabinetValues.height}
              valueVariable={[cabinetValues.height, update, "height"]}
            />
            <Input
              TitleText={translations.Dýpt}
              type='number'
              value={cabinetValues.depth}
              valueVariable={[cabinetValues.depth, update, "depth"]}
            />
            <SelectInput
              values={[16, 19]}
              update={update}
              changeLabel='thickness'
              label={translations.Þykkt}
              value={cabinetValues.thickness}
            />
            <Input
              TitleText={translations.Innmatur_litur}
              value={cabinetValues.carcase_color}
              valueVariable={[
                cabinetValues.carcase_color,
                update,
                "carcase_color",
              ]}
            />
            <Input
              TitleText={translations.Kantliming_litur}
              value={cabinetValues.edge_color}
              valueVariable={[cabinetValues.edge_color, update, "edge_color"]}
            />
            <CheckBox
              TitleText={translations.Innmatur_fra_nobilia}
              update={update}
              changeLabel='carcase_nobilia'
              value={cabinetValues.carcase_nobilia}
            />
            <CheckBox
              TitleText={translations.Breyta_hja_gks}
              update={update}
              mt={0}
              isDisabled={!cabinetValues.carcase_nobilia}
              changeLabel='carcase_change_gks'
              value={cabinetValues.carcase_change_gks}
            />
          </Grid>
        </Grid>

        <Grid container gap={2} className='container'>
          <Input
            TitleText={translations.Hillu_fjoldi}
            size={2}
            type='number'
            value={cabinetValues.shelf_count}
            valueVariable={[cabinetValues.shelf_count, update, "shelf_count"]}
          />
          <Input
            TitleText={translations.Hillu_litur}
            size={3}
            value={cabinetValues.shelf_color}
            valueVariable={[cabinetValues.shelf_color, update, "shelf_color"]}
          />
          <Input
            TitleText={translations.Hillu_dypt}
            size={3}
            type='number'
            value={cabinetValues.shelf_depth}
            valueVariable={[cabinetValues.shelf_depth, update, "shelf_depth"]}
          />
        </Grid>

        <Grid container gap={4} pt={2} className='container'>
          <CheckBox
            TitleText={translations.Ljos_hillu}
            update={update}
            changeLabel='light_Shelf'
            value={cabinetValues.light_Shelf}
          />
          <CheckBox
            TitleText={translations.Hilla_kom_fra_nobilia}
            update={update}
            changeLabel='self_nobila'
            value={cabinetValues.self_nobila}
          />
          <CheckBox
            TitleText={translations.Þarf_ad_breyta_gks}
            isDisabled={!cabinetValues.self_nobila}
            update={update}
            changeLabel='self_change_gks'
            value={cabinetValues.self_change_gks}
          />
        </Grid>

        <Grid container gap={4} mt={1} className='container'>
          <Input
            TitleText={translations.Ath_1}
            size={8}
            pt={2}
            value={cabinetValues.Athugasemd1}
            valueVariable={[cabinetValues.Athugasemd1, update, "Athugasemd1"]}
          />
        </Grid>

        <Grid container gap={4} mt={6} className='container'>
          <SelectInput
            value={cabinetValues.door_count}
            values={[0, 2, 4]}
            update={update}
            changeLabel='door_count'
            label={translations.Hurða_fjoldi}
            size={4}
          />
          <Input
            TitleText={translations.Hurða_litur}
            size={4}
            value={cabinetValues.door_color}
            valueVariable={[cabinetValues.door_color, update, "door_color"]}
          />
        </Grid>

        <Grid container gap={4} pt={2} className='container'>
          <CheckBox
            TitleText={translations.Hurðir_koma_fra_nobilia}
            isDisabled={cabinetValues.door_count === 0}
            update={update}
            changeLabel='doors_nobila'
            value={cabinetValues.doors_nobila}
          />
          <CheckBox
            TitleText={translations.Hurð_breyta_gks}
            isDisabled={!cabinetValues.doors_nobila}
            update={update}
            changeLabel='doors_change_gks'
            value={cabinetValues.doors_change_gks}
          />
        </Grid>

        <Grid container mt={1} mb={4} className='container'>
          <Grid item xs={4}>
            <Input
              TitleText={translations.Holdur}
              size={8}
              pt={2}
              value={cabinetValues.holdur}
              valueVariable={[cabinetValues.holdur, update, "holdur"]}
            />
          </Grid>
          <Grid item xs={4}>
            <CheckBox
              TitleText={translations.Fræsa_holdur}
              isDisabled={cabinetValues.holdur === "" ? true : false}
              update={update}
              changeLabel='holdur_fræsa'
              value={cabinetValues.holdur_fræsa}
            />
          </Grid>
        </Grid>

        <Grid container mb={8} mt={16}>
          <FoldingDoorCabinetTable
            cv={cabinetValues}
            tableRows={FdcTabelData(cabinetValues)}
          />
        </Grid>

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
              color='secondary'
              onClick={setCurrentTranslation}>
              {currentTranslation === "Icelandic" ? "English" : "Icelandic"}
            </Fab>
            <Fab
              style={{padding: "12px", marginBottom: "0.8rem"}}
              variant='extended'
              size='small'
              color='primary'
              onClick={clear}>
              {translations.hreinsa}
            </Fab>
            <Fab
              style={{padding: "12px"}}
              variant='extended'
              size='small'
              color='primary'
              onClick={saveToPdf}>
              {translations.savepdf}
            </Fab>
          </Box>
        </Box>

      </Container>

      <Dialog
        aria-labelledby="customized-dialog-title"
        open={vorunumer}
        fullScreen
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {translations.vorunumer}
        </DialogTitle>
        <DialogContent dividers>
        <Grid container gap={2} pt={2} className='container'>
            <Input
              TitleText={translations.hilla_vorunumer}
              size={2}
              value={cabinetValues.hilla_vorunumer}
              valueVariable={[
                cabinetValues.hilla_vorunumer,
                update, 
                `hilla_vorunumer`
              ]}
            />
            <Input
              TitleText={translations.hurd_vorunumer}
              size={2}
              value={cabinetValues.hurd_vorunumer}
              valueVariable={[
                cabinetValues.hurd_vorunumer,
                update, 
                `hurd_vorunumer`
              ]}
            />
            <Input
                TitleText={translations.bak_vorunumber}
                size={2}
                value={cabinetValues.bak_vorunumer}
                valueVariable={[cabinetValues.bak_vorunumer, update, "bak_vorunumer"]}
              />
            <Input
                TitleText={translations.toppur_vorunumer}
                size={2}
                value={cabinetValues.toppur_vorunumer}
                valueVariable={[cabinetValues.toppur_vorunumer, update, "toppur_vorunumer"]}
              />
            <Input
                TitleText={translations.hlid_vorunumer}
                size={2}
                value={cabinetValues.hlid_vorunumer}
                valueVariable={[cabinetValues.hlid_vorunumer, update, "hlid_vorunumer"]}
              />
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={closeDialog}>
            {translations.vista_vorunumer}
          </Button>
        </DialogActions>
      </Dialog>

      <CustomizedSnackbars
        open={error}
        setOpen={setError}
        text={errorText}
        severity='error'
      />
    </Paper>
  );
};

export default FoldingDorCabinet;
