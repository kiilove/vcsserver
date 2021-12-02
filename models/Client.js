const mongoose = require("mongoose");

const MemoSchema = new mongoose.Schema(
  {
    context: String,
    require: false,
  },
  { timestamps: true }
);

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
    clientStatus: {
      type: String,
      required: false,
      default: "active",
    },
    clientMemo: [MemoSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Client", ClientSchema);
