import "./Generator.css";
import qrcode from "qrcode";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const Generator = () => {
  const [isAcitve, setIsActive] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [lightColor, setLightColor] = useState("#ffffff");
  const [darkColor, setDarkColor] = useState("#000000");

  const handleInputChange = (e) => {
    const newInputValue = e.target.value;

    e.target.value = newInputValue;
    console.log(newInputValue);
    setInputValue(newInputValue);
  };

  const handleButtonClick = () => {
    const newIsActive = !isAcitve;
    setIsActive(newIsActive);
  };

  const handleLightColorChange = (e) => {
    const newColor = e.target.value;
    setLightColor(newColor);
  };
  

  const handleDarkColorChange = (e) => {
    const newColor = e.target.value;
    setDarkColor(newColor);
  };

  const handleCreateQRCode = () => {
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
        return url;
      }
    );
  };

  return (
    <div className="generator">
      <div className={`generatorActive ${isAcitve ? "active" : ""}`}>
        <FaXmark
          onClick={handleButtonClick}
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

        <button
          className="createQRCodeButton"
          id="CreateQRCodeButton"
          onClick={handleCreateQRCode}
        > 
          Generate QR Code
        </button>
      </div>
      <button onClick={handleButtonClick} className="generatorButton">
        <p>Generate QR Code</p>
        <FaPlus className="generatorButtonIcon plusIcon" />
      </button>
    </div>
  );
};

export { Generator };
