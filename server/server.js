const path = require("path");
const express = require("express");

const app = express();

const applicationRouter = require("./routes/applications");

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route Handlers
app.use("/application", applicationRouter);

//components
app.use('/login', (req, res)=>{
  res.send({
    token: 'test123'
  })
})






//Default Error Handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 400,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

if (process.env.NODE_ENV === "production") {
  // statically serve everything in the build folder on the route '/build'
  app.use("/build", express.static(path.join(__dirname, "../build")));
  // serve index.html on the route '/'
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../index.html"));
  });
}

// Catch-all to unknown routes (404)
app.use((req, res) => res.sendStatus(404));

//Start Server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
