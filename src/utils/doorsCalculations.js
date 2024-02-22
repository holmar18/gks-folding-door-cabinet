const p = (n) => {
  return parseInt(n);
};

const lengdHurd = (data) => {
  return (
    p(data.height) -
    data.karmþykkt -
    3 -
    data.bil_vid_golf -
    data.rymi_utan_karms
  );
};

const karmur_yfir_hlid_tegund = (data) => {
  if (data.tegund === "33RH - E30") {
    return "sp+kr+sp";
  } else if (data.tegund === "42VL - E60") {
    return "Límtré";
  } else {
    return "Spónaplata";
  }
};

const hurdÞ_Tegund = (data) => {
  switch (data.tegund) {
    case "33RT8 - Venjuleg":
      return 41;
    case "33VL - Glerhurð":
      return 41;
    case "33RH - E30":
      return 41;
    case "42VL - E60":
      return 54;
    case "38S3K - Hljóðeinangrun":
      return 44;
    case "33S2K - 38 DB":
      return 41;
    case "Eurolight - Rennihurð":
      return 41;
    default:
      return 0;
  }
};

const breiddHurd = (data) => {
  return p(data.width) - data.karmþykkt * 2 - 2 * 3 - 2 * data.rymi_utan_karms;
};

const karmurYfir = (data) => {
  return p(data.width) - 2 * data.karmþykkt - 2 * data.rymi_utan_karms;
};

const slaglistB = (data) => {
  return data.vegg_tykkt - hurdÞ_Tegund(data) - 6;
};

export {
  slaglistB,
  karmurYfir,
  breiddHurd,
  hurdÞ_Tegund,
  karmur_yfir_hlid_tegund,
  lengdHurd,
  p,
};
