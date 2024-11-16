const express = require("express");
const router = express.Router();
let users = [
  { id: 1, name: "Nitish singh" },
  { id: 2, name: "Pankaj singh" },
  { id: 3, name: "Rahu singh" },
  { id: 4, name: "Mohan singh" },
];

// CURD operation
// get all users
router.get("/", (req, res) => {
  res.json(users);
});
// get a single user by ID
router.get("/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({
      message: "user not found",
    });
  }
});
// Post a new user
router.post("/", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
  };
  users.push(newUser);
  res.status(201).json(newUser);
});
// PUT(Update) a user by ID
router.put("/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (user) {
    user.name = req.body.name;
    res.json(user);
  } else {
    res.status(404).json({ message: "user not found" });
  }
});
// DELETE a user by ID
router.delete("/:id", (req, res) => {
  const userIndex = users.findIndex((u) => u.id === parseInt(req.params.id));
  if (userIndex !== -1) {
    users.splice(userIndex, 1);
    res.status(204).end();
  } else {
    res.status(404).json({ message: "User not found" });
  }
});
module.exports = router;