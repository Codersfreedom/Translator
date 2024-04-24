import {useEffect, useState} from "react";
import usetranslatorStore from "../zustand/store";
import useShowToast from "./useShowToast";

const useTranslate = () => {
    const [isLoading,setIsloading] = useState(false);
    const {setText} = usetranslatorStore();
    const {showToast} = useShowToast();

    const translateText = async (source,text,target)=>{
        setIsloading(true);
  
        try {
            if(!text || !source || !target) {
                return ;
            }
            const data = await fetch('http://localhost:3000/api/translate',{
                method:"POST",
                headers:{
    
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({
                    text,source,target
                })
    
                
            })
    
            const response = await data.json();
    
            const translatedText =response.data.responseData.translatedText;
            setText(translatedText);

        } catch (error) {
            showToast("Error","Internal server error",'error');
            console.log(error)
        }finally{
            setIsloading(false);
        }
        
    }
  
    return {isLoading,translateText}
}

export default useTranslate
