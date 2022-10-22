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
  


module.exports.getRandomUser = (req, res) => {
    const randomUser = Math.floor(Math.random() * users.length)
     res.send(users[randomUser])

}