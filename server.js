import express from 'express'
import data from './data.js'

const app = express();

app.get('/api/products', (req, res) => {
    res.send(data.products)
});

app.get('/api/slider', (req, res) => {
    res.send(data.sliderItems)

});

app.get('/api/category', (req, res) => {
    res.send(data.category)

});

app.get('/api/products/slug/:slug', (req, res) => {
    const product = data.products.find((x) => x.slug === req.params.slug);
    if(product){
        res.send(product);
    }
    else{
        res.status(404).send({message: 'Product not Found'});
    }

});


const port = process.env.PORT || 5000;
app.listen(port, () =>{
    console.log(`Serve at http://localhost:${port}`);
})