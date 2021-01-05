// Imports
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const AdminBro = require('admin-bro')
const AdminBroMongoose = require('@admin-bro/mongoose')
const AdminBroExpress = require('@admin-bro/express')

const User = require('./models/user.model')
const Question = require('./models/question.model')
const Interaction = require('./models/interaction.model')

// Get environment
require('dotenv').config();

// Create express web app, specify port
const app = express();
const port = process.env.PORT || 5000;

// Necessary specifications for functioning
app.use(cors());
app.use(express.json());

// Connect to DB
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

//Admin Bro
AdminBro.registerAdapter(AdminBroMongoose)
const AdminBroOptions = {
  resources: [User, Question, Interaction],
}
const adminBro = new AdminBro(AdminBroOptions)
const router = AdminBroExpress.buildRouter(adminBro)
app.use(adminBro.options.rootPath, router)

const userRouter = require('./routes/user');
const interactionRouter = require('./routes/interaction');
const questionRouter = require('./routes/question');
app.use('/user', userRouter);
app.use('/interaction', interactionRouter);
app.use('/question', questionRouter);

// Start app
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});