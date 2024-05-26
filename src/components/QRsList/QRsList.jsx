import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import "./QRsList.css";

const QRsList = ({ children }) => {
  return (
    <div className="list">
      <FaArrowUp className="listArrow arrowUp" />

      <ul className="QRsContainer"> {children} </ul>

      <FaArrowDown className="listArrow arrowDown" />
    </div>
  );
};

export { QRsList };
