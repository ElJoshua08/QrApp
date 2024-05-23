const SavedQRList = ({ children }) => {
  return (
    <div className="savedQrList">
      <h1>Saved QR Codes</h1>
      <ul> {children} </ul>
    </div>
  );
};

export { SavedQRList };
