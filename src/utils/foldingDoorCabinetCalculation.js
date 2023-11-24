// Images
import hlidar from "../assets/images/hlidar.png";
import bak from "../assets/images/bak.png";
import hillur from "../assets/images/hillur.png";
import hurdar from "../assets/images/hurdar.png";
import toppur from "../assets/images/toppur.png";

function createData(hlutur, efni, l, b, þ, magn, efni_kant, kantliming) {
  return {hlutur, efni, l, b, þ, magn, efni_kant, kantliming};
}

const FdcTabelData = (cv) => {
  return [
    createData(
      "Hliðar",
      cv.carcase_color,
      cv.height,
      cv.depth,
      cv.thickness,
      2,
      cv.edge_color,
      hlidar
    ),
    createData(
      "Toppur",
      cv.carcase_color,
      cv.width - cv.thickness * 2,
      cv.depth - cv.thickness - 2,
      cv.thickness,
      1,
      cv.edge_color,
      toppur
    ),
    createData(
      "Bak",
      cv.carcase_color,
      cv.height,
      cv.width - cv.thickness * 2,
      cv.thickness,
      1,
      cv.edge_color,
      bak
    ),
    createData(
      "Hillur",
      cv.shelf_color,
      cv.width - cv.thickness * 2,
      cv.shelf_depth,
      "25-32",
      cv.shelf_count,
      cv.edge_color,
      hillur
    ),
    createData(
      "Hurðar",
      cv.door_color,
      cv.height - 5,
      cv.door_count === 2 ? cv.width / 2 - 8 : cv.width / 4 - 16,
      "19-22",
      cv.door_count,
      cv.edge_color,
      hurdar
    ),
  ];
};

export default FdcTabelData;
