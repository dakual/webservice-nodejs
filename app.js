const express = require('express');
const app  = express();
const port = 8080;

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname}); 
});

app.get('/api', (req, res) => {
  var uuid = Date.now().toString(36);
  var date = new Date().toISOString();
  var retv = { 'id':uuid, 'msg':'Hello Node js! This is Node JS rest api!', 'time':date };
  res.json(retv);
});

app.listen(port, () => {
    console.log(`Now listening on port ${port}`); 
});