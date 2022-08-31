const Todo = require("../models/todo");

const TodoController = {
    create: async (req, res) => {
      const todo = new Todo({title: req.body.title, content: req.body.content});
      await todo.save().then(() => res.status(201).json(todo));
    }
}

module.exports = TodoController;