import express from 'express';
import qrcode from 'qrcode';

const port = process.env.PORT || 3000;

const app = express();

app.listen(port, () => {
  console.log(`listening on port ${port}`)
});
