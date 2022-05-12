const axios = require("axios");
const { API_KEY } = process.env;
const { Dog, Temperament } = require("../db");
const URL = `https://api.thedogapi.com/v1/breeds?${API_KEY}`;

const getDb = async () =>{
    return await Dog.findAll({
            include:{
            model:Temperament,
            attributes:["name"],
            through:{
                attributes:[],
            },
        },
    });
};
    const getApi = async () => {
        const ApiUrl = await axios.get(URL)
        
        const apiInfo = await ApiUrl.data.map((e) =>{
          return {
             id: e.id,
             image: e.image.url,
             name: e.name,
             temperament:[e.temperament].join().split(",").map((e) =>e.trim()),
             weight_min: e.weight.metric.split(" -")[0],
             weight_max: e.weight.metric.split("- ")[1],
             height_min: e.height.metric.split(" -")[0],
             height_max: e.height.metric.split("- ")[1],
             life_span_min: e.life_span.split(" -")[0],
             life_span_max: e.life_span.split("- ")[1],
          };

        })
       
        return apiInfo;
    };



    const getAllDogs = async()=> {
        const apiInfo = await getApi();
        const allDb = await getDb();
        const totalDogs = apiInfo.concat(allDb);
        return totalDogs;
    }

    module.exports = {
        getAllDogs,
    };