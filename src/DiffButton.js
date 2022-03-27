import React from 'react'
import { Stack, HStack, VStack, Button } from "@chakra-ui/react";

const DiffButton = () => {
    
    let handleClick =(e)=>{
        let value = e.target.value
        if(value === 'btn1'){
            alert('you clicked on Button 1')
        }else if(value === 'btn2'){
          alert('you clicked on Button 2')
        }else{
          alert('you clicked on Button 3')
        }


    }




  return (
    <HStack maxW='20px' >
        <Button className="btn1" m='40px' px='30' value ='btn1' onClick={handleClick}>Button 1</Button>
        <Button className="btn2" m='40px' px='30' value ='btn2' onClick={handleClick}>Button 2</Button>
        <Button className="btn3" m='40px' px='30' value ='btn3' onClick={handleClick}>Button 3</Button>
    </HStack>
  )
}

export default DiffButton