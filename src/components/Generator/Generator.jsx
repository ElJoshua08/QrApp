import "./Generator.css";
import qrcode, { create } from "qrcode";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const Generator = ({ savedQRs, setSavedQRs }) => {
  const [isAcitve, setIsActive] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [lightColor, setLightColor] = useState("#ffffff");
  const [darkColor, setDarkColor] = useState("#000000");
  const [qrUrl, setQrUrl] = useState("");

  const handleSetFormActive = () => {
    const newIsActive = !isAcitve;
    setIsActive(newIsActive);
  };

  const handleInputChange = (e) => {
    const newInputValue = e.target.value;

    e.target.value = newInputValue;
    console.log(newInputValue);
    setInputValue(newInputValue);
    createQRCode();
  };

  const handleLightColorChange = (e) => {
    const newColor = e.target.value;
    setLightColor(newColor);
    createQRCode();
  };

  const handleDarkColorChange = (e) => {
    const newColor = e.target.value;
    setDarkColor(newColor);
    createQRCode();
  };

  const createQRCode = () => {
    if (!inputValue) {
      return;
    }

    qrcode.toDataURL(
      inputValue,
      {
        version: 2,
        width: 256,
        color: {
          light: lightColor,
          dark: darkColor,
        },
      },
      (err, url) => {
        if (err) throw err;
        console.log(url);
        setQrUrl(url);
      }
    );
  };

  const saveToQRsList = () => {
    if (!inputValue) {
      alert("Please enter a value to generate a QR code.");
      return;
    }

    const newQR = {
      title: inputValue,
      image: qrUrl,
    };

    setSavedQRs([...savedQRs, newQR]);
    setIsActive(false);
    setInputValue("");
  };

  return (
    <div className="generator">
      <div className={`generatorActive ${isAcitve ? "active" : ""}`}>
        <FaXmark
          onClick={handleSetFormActive}
          className="generatorButtonIcon xmarkIcon"
        />

        {/* The text input here we generate a QR code */}
        <div className="textInput">
          <label htmlFor="QRInput">
            <p>Enter QR Code Text</p>
          </label>

          <input
            onInput={handleInputChange}
            type="text"
            value={inputValue}
            id="QRInput"
            className="QRInput"
            name="QRInput"
            placeholder="Your text here"
          />
        </div>

        {/* The color picker for the light and dark color */}
        <div className="colorPicker">
          <div className="color">
            <label htmlFor="LightColor">
              <p>Light Color</p>
            </label>

            <input
              onInput={handleLightColorChange}
              type="color"
              name="lightColor"
              id="LightColor"
              className="colorInput"
              value={lightColor}
            />
          </div>

          <div className="color">
            <label htmlFor="DarkColor">
              <p>Dark Color</p>
            </label>
            <input
              onInput={handleDarkColorChange}
              type="color"
              name="darkColor"
              id="DarkColor"
              className="colorInput"
              value={darkColor}
            />
          </div>
        </div>

        {inputValue.length > 0 && (
          <div className="preview">
            <img src={qrUrl} alt="Preview" />
          </div>
        )}

        <button
          className="createQRCodeButton"
          id="CreateQRCodeButton"
          onClick={saveToQRsList}
        >
          Generate QR Code
        </button>
      </div>
      <button onClick={handleSetFormActive} className="generatorButton">
        <p>Generate QR Code</p>
        <FaPlus className="generatorButtonIcon plusIcon" />
      </button>
    </div>
  );
};

export { Generator };
