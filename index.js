const express = require("express");
const app = express();
// importing routes files
const userRoutes = require("./routes/users.route");
const todoRoutes = require("./routes/todos.route");
app.use(express.json());
// routes
app.use("/users",userRoutes);
app.use("/todos",todoRoutes);
const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);  
});