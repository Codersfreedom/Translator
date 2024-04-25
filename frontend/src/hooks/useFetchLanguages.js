
import usetranslatorStore from "../zustand/store";


const useFetchLanguages = () => {
const {setLanguages} = usetranslatorStore();

    const fetchLanguages = async ()=>{
        try {
            const data = await fetch('http://localhost:3000/api/getLanguages',{
                method:"POST",
            })
            const response = await data.json();
           setLanguages(response.countryLanguages)
            
        } catch (error) {
            console.log(error.message);
        }


    }

  return {fetchLanguages}
}

export default useFetchLanguages
