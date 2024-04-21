import { Button, Flex, Input, Stack, Textarea } from '@chakra-ui/react'
import { VscClearAll } from "react-icons/vsc";
import MenuBtn from '../Inputs/MenuBtn'
import { useRef, useState } from 'react'




const LeftSide = () => {
  const [languages, setLanguages] = useState('')
  const [value, setValue] = useState('');
  const [isSelected, setIsSelected] = useState(true);
  const textRef = useRef();

  const handleSelectLanguage = (e) => {
    const source = e.target.innerText.toLowerCase();
    setLanguages(source)
    console.log(source)

  }

  const handleReset = () => {
    if (!textRef.current.value) return;

    textRef.current.value = '';
    console.log("reset")

  }


  return (

    <Stack width={"50%"} position={"relative"} >
      <Stack direction={"row"} justifyContent={"space-between"} >

        <Stack direction={"row"} spacing={"15px"} >
          <Button onClick={handleSelectLanguage} colorScheme='teal' variant='outline'>
            English
          </Button><Button onClick={handleSelectLanguage} colorScheme='teal' variant='outline'>
            Bengali
          </Button>
        </Stack>


        <Stack>
          <MenuBtn />

        </Stack>

      </Stack>
      <Textarea variant='filled' placeholder="Type url" ref={textRef} onChange={(e) => setValue(e.target.value)} />
      <Flex position={"absolute"} right={2} top={53} cursor={"pointer"}>
      <VscClearAll  onClick={handleReset} /> 

      </Flex>
    </Stack>
  )
}

export default LeftSide
