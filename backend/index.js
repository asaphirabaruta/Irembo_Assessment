const express = require("express");
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Irembo Service Endpoint');
  });

app.get('/api/service', (req, res) => {
  res.send('Welcome to Irembo Service Endpoint');
});

app.post('/api/service', (req, res) => {
  const formData = req.body;
  console.log('Received form data:', formData);
  // res.send(formData);
  res.status(200).send('Form data received successfully!');
});

app.listen(PORT, ()=>{
    console.log("service backend listening on port", PORT);
})