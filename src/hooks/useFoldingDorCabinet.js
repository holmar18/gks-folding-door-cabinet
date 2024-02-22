import {useState, useRef} from "react";
import {fdcValues as values} from "../constants/constants";
// utils
import currentDate from "../utils/currentDate";
import useSaveAsPdf from "./useSaveAsPdf";

const useFoldingDorCabinet = () => {
  const [cabinet, setCabinet] = useState(values);

  const [errorText, setErrorText] = useState("");
  const [error, setError] = useState(false);
  const {handleGeneratePdf} = useSaveAsPdf();
  const pdfTemplateRef = useRef(null);

  const update = (e, type, target) => {
    e.preventDefault();
    console.log(e.targe);
    setCabinet({...cabinet, [`${type}`]: e.target[`${target}`]});
  };

  const clearInputs = () => {
    // Clear the inputs by refreshing since input values arent set as their value
    setCabinet(values);
  };

  const savePdf = () => {
    if (handleErrors()) {
      handleGeneratePdf(
        cabinet.seller,
        cabinet.customer,
        currentDate(),
        pdfTemplateRef
      );
    }
  };

  const handleErrors = () => {
    if (cabinet.seller === "") {
      setErrorText("Sölumann vantar");
      setError(true);
      return false;
    } else if (cabinet.customer === "") {
      setErrorText("Viðskiptavin vantar");
      setError(true);
      return false;
    } else if (cabinet.width === "") {
      setErrorText("Breidd vantar");
      setError(true);
      return false;
    } else if (cabinet.height === "") {
      setErrorText("Hæð vantar");
      setError(true);
      return false;
    } else if (cabinet.depth === "") {
      setErrorText("Dýpt vantar");
      setError(true);
      return false;
    } else if (cabinet.carcase_color === "") {
      setErrorText("Litur inmats vantar");
      setError(true);
      return false;
    } else if (cabinet.edge_color === "") {
      setErrorText("Litur kantlímingar vantar");
      setError(true);
      return false;
    } else if (cabinet.thickness === "") {
      setErrorText("Þykkt vantar");
      setError(true);
      return false;
    } else if (cabinet.shelf_count === "") {
      setErrorText("Hillu fjölda vantar");
      setError(true);
      return false;
    } else if (cabinet.shelf_color === "") {
      setErrorText("Hillu lit vantar");
      setError(true);
      return false;
    } else if (cabinet.shelf_depth === "") {
      setErrorText("Hillu dýpt vantar");
      setError(true);
      return false;
    } else if (cabinet.door_count === "") {
      setErrorText("Hurða fjölda vantar");
      setError(true);
      return false;
    } else if (cabinet.door_color === "") {
      setErrorText("Hurða lit vantar");
      setError(true);
      return false;
    }
    return true;
  };

  return {
    cabinetValues: cabinet,
    update: update,
    clear: clearInputs,
    errorText: errorText,
    error: error,
    setError: setError,
    savePdf: savePdf,
    pdfTemplateRef: pdfTemplateRef,
  };
};

export default useFoldingDorCabinet;
