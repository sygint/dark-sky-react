require("dotenv").config();

const express = require("express");
const Axios = require("axios");
const cors = require("cors");

const app = express();
const { PORT, API_KEY } = process.env;
const corsOptions = {
  origin: "http://localhost:3000"
};

const darkSky = Axios.create({
  baseURL: "https://api.darksky.net/"
});

app.use(cors(corsOptions));

app.get("/weather/:coords", async (req, res) => {
  const { coords } = req.params;

  try {
    const response = await darkSky.get(`/forecast/${API_KEY}/${coords}`);
    const weatherDetails = response.data;

    res.json(weatherDetails);
  } catch (err) {
    res.json({
      ok: false,
      error: err
    });
  }
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
