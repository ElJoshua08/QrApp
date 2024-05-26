const QRItem = ({ qr }) => {
  return (
    <div className="qrItem">
      <img src={qr.image} alt="QR Code" />
      <h1>{qr.title}</h1>
      <p>{qr.date</p>
    </div>
  );
};

export { QRItem };