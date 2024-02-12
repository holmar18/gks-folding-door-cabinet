import {useState} from "react";

const useFoldingDorCabinet = () => {
  const [cabinet, setCabinet] = useState({
    width: 0,
    height: 0,
    depth: 0,
    carcase_color: "",
    edge_color: "",
    self_color: "",
    door_color: "",
    shelf_count: 0,
    shelf_depth: 0,
    door_count: 0,
    thickness: 0,
    customer: "",
    seller: "",
    carcase_nobilia: false,
    carcase_change_gks: false,
    self_nobila: false,
    self_change_gks: false,
    doors_nobila: false,
    doors_change_gks: false,
    light_Shelf: false,
  });

  const update = (e, type, target) => {
    e.preventDefault();
    setCabinet({...cabinet, [`${type}`]: e.target[`${target}`]});
  };

  const clearInputs = () => {
    // Clear the inputs by refreshing since input values arent set as their value
    window.location.reload(false);
  };

  return {
    cabinetValues: cabinet,
    update: update,
    clear: clearInputs,
  };
};

export default useFoldingDorCabinet;
