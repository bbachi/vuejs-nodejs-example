const express = require('express');
const randomId = require('random-id');
const app = express(),
      bodyParser = require("body-parser");
      port = 3070;
let count=0;
// place holder for the data
const users = [
  {
    id: "1",
    firstName: "first1",
    lastName: "last1",
    email: "abc@gmail.com"
  },
  {
    id: "2",
    firstName: "first2",
    lastName: "last2",
    email: "abc@gmail.com"
  },
  {
    id: "3",
    firstName: "first3",
    lastName: "last3",
    email: "abc@gmail.com"
  }
];

app.use(bodyParser.json());
app.use(express.static(process.cwd() + '/my-app/dist'));

app.get('/api/users', (req, res) => {
  console.log('api/users called!!!!!!!')
  res.json(users);
});

app.post('/api/user', (req, res) => {
  // if(count<10){                                                   // limiting number of users to the server
  const user = req.body.user;
  console.log(req.body);
  console.log('Adding user:::::', user);
  users.push(user);
  res.json("user addedd");
  count+=1;
  
// }else{
//   console.log("Maximum number of accounts created!!")
// }
});

app.delete('/api/users',(req,res)=>{
  if(users.length==0){
    res.json("User list is empty, no more deletions possible!")
  }
  else{
  users.pop()
  res.json("user deleted")
  }
})

app.get('/', (req,res) => {
  res.sendFile(process.cwd() + '/my-app/dist/index.html');
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});