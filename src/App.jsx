import "./App.css";
import { useState } from "react";
import { Generator } from "./components/Generator/Generator";
import { QRsList } from "./components/QRsList/QRsList.jsx";
import { QRItem } from "./components/QRItem/QRItem.jsx";

const QRsTemplate = [
  {
    image:
      "data:image/png;base64,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",
    title: "Qr Code 1",
  },
  {
    image:
      "data:image/png;base64,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",
    title: "Qr Code 2",
  },
  {
    image: "https://i.imgur.com/q9w9h9a.png",
    title: "QR Code",
  },
];

function App() {
  const [savedQRs, setSavedQRs] = useState([]);

  return (
    <>
      <h1 className="title">QR Code App</h1>

      <QRsList>
        {savedQRs.map((qr, index) => (
          <QRItem key={index} qr={qr} />
        ))}
      </QRsList>
      <Generator savedQRs={savedQRs} setSavedQRs={setSavedQRs} />
    </>
  );
}

export default App;
