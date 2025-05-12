// Images
import bak from "../assets/images/taekjaskapur/bak.png";
import hillur from "../assets/images/taekjaskapur/hillur.png";
import hlidar from "../assets/images/taekjaskapur/hlidar.png";
import hurdar from "../assets/images/taekjaskapur/hurdar.png";
import toppur from "../assets/images/taekjaskapur/toppur.png";


/**
 * Creates a data object for cabinet components
 * @param {string} hlutur - Component name
 * @param {string} efni - Material
 * @param {number} l - Length
 * @param {number} b - Width
 * @param {number|string} þ - Thickness
 * @param {number} magn - Quantity
 * @param {string} efni_kant - Edge material
 * @param {string} kantliming - Edge image
 * @returns {Object} Component data object
 */
function createComponentData(hlutur, efni, l, b, þ, magn, efni_kant, kantliming, vorunumer = "") {
  return {hlutur, efni, l, b, þ, magn, efni_kant, kantliming, vorunumer};
}


/**
 * Generates cabinet component data based on cabinet specifications
 * @param {Object} cv - Cabinet specifications object
 * @returns {Array} Array of component data objects
 */
const FdcTabelData = (cv) => {
  let baseComponents  = [
    createComponentData(
      "Hliðar",
      cv.carcase_color,
      cv.height,
      cv.depth,
      cv.thickness,
      2,
      cv.edge_color,
      hlidar,
      cv.hlid_vorunumer
    ),
    createComponentData(
      "Toppur",
      cv.carcase_color,
      cv.width - cv.thickness * 2,
      cv.depth - cv.thickness - 2,
      cv.thickness,
      1,
      cv.edge_color,
      toppur,
      cv.toppur_vorunumer
    ),
    createComponentData(
      "Bak",
      cv.carcase_color,
      cv.height,
      cv.width - cv.thickness * 2,
      cv.thickness,
      1,
      cv.edge_color,
      bak,
      cv.bak_vorunumer
    ),
    createComponentData(
      "Hillur",
      cv.shelf_color,
      cv.width - cv.thickness * 2,
      cv.shelf_depth,
      "25-32",
      cv.shelf_count,
      cv.edge_color,
      hillur,
      cv.hilla_vorunumer
    ),
  ]

  if(cv.door_count !== 0) {
    var door = 
      createComponentData(
        "Hurðar",
        cv.door_color,
        cv.height - 5,
        cv.door_count === 2 ? cv.width / 2 - 4 : cv.width / 4 - 4,
        "19-22",
        cv.door_count,
        cv.edge_color,
        hurdar,
        cv.hurd_vorunumer
      )

      baseComponents.push(door);
  }

  return baseComponents ;
};


export default FdcTabelData;
