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
          <h1>Create your first QR!</h1>
        </div>
      )}
      <Generator savedQRs={savedQRs} setSavedQRs={setSavedQRs} />
    </>
  );
}

export default App;
