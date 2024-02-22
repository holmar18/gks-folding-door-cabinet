import {useEffect, useState} from "react";
// Images
import doors2 from "../assets/images/taekjaskapur/2doors.png";
import doors4 from "../assets/images/taekjaskapur/4doors.png";
import shelf1 from "../assets/images/taekjaskapur/fdc1.png";
import shelf2 from "../assets/images/taekjaskapur/fdc2.png";
import shelf3 from "../assets/images/taekjaskapur/fdc3.png";

function useFoldingDoorCabinetImage(cabinetValues) {
  const [img, setImg] = useState(doors4);

  useEffect(() => {
    if (cabinetValues.door_count === 2) {
      setImg(doors2);
    } else if (cabinetValues.door_count === 4) {
      setImg(doors4);
    } else if (cabinetValues.shelf_count === "3") {
      setImg(shelf3);
    } else if (cabinetValues.shelf_count === "2") {
      setImg(shelf2);
    } else if (cabinetValues.shelf_count === "1") {
      setImg(shelf1);
    } else {
      setImg(doors2);
    }
  }, [cabinetValues]);

  return img;
}

export default useFoldingDoorCabinetImage;
