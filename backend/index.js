const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

// Middleware
const corsOptions = {
    origin: 'https://6698c88a7f498163970e6c57--jolly-gingersnap-e764ab.netlify.app',
    credentials: true,
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error("MongoDB connection error:", err));

// User Schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});
const User = mongoose.model('User', userSchema);

// Food Category Schema
const foodCategorySchema = new mongoose.Schema({
    name: { type: String, required: true }
});
const FoodCategory = mongoose.model('FoodCategory', foodCategorySchema);

// Food Item Schema
const foodItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'FoodCategory', required: true },
    price: { type: Number, required: true }
});
const FoodItem = mongoose.model('FoodItem', foodItemSchema);

// Signup Route
app.post('/api/users/signup', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ name, email, password: hashedPassword });
        await user.save();
        res.status(201).json({ message: 'User registered successfully!' });
    } catch (error) {
        console.error("Signup Error:", error);
        res.status(500).json({ message: 'An error occurred. Please try again.', error });
    }
});

// Login Route
app.post('/api/users/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user || !await bcrypt.compare(password, user.password)) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).json({ message: 'An error occurred. Please try again.', error });
    }
});

// Food Categories
app.get('/api/foodcategories', async (req, res) => {
    try {
        const categories = await FoodCategory.find();
        res.status(200).json(categories);
    } catch (error) {
        console.error("Fetch Categories Error:", error);
        res.status(500).json({ message: "Error fetching categories", error });
    }
});

// Food Items
app.get('/api/fooditems', async (req, res) => {
    try {
        const items = await FoodItem.find();
        res.status(200).json(items);
    } catch (error) {
        console.error("Fetch Items Error:", error);
        res.status(500).json({ message: "Error fetching items", error });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
