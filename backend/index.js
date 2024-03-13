const express = require("express");
const cors = require('cors');
const nodemailer = require('nodemailer');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

var email;
const EMAIL_SENDER = 'asaphirabaruta2@gmail.com'

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL_SENDER,
    pass: 'xhsw wjmi fxkv gczy'
  }
});




app.get('/', (req, res) => {
    res.send('Irembo Service Endpoint');
  });

app.get('/api/service', (req, res) => {
  res.send('Welcome to Irembo Service Endpoint');
});

app.post('/api/service', (req, res) => {
  const formData = req.body;
  console.log('Received form data:', formData);
  res.status(200).send('Form data received successfully!');

  email = formData.email;
  // Sending data on email
  console.log("Sending email to:", email);

  var mailOptions = {
    from: 'youremail@gmail.com',
    to: email,
    subject: 'Business Registration',
    text: formData
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }});

});

app.listen(PORT, ()=>{
    console.log("service backend listening on port", PORT);
})