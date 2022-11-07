const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 8081;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', async (req, res) => {
  const aboutme = `{
"slackUsername": "oluwagreat",
"backend": true,
"age": 30,
"bio": "I'm Babalola Oluwatobi. I'm a Backend Engineer. I enjoy solving complex problems by developing robust (web) applications & services and APIs."
}`;
  
  res.send(aboutme);
});


app.post("/maths", function (req, res) {
//  console.log(req.body);
 // res.json(req.body);

let operation_type = req.body.operation_type;
let x = parseInt(req.body.x);
let y = parseInt(req.body.y);
let answer = 0;

if (operation_type === 'addition' ) {
    answer = x + y;
}
if (operation_type === 'subtraction') {
   answer = x - y;
}
if (operation_type === 'multiplication') {
   answer = x * y;
}

let finalResponse = {
  slackUsername: "oluwagreat", "operation_type" : operation_type, "result": answer 
}

finalResponse = JSON.stringify(finalResponse);

res.send(finalResponse);





});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
