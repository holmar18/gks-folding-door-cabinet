import {useState, useRef} from "react";
import {fdcValues as values} from "../constants/constants";
// utils
import currentDate from "../utils/currentDate";
import useSaveAsPdf from "./useSaveAsPdf";
import { useTranslationContext } from "../context/TranslationContext";

const useFoldingDorCabinet = () => {
  const [cabinet, setCabinet] = useState(values);

  const [errorText, setErrorText] = useState("");
  const [error, setError] = useState(false);
  const {handleGeneratePdf} = useSaveAsPdf();
  const pdfTemplateRef = useRef(null);
  const pdfSecondTemplateRef = useRef(null);
  const {translations} =
    useTranslationContext();

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
      return true;
    }
    return false;
  };

  const saveSecondPdf = () => {
    handleGeneratePdf(
      cabinet.seller,
      cabinet.customer,
      currentDate(),
      pdfSecondTemplateRef
    );
  };

  const handleErrors = () => {
    if (cabinet.seller === "") {
      setErrorText(translations.error_missing_salesperson);
      setError(true);
      return false;
    } else if (cabinet.customer === "") {
      setErrorText(translations.error_missing_customer);
      setError(true);
      return false;
    } else if (cabinet.width === "") {
      setErrorText(translations.error_missing_width);
      setError(true);
      return false;
    } else if (cabinet.height === "") {
      setErrorText(translations.error_missing_height);
      setError(true);
      return false;
    } else if (cabinet.depth === "") {
      setErrorText(translations.error_missing_dept);
      setError(true);
      return false;
    } else if (cabinet.carcase_color === "") {
      setErrorText(translations.error_missing_carcase_color);
      setError(true);
      return false;
    } else if (cabinet.edge_color === "") {
      setErrorText(translations.error_missing_edge_color);
      setError(true);
      return false;
    } else if (cabinet.thickness === "") {
      setErrorText(translations.error_missing_thickness);
      setError(true);
      return false;
    } else if (cabinet.shelf_count === "") {
      setErrorText(translations.error_missing_shelf_count);
      setError(true);
      return false;
    } else if (cabinet.shelf_color === "") {
      setErrorText(translations.error_missing_shelf_color);
      setError(true);
      return false;
    } else if (cabinet.shelf_depth === "") {
      setErrorText(translations.error_missing_shelf_depth);
      setError(true);
      return false;
    } else if (cabinet.door_count === "") {
      setErrorText(translations.error_missing_door_count);
      setError(true);
      return false;
    } else if (cabinet.door_color === "" && !cabinet.door_count === "0") {
      setErrorText(translations.error_missing_door_color);
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
    pdfSecondTemplateRef: pdfSecondTemplateRef,
    saveSecondPdf: saveSecondPdf
  };
};

export default useFoldingDorCabinet;
