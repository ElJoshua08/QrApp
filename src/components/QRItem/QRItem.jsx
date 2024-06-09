import { FaClone, FaDownload } from "react-icons/fa";
import "./QRItem.css";

const QRItem = ({ qr }) => {


  const handleDownload = () => {
    let link = document.createElement("a");
    link.href = qr.image;
    link.download = qr.title;
    link.click();
  };

  const handleCopy = () => {
    fetch(qr.image)
      .then((res) => res.blob())
      .then((blob) => {
        const item = new ClipboardItem({ 'image/png': blob });
        navigator.clipboard.write([item]).then(
          function () {
            console.log('Imagen copiada al portapapeles');
          },
          function (err) {
            console.error('Error al copiar la imagen: ', err);
          }
        );
      });
  };

  return (
    <div className="qrItem">
      <div className="qrImageContainer">
        <img className="qrImage" src={qr.image} alt="QR Code" />
      </div>

      <div className="qrData">
        <h1>{qr.title}</h1>

        <div className="buttons">
          <FaClone onClick={handleCopy} className="button" />
          <FaDownload onClick={handleDownload} className="button" />
        </div>
      </div>
    </div>
  );
};

export { QRItem };
