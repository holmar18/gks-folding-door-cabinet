import {useState} from "react";
import {doorValues as values} from "../constants/constants";

const useDoor = () => {
  const [cabinet, setCabinet] = useState(values);
  const [allDoors, setAllDoors] = useState([]);

  const [errorText, setErrorText] = useState("");
  const [error, setError] = useState(false);

  const update = (e, type, target) => {
    e.preventDefault();
    setCabinet({...cabinet, [`${type}`]: e.target[`${target}`]});
  };

  const saveDoor = () => {
    if (handleErrors()) {
      const newCabinet = {...cabinet, id: allDoors.length};
      setAllDoors([...allDoors, newCabinet]);
      clear();
    }
  };

  const clear = () => {
    let lastDoor = allDoors[allDoors.length - 1];
    setCabinet({
      ...values,
      ...lastDoor.verk_nr,
      ...lastDoor.customer,
      ...lastDoor.seller,
    });
  };

  const getDoorFromList = (id) => {
    var door = allDoors.find((hurd) => hurd.id === id);
    setCabinet(door);

    var allOtherDoors = allDoors.filter((hurdar) => hurdar.id !== id);
    setAllDoors([...allOtherDoors]);
  };

  const handleErrors = () => {
    if (!cabinet.vinstri && !cabinet.haegri) {
      setErrorText("Vinstri eða Hægri verður að vera valið");
      setError(true);
      return false;
    } else if (cabinet.nafn_hurdar === "") {
      setErrorText("Nafn hurðar vantar");
      setError(true);
      return false;
    } else if (cabinet.height === "") {
      setErrorText("Lengd hurðar vantar");
      setError(true);
      return false;
    } else if (cabinet.width === "") {
      setErrorText("Breidd hurðar vantar");
      setError(true);
      return false;
    } else if (cabinet.vegg_tykkt === "") {
      setErrorText("Veggþykkt vantar");
      setError(true);
      return false;
    } else if (cabinet.tegund === "") {
      setErrorText("Tegund vantar");
      setError(true);
      return false;
    } else if (cabinet.efni_hurd === "") {
      setErrorText("Efni hurðar vantar");
      setError(true);
      return false;
    } else if (cabinet.efni_karmur === "") {
      setErrorText("Efni karms vantar");
      setError(true);
      return false;
    } else if (cabinet.kantliming_hurd === "") {
      setErrorText("Kantlíming hurðar vantar");
      setError(true);
      return false;
    } else if (cabinet.kantliming_karmur === "") {
      setErrorText("Kantlíming karms vantar");
      setError(true);
      return false;
    } else if (cabinet.lamir === "") {
      setErrorText("Lamir vantar");
      setError(true);
      return false;
    } else if (cabinet.skra === "") {
      setErrorText("Skrá vantar");
      setError(true);
      return false;
    } else if (cabinet.slaglisti === "") {
      setErrorText("Slaglisti vantar");
      setError(true);
      return false;
    }

    return true;
  };

  return {
    doorValues: cabinet,
    update: update,
    saveDoor: saveDoor,
    clear: clear,
    allDoors: allDoors,
    getDoorFromList: getDoorFromList,
    errorText: errorText,
    error: error,
    setError: setError,
  };
};

export default useDoor;
