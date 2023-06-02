import express  from 'express';
import * as url from 'url';
import hbs from 'hbs';
import * as dotenv from 'dotenv';

dotenv.config();

const __filename= url.fileURLToPath(import.meta.url);
const __dirname= url.fileURLToPath(new URL('.', import.meta.url));

const port= process.env.PORT;
const app = express();

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/parcial', function (err) {});

//contenido estatico
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home',{
        nombre: 'Elian',
        titulo: 'Aprendiendo En Node'
    });
});


app.get('/generic', (req, res) => {
    res.render('home',{
        nombre: 'Elian',
        titulo: 'Aprendiendo En Node'
    });
  });

app.get('/elements', (req, res) => {
    res.render('home',{
        nombre: 'Elian',
        titulo: 'Aprendiendo En Node'
    });
});

/*app.get('*', (req, res) => {
    res.sendFile(__dirname +'public/404.html');
});*/


app.listen(port, ()=>{
    console.log(`app listening at http://localhost:${port}`)
})