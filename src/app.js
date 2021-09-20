const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();

hbs.registerPartials(path.join(__dirname, 'views/partials'));

app.set('views', './src/views');
app.set('view engine', 'hbs');

app.get('/' , (req, res) =>  {
    //res.send("Strona Działa!");
    res.render('index',{
        pageTitle: 'Strona główna'
    });
});

app.get('/omnie' , (req, res) =>  {
    res.render('omnie',{
        pageTitle: 'Strona o mnie'
    });
});

app.get('/kontakt' , (req, res) =>  {
    res.render('kontakt',{
        pageTitle: 'Strona kontakt'
    });
});

app.get('/czolgi' , (req, res) =>  {
    res.render('czolgi',{
        pageTitle: 'Strona o czołgach'
    });
});

app.get('/samoloty' , (req, res) =>  {
    res.render('samoloty',{
        pageTitle: 'Strona o Samolotach'
    });
});


app.listen(5000, () => {
    console.log("Serwer działa");

});