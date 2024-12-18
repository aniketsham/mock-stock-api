const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
app.use(express.json({ limit: "30mb", extended: true }));
app.use(cors());
app.get("/api/getPrice", (req, res) => {
  const close = Number((Math.random() * (300 - 100) + 100).toFixed(2));
  const newStockData = {
    code: "AAPL.US",
    timestamp: Date.now(),
    gmtoffset: 0,
    open: 121.75,
    high: 122.23,
    low: 120.51,
    close: close,
    volume: 65672690,
    previousClose: 121.75,
    change: 0.0559,
    change_p: -1.0559,
  };

  res.status(200).json(newStockData);
});
