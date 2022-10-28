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
//   const username = req.query.username || 'oluwagreat';
//   try {
//     const result = await axios.get(
//       `https://api.github.com/users/${username}/repos`
//     );
//     const repos = result.data
//       .map((repo) => ({
//         name: repo.name,
//         url: repo.html_url,
//         description: repo.description,
//         stars: repo.stargazers_count
//       }))
//       .sort((a, b) => b.stars - a.stars);

//     res.send(repos);
//   } catch (error) {
//     res.status(400).send('Error while getting list of repositories');
//   }
  
  res.send(aboutme);
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
