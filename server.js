const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb+srv://soumen:k5Uu4iM5vBDdfvqv@cluster0.c5spa4r.mongodb.net/User_data?retryWrites=true&w=majority');

app.use(express.json());

app.use('/api', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
