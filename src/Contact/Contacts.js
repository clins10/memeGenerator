import React from 'react'
import ContactCard from './ContactCard';
import { Box, Button, Center, useColorMode } from "@chakra-ui/react";


const Contacts = () =>{
  const { colorMode, toggleColorMode } = useColorMode();
  //  const contact = {
  //    name: "Mr. Whiskerson",
  //    imgUrl: "http://placekitten.com/300/200",
  //    phone: "(212) 555-1234",
  //    email: "mr.whiskaz@catnap.meow",
  //  };

    return (
      <>
        <Box ml="30px">
          {/* <Center> */}
          <Button
            bg="blue.400"
            color="white"
            mt="20px"
            onClick={toggleColorMode}
          >
            {colorMode === "light" ? "Dark Mode" : "Light Mode"}
          </Button>
          {/* </Center> */}
        </Box>

        <ContactCard
          contact={{
            name: "Mr. Whiskerson",
            imgUrl: "http://placekitten.com/300/200",
            phone: "(212) 555-1234",
            email: "mr.whiskaz@catnap.meow",
          }}
        />
      </>
    );
}




export default Contacts