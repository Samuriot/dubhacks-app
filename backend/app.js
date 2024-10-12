import express from 'express';
import {createClient} from '@supabase/supabase-js';
const app = express();

const supabaseUrl = 'https://zoskndtixzgijhmrxwua.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpvc2tuZHRpeHpnaWpobXJ4d3VhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg3NTk1MjcsImV4cCI6MjA0NDMzNTUyN30.e-eIAuyHi8HFMQJIt74O5ZWWRCl85qBpOEFXv03HZC0'
const supabase = createClient(supabaseUrl, supabaseKey)

app.get('/performer', async (req, res) => {
    const {data, error} = await supabase
        .from('performer')
        .select()
    res.send(data);
});

app.get('/performer/Dabin', async (req, res) => {
    const {data, error} = await supabase
        .from('performer')
        .select()
        .eq('performername', 'Dabin');
    res.send(data);
});

app.get('/performer/:performername', async (req, res) => {
    const {data, error} = await supabase
        .from('performer')
        .select()
        .eq('performername', req.params.performername);
    res.send(data);
});

app.post('/products', async (req, res) => {
    const {error} = await supabase
        .from('products')
        .insert({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
        })
    if (error) {
        res.send(error);
    }
    res.send("created!!");
});

app.put('/products/:id', async (req, res) => {
    const {error} = await supabase
        .from('products')
        .update({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price
        })
        .eq('id', req.params.id)
    if (error) {
        res.send(error);
    }
    res.send("updated!!");
});

app.delete('/products/:id', async (req, res) => {
    const {error} = await supabase
        .from('products')
        .delete()
        .eq('id', req.params.id)
    if (error) {
        res.send(error);
    }
    res.send("deleted!!")

});

app.get('/', (req, res) => {
    res.send("Hello World!");
});

app.listen(3000, () => {
    console.log(`> Ready on http://localhost:3000`);
});