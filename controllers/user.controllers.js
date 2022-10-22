const fs = require("fs");

let users = [
  {
      "id":1,
      "gender":"mele",
      "name":"shahed",
      "contact":473388,
      "adress":"Bangladesh, chittagong",
      "photoUrl":"https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?cs=srgb&dl=pexels-philippe-donn-1133957.jpg&fm=jpg"
  
  },
  {
      "id":2,
      "gender":"mele",
      "name":"Razu",
      "contact":473388,
      "adress":"Bangladesh, chittagong",
      "photoUrl":"https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?cs=srgb&dl=pexels-philippe-donn-1133957.jpg&fm=jpg"
  
  },
  {
      "id":3,
      "gender":"famele",
      "name":"mahi",
      "contact":473388,
      "adress":"Bangladesh, chittagong",
      "photoUrl":"https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?cs=srgb&dl=pexels-philippe-donn-1133957.jpg&fm=jpg"
  
  },
  {
      "id":4,
      "gender":"famele",
      "name":"rojina",
      "contact":473388,
      "adress":"Bangladesh, chittagong",
      "photoUrl":"https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?cs=srgb&dl=pexels-philippe-donn-1133957.jpg&fm=jpg"
  
  }
 
];

module.exports.getAllUsers = (req, res) => {
   if(req.query){
      const { limit } = req.query;
      const user = users.slice(0, limit) 
      res.send(user)   
   }else{
    fs.readFile("./userData.json", (err, users) => {
      if (err) {
        res.write("user not found from file");
        res.end();
      } else {
        res.write(users);
        res.end();
      }
    });
   }

    // res.send(users)
};

module.exports.getAUserWithId = (req, res) => {
  const { id } = req.params;
  const userIdFound = users.find(user => user.id === Number(id))
   res.send(userIdFound)
}



module.exports.getRandomUser = (req, res) => {
    const randomUser = Math.floor(Math.random() * users.length)
    res.send(users[randomUser])
};


module.exports.savAUser = (req, res) => {
    users.push(req.body)
    res.send("save")
};


module.exports.updateAUser = (req, res) => {
   const { id } = req.params;
   const newData = users.find(user => user.id === Number(id))
   newData.id = id;
   newData.name = req.body.name;
   newData.contact = req.body.contact;
   newData.adress = req.body.adress;
   newData.gender = req.body.gender;  
   res.send(newData);
}


module.exports.blukUpdated = (req, res) => {
    const { id } = req.body;
    
    // newData.ids = ids 
    // newData.name = req.body.name
    res.send(newData)
}


module.exports.deleteAUser = (req, res) => {
    const { id } = req.params;
    const filter = { _id: id}
     users = users.filter(user => user.id !== Number(id))
    res.send(users)
}