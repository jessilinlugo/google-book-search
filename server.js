var express = require("express");
var mongoose = require("mongoose");
var PORT = 3001;
var app = express();
var routes = require("./routes/APIroutes");
var path = require("path")

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

  mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/googleBooks",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );
  app.use(routes)

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
