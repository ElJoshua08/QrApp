import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import "./QRsList.css";

const QRsList = ({ children }) => {
  console.log(children);

  return (
    <div className="list">
      <FaArrowUp className="listArrow arrowUp" />

      <div className="QRsContainer">
        <ul> {children} </ul>
      </div>

      <FaArrowDown className="listArrow arrowDown" />
    </div>
  );
};

export { QRsList };
