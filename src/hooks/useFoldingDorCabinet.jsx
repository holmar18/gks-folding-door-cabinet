import {useState, useEffect} from "react";

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
    self_nobila: false,
    doors_nobila: false,
  });

  useEffect(() => {
    console.log(cabinet);
  }, [cabinet]);

  const update = (e, type) => {
    e.preventDefault();
    console.log(e.targe);
    setCabinet({...cabinet, [`${type}`]: e.target.value});
  };

  return {
    cabinetValues: cabinet,
    update: update,
  };
};

export default useFoldingDorCabinet;
