import "./App.css";
import { useState } from "react";
import { Generator } from "./components/Generator/Generator";
import { SavedQRList } from "./components/SavedQRList/SavedQRList";

const QRsTemplate = [
  {
    id: 1,
    qrCode: "",
    createdAt: new Date(),
  },
  {
    id: 2,
    qrCode: "",
    createdAt: new Date(),
  },
  {
    id: 3,
    qrCode: "",
    createdAt: new Date(),
  },
];

function App() {
  const [savedQRs, setSavedQRs] = useState(QRsTemplate);

  return (
    <>
      <h1>QR Code App</h1>

      <Generator />
      <SavedQRList>
        {savedQRs.map((qr) => (
          <li key={qr.id}>{qr.qrCode}</li>
        ))}
      </SavedQRList>
    </>
  );
}

export default App;
