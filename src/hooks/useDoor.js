import {useState} from "react";
import {doorValues as values} from "../constants/constants";

const useDoor = () => {
  const [cabinet, setCabinet] = useState(values);
  const [allDoors, setAllDoors] = useState([]);

  const update = (e, type, target) => {
    e.preventDefault();
    setCabinet({...cabinet, [`${type}`]: e.target[`${target}`]});
  };

  const saveDoor = () => {
    const newCabinet = {...cabinet, id: allDoors.length};
    setAllDoors([...allDoors, newCabinet]);
    clear();
  };

  const clear = () => {
    setCabinet({...values});
  };

  const getDoorFromList = (id) => {
    var door = allDoors.find((hurd) => hurd.id === id);
    setCabinet(door);

    var allOtherDoors = allDoors.filter((hurdar) => hurdar.id !== id);
    setAllDoors([...allOtherDoors]);
  };

  return {
    doorValues: cabinet,
    update: update,
    saveDoor: saveDoor,
    clear: clear,
    allDoors: allDoors,
    getDoorFromList: getDoorFromList,
  };
};

export default useDoor;
