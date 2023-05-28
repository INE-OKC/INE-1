const express = require('express');
const connectDB = require('./db/connect');
require('dotenv').config();

const userRouter = require('./routes/users');
const authRouter = require('./routes/auth');


const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use('api/v1/users', userRouter);
app.use('api/v1/auth', authRouter);

const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`);
        });
    }
    catch(error) {
        console.log(error);
    }
};

start()
