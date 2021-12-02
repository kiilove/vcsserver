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

router.get("/", async (req, res) => {
  try {
    const client = await Client.find().sort({ _id: 1 });
    res.status(200).json(client);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
