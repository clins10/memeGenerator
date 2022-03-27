import React from 'react'
import { Stack, HStack, VStack, Button } from '@chakra-ui/react'

const ButtonCapture = () => {
 let handleClick = (e)=>{
     
       alert('clicked!')
 }




  return (
         <Stack maxW='10%' m='auto'>
             <Button m='30px' px='40px' bg='green.300' onClick={handleClick}>clickme</Button>

        </Stack>

    


    
  )
}

export default ButtonCapture