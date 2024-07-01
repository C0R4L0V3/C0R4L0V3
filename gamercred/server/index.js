// server/index.js

const express = require("express");

const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.get("/api", (req, res)=> {
    res.json({message: "Hello from server!"})
});

app.get('/api/getList', (req,res) => {
  var list = ["item1", "item2", "item3"];
  res.json(list);
  console.log('Sent list of items');
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+/../+'client/src/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});