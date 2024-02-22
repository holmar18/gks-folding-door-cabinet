// Images
import bak from "../assets/images/taekjaskapur/bak.png";
import hillur from "../assets/images/taekjaskapur/hillur.png";
import hlidar from "../assets/images/taekjaskapur/hlidar.png";
import hurdar from "../assets/images/taekjaskapur/hurdar.png";
import toppur from "../assets/images/taekjaskapur/toppur.png";

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
      cv.door_count === 2 ? cv.width / 2 - 4 : cv.width / 4 - 4,
      "19-22",
      cv.door_count,
      cv.edge_color,
      hurdar
    ),
  ];
};

export default FdcTabelData;
