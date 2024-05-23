const QRItem = ({ children }) => {
  return (
    <div className="qrItem">
      <h1>QR Code</h1>
      <ul> {children} </ul>
    </div>
  );
};

export { QRItem };