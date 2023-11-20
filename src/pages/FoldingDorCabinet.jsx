import React from "react";
import "./FoldingDorCabinet.css";
// Components
import Input from "../components/Input";
import CheckBox from "../components/CheckBox";
import SelectInput from "../components/SelectInput";
// Material UI
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
// Images
import cabinet from "../assets/images/skapur.svg";
import TableDisplay from "../components/TableDisplay";
// Utils
import currentDate from "../utils/currentDate";
// Hooks
import useFoldingDorCabinet from "../hooks/useFoldingDorCabinet";

const FoldingDorCabinet = () => {
  const {cabinetValues, update} = useFoldingDorCabinet();

  return (
    <>
      <h1>Folding Door Cabinet</h1>
      <Divider />
      <Grid container gap={4} pt={1} className='container'>
        <Input
          TitleText={"Customer"}
          size={4}
          valueVariable={[cabinetValues.customer, update, "customer"]}
        />
        <Input
          TitleText={"Seller"}
          autoComplete={"nickname"}
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
            TitleText={"Width"}
            type='number'
            valueVariable={[cabinetValues.width, update, "width"]}
          />
          <Input
            TitleText={"Height"}
            type='number'
            valueVariable={[cabinetValues.height, update, "height"]}
          />
          <Input
            TitleText={"Depth"}
            type='number'
            valueVariable={[cabinetValues.depth, update, "depth"]}
          />
          <SelectInput
            values={[16, 19]}
            update={update}
            changeLabel='thickness'
            label='Thickness'
          />
          <Input
            TitleText={"Carcase color"}
            valueVariable={[
              cabinetValues.carcase_color,
              update,
              "carcase_color",
            ]}
          />
          <Input
            TitleText={"Edge banding color"}
            valueVariable={[cabinetValues.edge_color, update, "edge_color"]}
          />
          <CheckBox TitleText={"Carcase material from Nobilia"} />
          <CheckBox
            TitleText={"Carcase ordered in correct dimensions"}
            mt={0}
          />
        </Grid>
      </Grid>

      <Grid container gap={2} className='container'>
        <Input
          TitleText={"Shelf pieces"}
          size={2}
          valueVariable={[cabinetValues.shelf_count, update, "shelf_count"]}
        />
        <Input
          TitleText={"Shelf color"}
          size={3}
          valueVariable={[cabinetValues.shelf_color, update, "shelf_color"]}
        />
        <Input
          TitleText={"Shelf depth"}
          size={3}
          type='number'
          valueVariable={[cabinetValues.shelf_depth, update, "shelf_depth"]}
        />
      </Grid>

      <Grid container gap={4} pt={2} className='container'>
        <CheckBox TitleText={"Light on the shelf"} />
        <CheckBox TitleText={"Shelf material from Nobila"} />
        <CheckBox TitleText={"Shelves ordered in correct dimension"} />
      </Grid>

      <Grid container gap={4} mt={1} className='container'>
        <Input TitleText={"Notice"} size={8} pt={2} />
      </Grid>

      <Grid container gap={4} mt={6} className='container'>
        <SelectInput
          values={[2, 4]}
          update={update}
          changeLabel='door_count'
          label='Door pieces'
          size={4}
        />
        <Input
          TitleText={"Door color"}
          size={4}
          valueVariable={[cabinetValues.door_color, update, "door_color"]}
        />
      </Grid>

      <Grid container gap={4} pt={2} className='container'>
        <CheckBox TitleText={"Doors from Nobilia"} />
        <CheckBox TitleText={"Doors need cut in GKS"} />
        <CheckBox TitleText={"Doors ordered in correct dimension"} />
      </Grid>

      <Grid container mt={1} mb={4} className='container'>
        <Input TitleText={"Notice"} size={8} pt={2} />
      </Grid>

      <Grid container mb={8} mt={16}>
        <TableDisplay cv={cabinetValues} />
      </Grid>
    </>
  );
};

export default FoldingDorCabinet;
