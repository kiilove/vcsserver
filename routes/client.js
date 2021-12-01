const router = require("express").Router();
const Client = require("../models/Client");

//등록
router.post("/register/excel", async (req, res) => {
  // console.log(req.body);
  // res.status(200);

  const clientObject = req.body;
  //console.log(Object.values(clientObject));

  try {
    const savedClient = await Client.insertMany(clientObject);
    res.status(201).json(savedClient);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
