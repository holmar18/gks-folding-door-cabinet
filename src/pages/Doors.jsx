import React, {useEffect, useState} from "react";
import "./style.css";
// Components
import Input from "../components/Input";
import CheckBox from "../components/CheckBox";
import SelectInput from "../components/SelectInput";
// Material UI
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
// Images
import basic from "../assets/images/hurd/basic.png";
import breidd from "../assets/images/hurd/breidd.png";
import haed from "../assets/images/hurd/haed.png";
import veggykkt from "../assets/images/hurd/veggykkt.png";
import haegriGerreti from "../assets/images/hurd/haegriMgerreti.png";
import vinstriGerreti from "../assets/images/hurd/vinstiMgerreti.png";
// Utils
import currentDate from "../utils/currentDate";
// Hooks
import useFoldingDorCabinet from "../hooks/useFoldingDorCabinet";
import useSaveAsPdf from "../hooks/useSaveAsPdf";

const Doors = () => {
  const {cabinetValues, update} = useFoldingDorCabinet();
  const {pdfTemplateRef, handleGeneratePdf} = useSaveAsPdf();

  const [imgBreiddFocus, setBreiddFocus] = useState(false);
  const [imgHaedFocus, setImgHaedFocus] = useState(false);
  const [imgVeggtykkt, setImgVeggTykkt] = useState(false);
  const [currImgSrc, setCurrImgSrc] = useState(basic);

  useEffect(() => {
    if (imgBreiddFocus) {
      setCurrImgSrc(breidd);
    } else if (imgHaedFocus) {
      setCurrImgSrc(haed);
    } else if (imgVeggtykkt) {
      setCurrImgSrc(veggykkt);
    } else if (cabinetValues.haegri) {
      setCurrImgSrc(haegriGerreti);
    } else if (cabinetValues.vinstri) {
      setCurrImgSrc(vinstriGerreti);
    } else {
      setCurrImgSrc(basic);
    }
  }, [imgBreiddFocus, imgHaedFocus, imgVeggtykkt, cabinetValues]);

  return (
    <Container ref={pdfTemplateRef}>
      <Grid container>
        <Grid item xs={8}>
          <h1>Hurð</h1>
        </Grid>
        <Grid container xs={4} flex={1} justifyContent='flex-end'>
          <Input
            TitleText={"Verk númer"}
            size={8}
            update={update}
            changeLabel={"verk_nr"}
          />
        </Grid>
      </Grid>
      <Divider />
      <Grid container gap={4} pt={1} className='container'>
        <Input
          TitleText={"Viðskiptavinur"}
          size={4}
          valueVariable={[cabinetValues.customer, update, "customer"]}
        />
        <Input
          TitleText={"Sölumaður"}
          autoComplete={"nickname"}
          valueVariable={[cabinetValues.seller, update, "seller"]}
        />
        <Input TitleText={"Date"} value={currentDate()} />
      </Grid>

      <Grid container gap={4} pt={4} className='container'>
        <Grid item xs={4} m={4} className='container'>
          <img src={currImgSrc} alt='cabinet' />
        </Grid>

        <Grid item xs={4} gap={4}>
          <Input
            TitleText={"Nafn hurðar"}
            valueVariable={[cabinetValues.nafn_hurdar, update, "nafn_hurdar"]}
          />
          <Input
            TitleText={"Hæð"}
            type='number'
            valueVariable={[cabinetValues.height, update, "height"]}
            onBlur={setImgHaedFocus}
            onFocus={setImgHaedFocus}
          />
          <Input
            TitleText={"Breidd"}
            type='number'
            valueVariable={[cabinetValues.width, update, "width"]}
            onBlur={setBreiddFocus}
            onFocus={setBreiddFocus}
          />
          <Input
            TitleText={"Vegg þykkt"}
            type='number'
            valueVariable={[cabinetValues.vegg_tykkt, update, "vegg_tykkt"]}
            onBlur={setImgVeggTykkt}
            onFocus={setImgVeggTykkt}
          />
          <SelectInput
            values={[
              "Venjuleg",
              "E-30",
              "E-60",
              "Hljóðeinangrandi 32DB",
              "Hljóðeinangrandi 42DB",
              "Rennihurð",
            ]}
            update={update}
            changeLabel='tegund'
            label='Tegund'
          />
          <Input
            TitleText={"Þykkt"}
            type='number'
            valueVariable={[cabinetValues.tykkt, update, "tykkt"]}
          />
          <Input
            TitleText={"Efni"}
            valueVariable={[cabinetValues.efni, update, "efni"]}
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
                isDisabled={cabinetValues.haegri}
              />
            </Grid>
            <Grid item xs={4}>
              <CheckBox
                TitleText={"Hægri"}
                update={update}
                changeLabel='haegri'
                isDisabled={cabinetValues.vinstri}
              />
            </Grid>
          </Grid>

          <Grid container className='container'>
            <Grid item xs={4}>
              <CheckBox
                TitleText={"Felliþröskuldur"}
                update={update}
                changeLabel='felli_throskuldur'
              />
            </Grid>
            <Grid item xs={4}>
              <CheckBox
                TitleText={"Gluggi"}
                update={update}
                changeLabel='gluggi'
              />
            </Grid>
          </Grid>

          <Grid container className='container'>
            <Grid item xs={4}>
              <CheckBox
                TitleText={"Þröskuldur"}
                update={update}
                changeLabel='throskuldur'
              />
            </Grid>
            <Grid item xs={4}>
              <CheckBox
                TitleText={"Gerreti"}
                update={update}
                changeLabel='gerreti'
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={6}>
          <Grid item paddingLeft={6} xs={8}>
            <Input
              TitleText={"Athugasemdir"}
              valueVariable={[cabinetValues.efni, update, "athugasemd"]}
              multiline={true}
              rows={4}
              variant='outlined'
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid container item className='container'>
        <Grid item xs={6} paddingLeft={10}>
          <Grid item paddingLeft={6} xs={10}>
            <Input
              TitleText={"Annad"}
              valueVariable={[cabinetValues.efni, update, "annad"]}
              multiline={true}
              rows={4}
              variant='outlined'
            />
          </Grid>
        </Grid>

        <Grid item xs={6}>
          <Grid item paddingLeft={6} xs={10}>
            <SelectInput
              values={["Pinnalamir", "KDH Symetric", "Faldar lamir", "Annað"]}
              update={update}
              changeLabel='lamir'
              label='Lamir'
            />
            <SelectInput
              values={["ASSA", "Þýsk", "Þýsk Segul", "Annað"]}
              update={update}
              changeLabel='skra'
              label='Skrá'
            />
            <SelectInput
              values={["Innval", "Gks listi"]}
              update={update}
              changeLabel='slaglisti'
              label='Slaglisti'
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid container mt={1} mb={4} paddingTop={7} paddingLeft={14}>
        <Grid item xs={8} paddingRight={16}>
          <p style={{paddingBottom: "16px"}}>
            Ekki er unnt að gera breytingar á málum eftir að smíði er hafin.
            Undirritaður/-uð staðfestir að ofangreind mál séu rétt.
          </p>
          <Input TitleText={""} size={8} pt={2} />
        </Grid>
        <Grid item xs={4}>
          <Grid item xs={9}>
            <Input
              TitleText={"Parket"}
              type='number'
              valueVariable={[cabinetValues.parket, update, "parket"]}
            />
          </Grid>
          <Grid item xs={9}>
            <Input
              TitleText={"Flisar"}
              type='number'
              valueVariable={[cabinetValues.flisar, update, "flisar"]}
            />
          </Grid>
        </Grid>
      </Grid>

      {/* <Grid container mb={8} mt={16}>
        <TableDisplay cv={cabinetValues} /> 
      </Grid> */}
      <Grid container mb={8} mt={16} ml={12}>
        <Button variant='outlined' onClick={handleGeneratePdf}>
          Vista PDF
        </Button>
      </Grid>
    </Container>
  );
};

export default Doors;
