import React, {useEffect, useState, useRef} from "react";
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
import doors2 from "../assets/images/taekjaskapur/2doors.png";
import doors4 from "../assets/images/taekjaskapur/4doors.png";
import shelf1 from "../assets/images/taekjaskapur/fdc1.png";
import shelf2 from "../assets/images/taekjaskapur/fdc2.png";
import shelf3 from "../assets/images/taekjaskapur/fdc3.png";
// Components
import FoldingDoorCabinetTable from "../components/FoldingDoorCabinetTable";
// Utils
import currentDate from "../utils/currentDate";
import FdcTabelData from "../utils/foldingDoorCabinetCalculation";
// Hooks
import useFoldingDorCabinet from "../hooks/useFoldingDorCabinet";
import useSaveAsPdf from "../hooks/useSaveAsPdf";

const FoldingDorCabinet = () => {
  const {cabinetValues, update, clear} = useFoldingDorCabinet();
  const {handleGeneratePdf} = useSaveAsPdf();
  const [img, setImg] = useState(doors4);
  const pdfTemplateRef = useRef(null);

  useEffect(() => {
    console.log(cabinetValues);
    if (cabinetValues.door_count === 2) {
      setImg(doors2);
    } else if (cabinetValues.door_count === 4) {
      setImg(doors4);
    } else if (cabinetValues.shelf_count === "3") {
      setImg(shelf3);
    } else if (cabinetValues.shelf_count === "2") {
      setImg(shelf2);
    } else if (cabinetValues.shelf_count === "1") {
      setImg(shelf1);
    } else {
      setImg(doors2);
    }
  }, [cabinetValues]);

  return (
    <Container ref={pdfTemplateRef}>
      <h1>Tækjaskápur</h1>
      <Divider />
      <Grid container gap={4} pt={1} className='container'>
        <Input
          TitleText={"Viðskiptavinur"}
          size={4}
          value={cabinetValues.customer}
          valueVariable={[cabinetValues.customer, update, "customer"]}
        />
        <Input
          TitleText={"Sölumaður"}
          value={cabinetValues.seller}
          valueVariable={[cabinetValues.seller, update, "seller"]}
        />
        <Input TitleText={"Dags"} value={currentDate()} />
      </Grid>

      <Grid container gap={4} pt={4} className='container'>
        <Grid item xs={4} m={4} className='container'>
          <img src={img} alt='cabinet' />
        </Grid>

        <Grid item xs={4} gap={4}>
          <Input
            TitleText={"Breidd"}
            type='number'
            value={cabinetValues.width}
            valueVariable={[cabinetValues.width, update, "width"]}
          />
          <Input
            TitleText={"Hæð"}
            type='number'
            value={cabinetValues.height}
            valueVariable={[cabinetValues.height, update, "height"]}
          />
          <Input
            TitleText={"Dýpt"}
            type='number'
            value={cabinetValues.depth}
            valueVariable={[cabinetValues.depth, update, "depth"]}
          />
          <SelectInput
            values={[16, 19]}
            update={update}
            changeLabel='thickness'
            label='Þykkt'
            value={cabinetValues.thickness}
          />
          <Input
            TitleText={"Innmatur litur"}
            value={cabinetValues.carcase_color}
            valueVariable={[
              cabinetValues.carcase_color,
              update,
              "carcase_color",
            ]}
          />
          <Input
            TitleText={"Kantlíming litur"}
            value={cabinetValues.edge_color}
            valueVariable={[cabinetValues.edge_color, update, "edge_color"]}
          />
          <CheckBox
            TitleText={"Innmatur kemur frá Nobilia"}
            update={update}
            changeLabel='carcase_nobilia'
            value={cabinetValues.carcase_nobilia}
          />
          <CheckBox
            TitleText={"Þarf að breyta hjá GKS"}
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
          TitleText={"Hillu fjöldi"}
          size={2}
          type='number'
          value={cabinetValues.shelf_count}
          valueVariable={[cabinetValues.shelf_count, update, "shelf_count"]}
        />
        <Input
          TitleText={"Hillu litur"}
          size={3}
          value={cabinetValues.shelf_color}
          valueVariable={[cabinetValues.shelf_color, update, "shelf_color"]}
        />
        <Input
          TitleText={"Hillu dýpt"}
          size={3}
          type='number'
          value={cabinetValues.shelf_depth}
          valueVariable={[cabinetValues.shelf_depth, update, "shelf_depth"]}
        />
      </Grid>

      <Grid container gap={4} pt={2} className='container'>
        <CheckBox
          TitleText={"Ljós í hillu"}
          update={update}
          changeLabel='light_Shelf'
          value={cabinetValues.light_Shelf}
        />
        <CheckBox
          TitleText={"Hillur koma frá Nobila"}
          update={update}
          changeLabel='self_nobila'
          value={cabinetValues.self_nobila}
        />
        <CheckBox
          TitleText={"Þarf að breyta hjá GKS"}
          isDisabled={!cabinetValues.self_nobila}
          update={update}
          changeLabel='self_change_gks'
          value={cabinetValues.self_change_gks}
        />
      </Grid>

      <Grid container gap={4} mt={1} className='container'>
        <Input
          TitleText={"Athugasemd1"}
          size={8}
          pt={2}
          value={cabinetValues.Athugasemd1}
          valueVariable={[cabinetValues.Athugasemd1, update, "Athugasemd1"]}
        />
      </Grid>

      <Grid container gap={4} mt={6} className='container'>
        <SelectInput
          value={cabinetValues.door_count}
          values={[2, 4]}
          update={update}
          changeLabel='door_count'
          label='Hurða fjöldi'
          size={4}
        />
        <Input
          TitleText={"Hurða litur"}
          size={4}
          value={cabinetValues.door_color}
          valueVariable={[cabinetValues.door_color, update, "door_color"]}
        />
      </Grid>

      <Grid container gap={4} pt={2} className='container'>
        <CheckBox
          TitleText={"Hurðir koma frá Nobilia"}
          update={update}
          changeLabel='doors_nobila'
          value={cabinetValues.doors_nobila}
        />
        <CheckBox
          TitleText={"Þarf að breyta hjá GKS"}
          isDisabled={!cabinetValues.doors_nobila}
          update={update}
          changeLabel='doors_change_gks'
          value={cabinetValues.doors_change_gks}
        />
      </Grid>

      <Grid container mt={1} mb={4} className='container'>
        <Input
          TitleText={"Athugasemd2"}
          size={8}
          pt={2}
          value={cabinetValues.Athugasemd2}
          valueVariable={[cabinetValues.Athugasemd2, update, "Athugasemd2"]}
        />
      </Grid>

      <Grid container mb={8} mt={16}>
        <FoldingDoorCabinetTable
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
                currentDate(),
                pdfTemplateRef
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
