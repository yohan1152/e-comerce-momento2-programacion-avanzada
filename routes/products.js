const express = require("express");
const router = express.Router();
//const products = require('../utils/mocks/products');

router.get("/", function(req, res) {
  res.render("products", { products });
});

const products =[
  {
      name: "Mountain bike",
      price: 500,
      image: "/static/images/Mountainbike.jpg"
  },
  {
      name: "Bluetooh Spekaer",
      price: 120,
      image: "/static/images/BluetoohSpeaker.jpg"
  },
  {
      name: "Mountain Boots",
      price: 500,
      image: "/static/images/MountainBoots.jpg"
  },
  {
      name: "Pc Gaming",
      price: 18000,
      image: "/static/images/PcGaming.jpg"
  },
  {
      name: "Smart Watch",
      price: 1200,
      image: "/static/images/SmartWatch.jpg"
  },
  {
      name: "Lantern Camping",
      price: 12,
      image: "/static/images/LanternCamping.jpeg"
  }
]

module.exports = router;