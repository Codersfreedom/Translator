import { Button, Stack, Textarea } from '@chakra-ui/react'
import { CopyIcon } from '@chakra-ui/icons'
import MenuBtn from '../Inputs/MenuBtn';
import { useState } from 'react';
import usetranslatorStore from '../../zustand/store';
import useShowToast from '../../hooks/useShowToast';



const RightSide = () => {
  const [languages, setLanguages] = useState('')
  const[selectedBtn,setSelectedBtn] = useState(null);
  const {setTarget,TranslatedText,inputText} = usetranslatorStore();
  const {showToast} = useShowToast();

  
  const handleSelectLanguage = (e,buttonId) => {
    if(buttonId === selectedBtn ){
      setSelectedBtn(null);
    }else{
      setSelectedBtn(buttonId);
    }
    const target = e.target.innerText.toLowerCase();
    setLanguages(target)
    setTarget(target);
  }

  const handleCopyText = ()=>{
    if(!TranslatedText){

      showToast("Error","Write something to copy","error"); 
      return;
    } 
    navigator.clipboard.writeText(TranslatedText);
    showToast("Success","Copied to clipboard","success");
  }


  
  return (
    <Stack width={"50%"} position={"relative"} >
      <Stack direction={"row"} justifyContent={"space-between"} >

        <Stack direction={"row"} spacing={"15px"} >

          <Button  onClick={ (e)=> handleSelectLanguage(e,'button1')} colorScheme={selectedBtn ==='button1' ? 'teal': 'gray'} variant='outline'>
            Bengali
          </Button><Button  onClick={ (e) => handleSelectLanguage(e,'button2')} colorScheme={selectedBtn ==='button2' ? 'teal' :'gray'} variant='outline'>
            English
          </Button>


        </Stack>


        <Stack>
          <MenuBtn isRight={true}/>

        </Stack>

      </Stack>
      <Textarea
        value={inputText === "" ?" ":TranslatedText }
        variant='filled'
        isDisabled={true}
        placeholder='Enter Text Here'
        size='md'
      />
      <CopyIcon  onClick={handleCopyText} size={"50px"} _hover={{cursor:"pointer"}} position={"absolute"} right={"5px"} top={'55px'} />
    </Stack>
  )
}

export default RightSide
