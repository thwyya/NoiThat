const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', require('./routes/auth.routes'));

mongoose.connect(process.env.MONGO_URI)
    .then(() => app.listen(process.env.PORT, () =>
        console.log(`Server running on port ${process.env.PORT}`)
    ))
    .catch(err => console.log(err));
