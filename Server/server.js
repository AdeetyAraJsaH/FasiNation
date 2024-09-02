import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js'
dotenv.config()
import connectDB from './config/db.js'

const port = process.env.PORT || 5000;
const app = express();
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/api/user', userRoutes)
app.get('/', (req, res) => { res.send('server is running.') });
app.listen(port, () => { console.log(`Server is running on ${port}.`) });