import { Button, Flex, Stack, Textarea } from '@chakra-ui/react'
import { VscClearAll } from "react-icons/vsc";
import MenuBtn from '../Inputs/MenuBtn';
import { useEffect, useRef, useState } from 'react';
import useTranslate from '../../hooks/useTranslate';
import usetranslatorStore from '../../zustand/store';
import useShowToast from '../../hooks/useShowToast';




const LeftSide = () => {
  const [selectedBtn, setSelectedBtn] = useState(null);
  const { isLoading, translateText } = useTranslate();
  const { source, target, setSource, inputText, setInput } = usetranslatorStore();
  const textRef = useRef();
  const { showToast } = useShowToast();

  const handleSelectLanguage = (e, buttonId) => {
    if (buttonId === selectedBtn) {
      setSelectedBtn(null);
    } else {
      setSelectedBtn(buttonId);
    }
    const source = e.target.innerText.toLowerCase();
    setSource(source)


  }

  const handleReset = () => {
    if (!textRef.current.value) return;
    setInput('');
    textRef.current.value = '';


  }


  useEffect(() => {

    if (source != null && inputText != "" && target != null) {
     
        translateText(source, inputText, target)

    }
    else if (source === null && target === null && inputText != "") {
      showToast("Error", "Please select any source and target language", "error");
      return;
    }

  }, [inputText])






  return (

    <Stack width={"50%"} position={"relative"} height={"100vh"} >
      <Stack direction={"row"} justifyContent={"space-between"} >

        <Stack direction={"row"} spacing={"15px"} >
          <Button onClick={(e) => handleSelectLanguage(e, "button1")} colorScheme={selectedBtn === 'button1' ? 'teal' : 'gray'} variant='outline'>
            English
          </Button><Button onClick={(e) => handleSelectLanguage(e, "button2")} colorScheme={selectedBtn === 'button2' ? 'teal' : 'gray'} variant='outline'>
            Bengali
          </Button>
        </Stack>


        <Stack>
          <MenuBtn />

        </Stack>

      </Stack>
      <Textarea
        placeholder="Enter text"
        size={"md"}
        ref={textRef}
        onChange={(e) => setInput(e.target.value.toLowerCase())}
        

      />
      <Flex position={"absolute"} right={2} top={53} cursor={"pointer"}>
        <VscClearAll onClick={handleReset} />

      </Flex>
    </Stack>
  )
}

export default LeftSide
