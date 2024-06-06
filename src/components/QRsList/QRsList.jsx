import "./QRsList.css";
import { useState, useRef, useEffect } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const QRsList = ({ children }) => {
  const [index, setIndex] = useState(0);
  const refs = useRef([]);

  useEffect(() => {
    // Asegúrate de que las referencias se actualicen cuando cambien los children
    refs.current = refs.current.slice(0, children.length);
  }, [children]);

  const setIndexToNext = () => {
    let newIndex = index + 1;
    if (newIndex >= children.length) {
      newIndex = 0;
    }
    setIndexIntoView(newIndex);
    setIndex(newIndex);
  };

  const setIndexToPrev = () => {
    let newIndex = index - 1;
    if (newIndex < 0) {
      newIndex = children.length - 1;
    }
    setIndexIntoView(newIndex);
    setIndex(newIndex);
  };

  const setIndexIntoView = (index) => {
    refs.current[index]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="list">
      <FaArrowUp onClick={setIndexToPrev} className="listArrow arrowUp" />
      <ul className="QRsContainer">
        {children.map((child, i) => (
          <li key={i} ref={el => refs.current[i] = el}>
            {child}
          </li>
        ))}
      </ul>
      <FaArrowDown onClick={setIndexToNext} className="listArrow arrowDown" />
    </div>
  );
};

export { QRsList };
