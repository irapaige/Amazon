import express from 'express';
import data from './data.js';
import mongoose from 'mongoose';
import seedRouter from "./routes/seedRoutes.js";
import Product from "./models/productModel.js"
import productRouter from "./routes/productRoutes.js";




mongoose.connect("mongodb+srv://Irapaige:Mb06081959@my-profile.zgj4a.mongodb.net/Amazon?retryWrites=true&w=majority"
).then(()=>{
  console.log('connected to DB');
})
    .catch((err) => {
      console.log(err.message);
    });


const app = express();
app.use('/api/seed',seedRouter);
app.use('/api/products',productRouter)








app.get('/', (req, res) => {
  res.send('Server is ready');
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});