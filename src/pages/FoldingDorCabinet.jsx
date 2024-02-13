import React from "react";
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
import cabinet from "../assets/images/taekjaskapur/skapur.png";
import TableDisplay from "../components/TableDisplay";
// Utils
import currentDate from "../utils/currentDate";
import FdcTabelData from "../utils/foldingDoorCabinetCalculation";
// Hooks
import useFoldingDorCabinet from "../hooks/useFoldingDorCabinet";
import useSaveAsPdf from "../hooks/useSaveAsPdf";

const FoldingDorCabinet = () => {
  const {cabinetValues, update, clear} = useFoldingDorCabinet();
  const {pdfTemplateRef, handleGeneratePdf} = useSaveAsPdf();

  return (
    <Container ref={pdfTemplateRef}>
      <h1>Tækjaskápur</h1>
      <Divider />
      <Grid container gap={4} pt={1} className='container'>
        <Input
          TitleText={"Viðskiptavinur"}
          size={4}
          update={update}
          changeLabel={"customer"}
        />
        <Input
          TitleText={"Sölumaður"}
          valueVariable={[cabinetValues.seller, update, "seller"]}
        />
        <Input TitleText={"Date"} value={currentDate()} />
      </Grid>

      <Grid container gap={4} pt={4} className='container'>
        <Grid item xs={4} m={4} className='container'>
          <img src={cabinet} alt='cabinet' />
        </Grid>

        <Grid item xs={4} gap={4}>
          <Input
            TitleText={"Breidd"}
            type='number'
            valueVariable={[cabinetValues.width, update, "width"]}
          />
          <Input
            TitleText={"Hæð"}
            type='number'
            valueVariable={[cabinetValues.height, update, "height"]}
          />
          <Input
            TitleText={"Dýpt"}
            type='number'
            valueVariable={[cabinetValues.depth, update, "depth"]}
          />
          <SelectInput
            values={[16, 19]}
            update={update}
            changeLabel='thickness'
            label='Þykkt'
          />
          <Input
            TitleText={"Innmatur litur"}
            valueVariable={[
              cabinetValues.carcase_color,
              update,
              "carcase_color",
            ]}
          />
          <Input
            TitleText={"Kantlíming litur"}
            valueVariable={[cabinetValues.edge_color, update, "edge_color"]}
          />
          <CheckBox
            TitleText={"Innmatur kemur frá Nobilia"}
            update={update}
            changeLabel='carcase_nobilia'
          />
          <CheckBox
            TitleText={"Þarf að breyta hjá GKS"}
            mt={0}
            isDisabled={!cabinetValues.carcase_nobilia}
          />
        </Grid>
      </Grid>

      <Grid container gap={2} className='container'>
        <Input
          TitleText={"Hillu fjöldi"}
          size={2}
          valueVariable={[cabinetValues.shelf_count, update, "shelf_count"]}
        />
        <Input
          TitleText={"Hillu litur"}
          size={3}
          valueVariable={[cabinetValues.shelf_color, update, "shelf_color"]}
        />
        <Input
          TitleText={"Hillu dýpt"}
          size={3}
          type='number'
          valueVariable={[cabinetValues.shelf_depth, update, "shelf_depth"]}
        />
      </Grid>

      <Grid container gap={4} pt={2} className='container'>
        <CheckBox TitleText={"Ljós í hillu"} />
        <CheckBox
          TitleText={"Hillur koma frá Nobila"}
          update={update}
          changeLabel='self_nobila'
        />
        <CheckBox
          TitleText={"Þarf að breyta hjá GKS"}
          isDisabled={!cabinetValues.self_nobila}
        />
      </Grid>

      <Grid container gap={4} mt={1} className='container'>
        <Input TitleText={"Athugasemd"} size={8} pt={2} />
      </Grid>

      <Grid container gap={4} mt={6} className='container'>
        <SelectInput
          values={[2, 4]}
          update={update}
          changeLabel='door_count'
          label='Hurða fjöldi'
          size={4}
        />
        <Input
          TitleText={"Hurða litur"}
          size={4}
          valueVariable={[cabinetValues.door_color, update, "door_color"]}
        />
      </Grid>

      <Grid container gap={4} pt={2} className='container'>
        <CheckBox
          TitleText={"Hurðir koma frá Nobilia"}
          update={update}
          changeLabel='doors_nobila'
        />
        <CheckBox
          TitleText={"Þarf að breyta hjá GKS"}
          isDisabled={!cabinetValues.doors_nobila}
        />
      </Grid>

      <Grid container mt={1} mb={4} className='container'>
        <Input TitleText={"Athugasemd"} size={8} pt={2} />
      </Grid>

      <Grid container mb={8} mt={16}>
        <TableDisplay
          cv={cabinetValues}
          tableRows={FdcTabelData(cabinetValues)}
        />
      </Grid>

      <Grid container spacing={2} columns={16} mb={5}>
        <Grid item xs={14}>
          <Button
            variant='outlined'
            onClick={() =>
              handleGeneratePdf(
                cabinetValues.seller,
                cabinetValues.customer,
                currentDate()
              )
            }>
            Vista PDF
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button variant='outlined' onClick={clear}>
            Hreinsa
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FoldingDorCabinet;
