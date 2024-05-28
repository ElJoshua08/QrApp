import { FaClone, FaDownload } from "react-icons/fa";
import "./QRItem.css";

const QRItem = ({ qr }) => {


  const handleDownload = () => {
    let link = document.createElement("a");
    link.href = qr.image;
    link.download = qr.title;
    link.click();
  };

  return (
    <div className="qrItem">
      <div className="qrImageContainer">
        <img className="qrImage" src={qr.image} alt="QR Code" />
      </div>

      <div className="qrData">
        <h1>{qr.title}</h1>

        <div className="buttons">
          <FaClone className="button" />
          <FaDownload onClick={handleDownload} className="button" />
        </div>
      </div>
    </div>
  );
};

export { QRItem };
