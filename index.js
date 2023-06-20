const express = requre("express");
const app = express();

app.get("/home", (req, res) => {
  res.status(200).json({
    msg: "All Ok",
  });
});
app.listen(30001, () => {
  console.log("sever Started");
});
