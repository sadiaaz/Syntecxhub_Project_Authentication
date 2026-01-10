const express = require("express");
const mongoose = require("mongoose");
const User = require("./User"); // Import the file you just showed me!

const app = express();

// This middleware is essential for reading req.body!
app.use(express.json()); 

app.post("/api/users", async (req, res) => {
    try {
        // req.body will now contain { name, email, age }
        const newUser = await User.create(req.body); 
        res.status(201).json(newUser);
    } catch (err) {
        // If 'email' is a duplicate, it will throw an error here
        res.status(500).json({ message: err.message });
    }
});

app.listen(3000, () => console.log("Server running on port 3000"));