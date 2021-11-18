const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema(
  {
    clientNumber: {
      type: String,
      required: false,
    },
    clientFromProject: {
      type: String,
      required: false,
    },
    clientObject: {
      type: Object,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Client", ClientSchema);
