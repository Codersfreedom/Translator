import { countryLanguages } from "../data/country_languages.js";

export const getLanguages = async (req,res)=>{

    try {
        res.status(200).json({countryLanguages}); 
        
    } catch (error) {
        console.log("Error in language controller",error.messsage);
    
    }


}