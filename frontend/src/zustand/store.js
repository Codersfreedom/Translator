import {create} from "zustand"

const usetranslatorStore = create((set)=>({
    
    source:null,
    target:null,
    TranslatedText:null,
    inputText:"",
    setSource: (source)=>set({source}),
    setTarget:(target) =>set({target}),
    setText:(TranslatedText) =>set({TranslatedText}),
    setInput:(inputText) =>set({inputText})
    
      
}))

export default usetranslatorStore;