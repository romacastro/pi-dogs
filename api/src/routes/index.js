const { Router } = require('express');
//const server = require("../app");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
const {Dog, Temperament, temperament_dog} = require("../db");
const  {getAllDogs} = require("../Controllers/Controllers");
const { default: axios } = require('axios');
const { API_KEY } = process.env;
const URL = `http://api.thedogapi.com/v1/breeds?${API_KEY}`;

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/dogs', async (req, res) =>{
    const name = req.query.name
    let totalDogs = await getAllDogs();

    if(name) {
        var dogName = await totalDogs.filter(e=>e.name.toLowerCase().includes(name.toLowerCase()));
        dogName.length ?
        res.status(200).send(dogName):
        res.status(404).send("No hay nada");
    }else{
        res.status(200).send(totalDogs)
    }
})
router.get('/dogs/:raceId', async (req, res, next) => {
    const { raceId } = req.params;
    const allRaces = await getAllDogs();
    if (raceId) {
        let race = await allRaces.filter(el => el.id == raceId);
        race.length ? res.status(200).json(race) : res.status(404).send(`Sorry, we don´t have a race with ${raceId} as ID 🤷‍♀️`);
    }
})
// router.get('/:id', async (req, res) =>{
//     let {id} = req.params;
//     // console.log('SOY EL ID: ',id)
//     if(id){
//         try{
//             const apiResult = await getAllDogs();

//             const result = apiResult.data.find(e => e.id === Number(id));
//             if(result){
//                 return res.send({
//                     id: result.id,
//                     img: result.image.url,
//                     name: result.name,
//                     temperament: result.temperament,
//                     weight: result.weight.metric,
//                     height: result.height.metric,
//                     age: result.life_span
//                 })
//             } 
//             else {
//                 try{
//                     const result = await Dog.findByPk(id , {include: Temperament})
//                     if(result){
//                         return res.send({
//                             id: result.id,
//                             img: result.image.url,
//                             name: result.name,
//                             temperament: result.temperament,
//                             weight: result.weight,
//                             height: result.height,
//                             age: result.life_span
//                         })
//                     }
//                 }
//                 catch(e){
//                     return res.status(404).send(`No dog founded for id ${id}`)
//                 }
//             }
//         }
//         catch(e){
//             res.status(404).send(e)
//         }
//     }else{
//         res.status(404).send(`Error , ${id}`)
//     }
// });

    
router.get('/temperament', async (req,res)=>{
   const temperamentApi = await axios.get(URL);
   const temperament = temperamentApi.data.map(e=>
    e.temperament)
    let mapedTemperaments = temperament.toString().trim().split(/\s*,\s*/); 
    let splitedTemperaments = mapedTemperaments.filter(temp => temp.length > 0);
    splitedTemperaments.forEach(e=>{
        Temperament.findOrCreate({
            where: {name: e}
        })
    });
    const allTemperaments = await Temperament.findAll();
    res.send(allTemperaments);
    
   
});
router.post("/dog", async (req, res) => {
    const {name, weight_min, weight_max ,height_min, height_max, life_span_min, life_span_max, temperament, createdInDb} = req.body;
    let image = req.body.image;
    await (name, weight_min, weight_max, height_min, height_max, life_span_min, life_span_max, temperament, image);
    return res.status(200).json({msg:"Perro creado"});
});



module.exports = router;
