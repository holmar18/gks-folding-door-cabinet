// Pages
import FoldingDorCabinet from "../pages/FoldingDorCabinet";
import Doors from "../pages/Doors";
// Images
import coverImg from "../assets/cover.webp";

const Routing = ({route}) => {
  if (route === "") {
    return (
      <>
        <img
          src={coverImg}
          alt='cover-img'
          style={{
            width: "950px",
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
