const Todo = require("../models/todo");

const TodoController = {
    index: async (req, res) => {
      console.log("test");
      Todo.find().exec((err, allTodos) => {
        if (err) {
          throw err
        }
        console.log(allTodos)
      })
    },
    create: async (req, res) => {
      const todo = new Todo({title: req.body.title, content: req.body.content});
      await todo.save().then(() => res.status(201).json(todo));
    }
}

module.exports = TodoController;