import { Menu, Box, MenuButton, MenuItem, MenuList, Button } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import usetranslatorStore from '../../zustand/store'
import { useEffect } from 'react';
import useFetchLanguages from '../../hooks/useFetchLanguages';



const MenuBtn = ({ isRight }) => {
    const { fetchLanguages } = useFetchLanguages();
    const { source, target, setSource, setTarget, languages } = usetranslatorStore();



    const handleSelectLanguage = (language) => {
        if (isRight && language) {
            setTarget(language.toLowerCase())
        } else if (!isRight && language) {
            setSource(language.toLowerCase())
        }

    }


    useEffect(() => {
        fetchLanguages();
    }, [])

    return (
        <Box>
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    {isRight ? target ===null ? "language":target.charAt(0).toUpperCase() +target.slice(1)  :source ===null ? "language":source.charAt(0).toUpperCase()+source.slice(1) } 
                </MenuButton>
                <MenuList height={"40vh"} overflowY={"scroll"} >
                    {languages.length > 0 &&
                        languages.map((language, idx) => (
                            <MenuItem onClick={() => handleSelectLanguage(language)} key={idx}>{language}</MenuItem>
                        ))
                    }
                </MenuList>
            </Menu>
        </Box>
    )
}

export default MenuBtn
