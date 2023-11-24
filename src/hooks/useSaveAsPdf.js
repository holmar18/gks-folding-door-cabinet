import {useRef} from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const useSaveAsPdf = () => {
  const pdfTemplateRef = useRef(null);

  const handleGeneratePdf = () => {
    const doc = new jsPDF({
      format: "a4",
      unit: "px",
    });

    doc.html(pdfTemplateRef.current, {
      async callback(doc) {
        await doc.save("document");
      },
    });
  };

  const handleCanvasPdf = () => {
    html2canvas(pdfTemplateRef.current).then((canvas) => {
      const imageData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4", true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 10;
      pdf.addImage(
        imageData,
        "JPG",
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );
      pdf.save("document.pdf");
    });
  };

  return {
    pdfTemplateRef: pdfTemplateRef,
    handleGeneratePdf: handleCanvasPdf,
  };
};

export default useSaveAsPdf;
