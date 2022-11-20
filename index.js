const express = require('express')
const app = express();

app.use(express.json());

const plantas = [
    {id: 1, nombre:'Flor de Jamaica', nobre_cientifico:'Hibiscus sabdariffa', imagen:'', tipo_planta:'arbustiva', descripcion:'Es una planta arbustiva de crecimiento anual, que mide aproximadamente 2.5 metros de altura, su tallo es rojo, cilíndrico, liso y suave.'},

];



app.get('/', (req, res)=> {
    res.send('Node JS api');
});



app.get('/api/plantas', (req, res) => {
    res.send(plantas);
});



app.get('/api/plantas/:id', (req, res) => {
    const plantas = plantas.find(c => c.id === parseInt(req.params.id));
    if (!plantas) return res.status(404).send('Planta no Encontrada...');
    else res.send(plantas);
})



app.post('/api/plantas/agregar', (req, res) => {
    const plantas = {
        id: plantas.length + 1,
        nombre: req.body.nombre,
        nombre_cientifico: req.body.nombre_cientifico,
        imagen: req.body.imagen,
        tipo_planta: req.body.tipo_planta,
        descripcion: req.body.descripcion,
    };

    plantas.push(plantas);
    res.send(plantas);
});



app.delete('/api/plantas/delete/:id',(req, res) => {
    const plantas = plantas.find(c => c.id === parseInt(req.params.id));
    if (!plantas) return res.status(404).send('Planta no Encontrada...');

    const index = plantas.indexOf(plantas);
    plantas.splice(index, 1);
    res.send(plantas);
});



const port = process.env.port || 80;
app.listen(port, () => console.log(`Escuchando en puerto ${port}....`));