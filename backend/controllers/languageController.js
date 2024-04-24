import { countryLanguages } from "../data/country_languages.js";

export const getLanguages = async (req,res)=>{

    try {
        res.send(countryLanguages); 
        
    } catch (error) {
        console.log("Error in language controller",error.messsage);
    
    }


}