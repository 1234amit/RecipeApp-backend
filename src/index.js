// import express from 'express'
// import cors from 'cors'
// import mongoose from 'mongoose'
// import { userRouter } from './routes/user.js';

// const app = express()

// app.use(express.json());
// app.use(cors())

// app.use("/auth", userRouter);

// mongoose.connect(
//     "mongodb+srv://cseiubatgoswami:amit1234@recipes.jjfntty.mongodb.net/recipes?retryWrites=true&w=majorit"
// )

// // const db = mongoose.connection
// // db.on('error', console.error.bind(console, 'connection error:'));
// // db.once('open', function() {
// //   console.log("MongoDB database connection established successfully");
// // });

// app.listen(3001, () => console.log("Server started"));


import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import { userRouter } from './routes/user.js';
import { recipesRouter } from './routes/recipes.js';

const app = express()

app.use(express.json());
app.use(cors())

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

mongoose.connect(
    "mongodb+srv://cseiubatgoswami:amit1234@recipes.jjfntty.mongodb.net/recipes?retryWrites=true&w=majority"
)

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("MongoDB database connection established successfully");
});

app.listen(3001, () => console.log("Server started"));
