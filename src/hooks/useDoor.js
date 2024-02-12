import {useState} from "react";

const useDoor = () => {
  const [cabinet, setCabinet] = useState({
    width: 0,
    height: 0,
    vegg_tykkt: 0,
    tykkt: 0,
    gluggi: false,
    customer: "",
    seller: "",
    tegund: "",
    athugasemd: "",
    annad: "",
    lamir: "",
    skra: "",
    slaglisti: "",
    parket: "",
    flisar: "",
    felli_throskuldur: false,
    throskuldur: false,
    gerreti: false,
    vinstri: false,
    haegri: false,
    verk_nr: "",
    nafn_hurdar: "",
  });

  const update = (e, type, target) => {
    e.preventDefault();
    setCabinet({...cabinet, [`${type}`]: e.target[`${target}`]});
  };

  return {
    cabinetValues: cabinet,
    update: update,
  };
};

export default useDoor;
