import qrcode from "qrcode";
import { useState } from "react";

const Generator = () => {
  const [inputValue, setInputValue] = useState("");
  const [lightColor, setLightColor] = useState("#ffffff");
  const [darkColor, setDarkColor] = useState("#000000");

  const handleInputChange = (e) => {
    const newInputValue = e.target.value;

    e.target.value = newInputValue;
    console.log(newInputValue);
    setInputValue(newInputValue);
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
    qrcode.toDataURL(inputValue, {
      version: 2,
      width: 256,
      color: {
        light: lightColor,
        dark: darkColor,
      },
    },  (err, url) => {
      if (err) throw err;
      console.log(url);
      return url;
    });
  };

  return (
    <div className="generator">
      <input
        onInput={handleInputChange}
        type="text"
        placeholder="Enter QR Code Text"
      />

      <input onInput={handleLightColorChange} type="color" name="lightColor" id="LightColor" value={lightColor} />
      <input onInput={handleDarkColorChange} type="color" name="darkColor" id="DarkColor" value={darkColor} />

      <button onClick={handleCreateQRCode}>Generate QR Code</button>
    </div>
  );
};

export { Generator };
