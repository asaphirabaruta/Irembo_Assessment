const express = require("express");
const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
    res.send('Welcome to Irembo Service Endpoint');
  });

app.listen(PORT, ()=>{
    console.log("service backend listening on port", PORT);
})