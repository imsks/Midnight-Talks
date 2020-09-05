
exports.testingAPI = (req, res) => {
  // const io = require("../socket").getIO;
  var io = req.app.get('socketio');
  io.emit("tests", "working");
  
  res.status(200).json({
    success: "Success",
  });
};
