const express = require("express");
const router = express.Router();
 let todos = [
    {id: 1, task:"Learn Node.js" ,completed: false},
    {id: 2, task:"Learn React js" ,completed: false},
    {id: 3, task:"Learn Javascript" ,completed: false}
 ];
 // get all todos
 router.get("/",(req,res)=>{
    res.json(todos);
 });
 // get a single todo
 router.get("/:id",(req,res)=>{
    const todo = todos.find((t)=>t.id === parseInt(req.params.id));
    if(todo){
        res.json(todo);
    }else{
        res.json(404).json({message:"todo not found"});
    }
 });
 // post a new todo
 router.post("/",(req,res)=>{
    let newTodo = {
        id: todos.length +1,
        task:req.body.task,
        completed:req.body.completed || false
    }
    todos.push(newTodo);
    res.status(201).json(newTodo);
 });
 // PUT(Update) a todo by ID
 router.put("/:id",(req,res)=>{
    let todo = todos.find((u)=>u.id === parseInt(req.params.id));
    if(todo){
        res.status(201).json(todo);
    }else{
        res.status(404).json({message:"Todo not found"});
    }
 });
 router.delete("/:id", (req, res) => {
    const todoIndex = todos.findIndex((t) => t.id === parseInt(req.params.id));
    if (todoIndex !== -1) {
      todos.splice(todoIndex, 1);
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Todo not found" });
    }
  });
  module.exports = router;