const express = require('express');
const router = express.Router();

const TodoController = require("../controllers/todo");

router.get("/", TodoController.index);
router.post("/create", TodoController.create);

module.exports = router;