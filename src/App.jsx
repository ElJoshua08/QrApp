import "./App.css";
import { useState } from "react";
import { Generator } from "./components/Generator/Generator";
import { QRsList } from "./components/QRsList/QRsList.jsx";
import { QRItem } from "./components/QRItem/QRItem.jsx";

function App() {
  const [savedQRs, setSavedQRs] = useState(() => {
    let qrs = localStorage.getItem("qrs_v1");

    if (qrs) {
      return JSON.parse(qrs);
    }

    return [];
  });

  return (
    <>
      <h1 className="title">Qreate</h1>

      {savedQRs.length > 0 ? (
        <QRsList>
          {savedQRs.map((qr, index) => (
            <QRItem key={index} qr={qr} />
          ))}
        </QRsList>
      ) : (
        <div className="textContainer">
          <h1>
            <strong>Qreate </strong>your first
          </h1>
          <img src="/qrIcon.svg" alt="QR Code" />
        </div>
      )}

      <h6 className="author">
        Made with <strong>love</strong> by{" "}
        <a target="_blank" href="https://github.com/ElJoshua08">
          Joshua
        </a>
      </h6>
      <Generator savedQRs={savedQRs} setSavedQRs={setSavedQRs} />
    </>
  );
}

export default App;
