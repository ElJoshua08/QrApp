import { FaClone, FaDownload } from "react-icons/fa";
import "./QRItem.css";

const QRItem = ({ qr }) => {
  return (
    <div className="qrItem">
      <div className="qrImageContainer">
        <img className="qrImage" src={qr.image} alt="QR Code" />
      </div>

      <div className="qrData">
        <h1>{qr.title}</h1>

        <div className="buttons">
          <FaClone className="button" />
          <FaDownload className="button" />
        </div>
      </div>
    </div>
  );
};

export { QRItem };
