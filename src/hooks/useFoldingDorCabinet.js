import {useState} from "react";
import {fdcValues as values} from "../constants/constants";

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
