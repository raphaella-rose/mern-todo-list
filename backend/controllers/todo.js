const Todo = require("../models/todo");

const TodoController = {
    create: (req, res) => {
      console.log(req.body)
    }
}

module.exports = TodoController;