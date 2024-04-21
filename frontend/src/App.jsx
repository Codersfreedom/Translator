import { Stack } from "@chakra-ui/react"

import RightSide from "./components/container/RightSide"
import LeftSide from "./components/container/LeftSide"

function App() {


  return (
    <Stack height={"70vh"} width={"80vw"} direction={"row"} margin={"80px auto"} spacing={"20px"} padding={"5px"}>
      <LeftSide/>
      <RightSide/>
    </Stack>
  )
}

export default App
