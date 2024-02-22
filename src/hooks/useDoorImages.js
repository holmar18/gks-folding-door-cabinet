import {useEffect, useState} from "react";
// Images
import basic from "../assets/images/hurd/basic.png";
import breidd from "../assets/images/hurd/breidd.png";
import haed from "../assets/images/hurd/haed.png";
import veggykkt from "../assets/images/hurd/veggykkt.png";
import haegriGerreti from "../assets/images/hurd/haegriMgerreti.png";
import vinstriGerreti from "../assets/images/hurd/vinstiMgerreti.png";

const useDoorImages = ({doorValues}) => {
  const [imgBreiddFocus, setBreiddFocus] = useState(false);
  const [imgHaedFocus, setImgHaedFocus] = useState(false);
  const [imgVeggtykkt, setImgVeggTykkt] = useState(false);
  const [currImgSrc, setCurrImgSrc] = useState(basic);

  useEffect(() => {
    if (imgBreiddFocus) {
      setCurrImgSrc(breidd);
    } else if (imgHaedFocus) {
      setCurrImgSrc(haed);
    } else if (imgVeggtykkt) {
      setCurrImgSrc(veggykkt);
    } else if (doorValues?.haegri) {
      setCurrImgSrc(haegriGerreti);
    } else if (doorValues?.vinstri) {
      setCurrImgSrc(vinstriGerreti);
    } else {
      setCurrImgSrc(basic);
    }
  }, [imgBreiddFocus, imgHaedFocus, imgVeggtykkt, doorValues]);

  return {
    currImgSrc: currImgSrc,
    setBreiddFocus: setBreiddFocus,
    setImgHaedFocus: setImgHaedFocus,
    setImgVeggTykkt: setImgVeggTykkt,
  };
};

export default useDoorImages;
