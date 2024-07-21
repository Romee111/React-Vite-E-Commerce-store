const express=require('express');
const mongoose=require('mongoose');

// const dotenv = require('dotenv')
const cors = require('cors')

const app=express();


app.use(cors('*'))

const userauthroute=require('./routes/userauthroute');
const productroute=require('./routes/productroute');
const categoryroute=require('./routes/categoryroute');
const subcategoryroute=require('./routes/subcategoryroute');
const orderroute=require('./routes/orderroute');
const addtocartroute=require('./routes/addtocartroute');
const ratingroute=require('./routes/ratingroute');
const reviewroute=require('./routes/reviewroute');
mongoose.connect('mongodb://localhost:27017/FYP(backend)').then(()=>{
    console.log("database connected");
})
// dotenv.config();
app.use(express.json());
app.use('/product',productroute);
app.use('/userauth',userauthroute);
app.use('/category',categoryroute);
app.use('/subcategory',subcategoryroute);
app.use('/order',orderroute);
app.use('/addtocart',addtocartroute);
app.use('/rating',ratingroute);
app.use('/review',reviewroute);

app.listen(process.env.PORT,()=>{
    console.log(`server is running on http://localhost:${process.env.PORT}`);
})