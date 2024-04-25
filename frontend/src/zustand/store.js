import {create} from "zustand"

const usetranslatorStore = create((set)=>({
    
    source:null,
    target:null,
    TranslatedText:null,
    inputText:"",
    languages:[],
    setSource: (source)=>set({source}),
    setTarget:(target) =>set({target}),
    setText:(TranslatedText) =>set({TranslatedText}),
    setInput:(inputText) =>set({inputText}),
    setLanguages:(languages) =>set({languages}),
    
      
}))

export default usetranslatorStore;