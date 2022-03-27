
import React, { useState, useEffect } from "react";
import { Input, Stack, HStack, VStack, FormLabel, Text } from "@chakra-ui/react";


const MyFruits = () => {
    const [fruits, setFruits] = useState([])
    const list = [
      "Banana", 
      "Apple", 
      "Apple",
     'orange', 
     'mango', 
     'pineapple', 
     'watermelon'];

     const handleFilter = (e) =>{
       let value = e.target.value
       if(value.length){
         let filteredFruits = list.filter((fruits)=>{
           return fruits.toLowerCase().includes(value.toLowerCase())

         })
         setFruits(filteredFruits)
       }else{
         setFruits(list)
       }
     }
     
 useEffect(() => {
   setFruits(list)
 }, [])
 
  return (
    <VStack maxW="30%" m='auto'>
      <FormLabel mt="30px" mb='-20px' color="green.400" fontFamily='new' >
        My Fruits Search
      </FormLabel>
      <br />
      <Input onChange={handleFilter} />
      {/* <input onChange={handleFilter}/> */}
      <Stack>
        {fruits.map((fruit) => {
          return <Text  fontStyle='italic' color='blue.500'> {fruit} </Text>;
        })}
      </Stack>
    </VStack>
  );
}

export default MyFruits