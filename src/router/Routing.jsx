// Pages
import FoldingDorCabinet from "../pages/FoldingDorCabinet";
import Doors from "../pages/Doors";
// Images
import coverImg from "../assets/gks-svg.svg";

const Routing = ({route}) => {
  if (route === "") {
    return (
      <>
        <img
          className="pulse"
          src={coverImg}
          alt='cover-img'
          style={{
            alignSelf: "center",
            width: "800px",
            opacity: 0.5,
            borderTopLeftRadius: "1rem",
            borderTopRightRadius: "4rem",
            borderBottomLeftRadius: "4rem",
            borderBottomRightRadius: "1rem",
          }}
        />
      </>
    );
  } else if (route === "fdc") {
    return <FoldingDorCabinet />;
  } else if (route === "doors") {
    return <Doors />;
  }
};

export default Routing;
