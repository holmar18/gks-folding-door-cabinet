import {useState} from "react";

const values = {
  width: "",
  height: "",
  depth: "",
  carcase_color: "",
  edge_color: "",
  shelf_color: "",
  door_color: "",
  shelf_count: "",
  shelf_depth: "",
  door_count: "",
  thickness: "",
  customer: "",
  seller: "",
  carcase_nobilia: false,
  carcase_change_gks: false,
  self_nobila: false,
  self_change_gks: false,
  doors_nobila: false,
  doors_change_gks: false,
  light_Shelf: false,
  Athugasemd1: "",
  Athugasemd2: "",
};

const useFoldingDorCabinet = () => {
  const [cabinet, setCabinet] = useState(values);

  const update = (e, type, target) => {
    e.preventDefault();
    console.log(e.targe);
    setCabinet({...cabinet, [`${type}`]: e.target[`${target}`]});
  };

  const clearInputs = () => {
    // Clear the inputs by refreshing since input values arent set as their value
    setCabinet(values);
  };

  return {
    cabinetValues: cabinet,
    update: update,
    clear: clearInputs,
  };
};

export default useFoldingDorCabinet;
