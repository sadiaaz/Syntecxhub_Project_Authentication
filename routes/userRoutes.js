const express = require("express");
const router = express.Router();
const User = require("../models/User");

/* CREATE USER */
router.post("/users", async (req, res) => {
    try {
        const { name, email, age } = req.body;

        if (!name || !email || !age) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const user = new User({ name, email, age });
        await user.save();

        res.status(201).json({ message: "User created successfully", user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

/* READ ALL USERS */
router.get("/users", async (req, res) => {
    const users = await User.find();
    res.status(200).json(users);
});

/* READ USER BY ID */
router.get("/users/:id", async (req, res) => {
    const user = await User.findById(req.params.id);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
});

/* UPDATE USER */
router.put("/users/:id", async (req, res) => {
    const user = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User updated", user });
});

/* DELETE USER */
router.delete("/users/:id", async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });
});

module.exports = router;
