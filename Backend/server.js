import express from 'express';
import data from './data.js';
import mongoose from 'mongoose';
import seedRouter from "./routes/seedRoutes.js";
import Product from "./models/productModel.js"
  ;



mongoose.connect("mongodb+srv://Irapaige:Mb06081959@my-profile.zgj4a.mongodb.net/Amazon?retryWrites=true&w=majority"
).then(()=>{
  console.log('connected to DB');
})
    .catch((err) => {
      console.log(err.message);
    });


const app = express();
app.use('/api/seed',seedRouter)


app.get('/api/products/:id', (req, res) => {
  const product = data.products.find((x) => x._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

app.get('/', (req, res) => {
  res.send('Server is ready');
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});