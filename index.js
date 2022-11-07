const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 8081;

app.get('/', async (req, res) => {
  const aboutme = `{
"slackUsername": "oluwagreat",
"backend": true,
"age": 30,
"bio": "I'm Babalola Oluwatobi. I'm a Backend Engineer. I enjoy solving complex problems by developing robust (web) applications & services and APIs."
}`;
  
  res.send(aboutme);
});


//app.use(express.json()); // for parsing application/json
//app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.post("/maths", function (req, res) {
  console.log(req.body);
  res.json(req.body);
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
