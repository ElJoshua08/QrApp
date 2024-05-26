import { FaClone, FaDownload } from "react-icons/fa";
import "./QRItem.css";

const QRItem = ({ qr }) => {
  return (
    <div className="qrItem">
      <img src={qr.image} alt="QR Code" />
      <h1>{qr.title}</h1>

      <div className="buttons">
        <FaClone />
        <FaDownload />
      </div>
    </div>
  );
};

export { QRItem };