import "./QRsList.css"

const QRsList = ({ children }) => {
  return (
    <div className="listContainer">
      <h1>Saved QR Codes</h1>
      <ul> {children} </ul>
    </div>
  );
};

export { QRsList };
