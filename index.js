// 1. Imports (Must be at the top!)
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Import Routes
const expenseRoutes = require('./routes/expenses');

// 2. Initialize App
const app = express();

// 3. Middleware (The settings)
app.use(express.json());
app.use(cors());

// 4. Connect to Database
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("✅ MongoDB Connected Successfully!"))
    .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// 5. Routes (The API links)
app.use('/api/expenses', expenseRoutes);

// Basic test route
app.get('/', (req, res) => {
    res.send("API is running...");
});

// 6. Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));