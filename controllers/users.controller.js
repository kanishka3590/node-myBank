module.exports.getUsers = function (req,res) {
  var users = [
    {name : "James",
    age : 20,
    },
    {name : "Rohn",
    age : 21},
    {name : "Sohn",
    age : 22}
  ]
  res
  .status(200)
  .json(users)
}
