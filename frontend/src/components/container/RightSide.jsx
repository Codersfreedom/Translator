import { Button, Stack, Textarea } from '@chakra-ui/react'
import { CopyIcon } from '@chakra-ui/icons'
import MenuBtn from '../Inputs/MenuBtn';
import { useState } from 'react';


const RightSide = () => {
  const [languages, setLanguages] = useState('')
  const [value, setValue] = useState();

  const handleSelectLanguage = (e) => {
    const target = e.target.innerText.toLowerCase();
    setLanguages(target)
  }
  
  const handleCopyText = ()=>{
    if(!value) return
    navigator.clipboard.writeText(value);
    console.log("copied")
  }

  return (
    <Stack width={"50%"} position={"relative"} >
      <Stack direction={"row"} justifyContent={"space-between"} >

        <Stack direction={"row"} spacing={"15px"} >

          <Button  onClick={handleSelectLanguage} colorScheme='teal' variant='outline'>
            Bengali
          </Button><Button  onClick={handleSelectLanguage} colorScheme='teal' variant='outline'>
            English
          </Button>


        </Stack>


        <Stack>
          <MenuBtn />

        </Stack>

      </Stack>
      <Textarea
        value={value}
        isDisabled={true}
        placeholder='Enter Text Here'
        size='sm'
      />
      <CopyIcon onClick={handleCopyText} size={"50px"} position={"absolute"} right={"5px"} top={'55px'} />
    </Stack>
  )
}

export default RightSide
