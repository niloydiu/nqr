const QR = ({ text }) => {
  return (
    <div>
      <img
        src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`}
        alt=""
      />
    </div>
  );
};

export default QR;
