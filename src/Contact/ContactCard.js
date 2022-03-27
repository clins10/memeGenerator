 import React from 'react'
 import { Stack, VStack, HStack, Text, Image} from '@chakra-ui/react';






 const ContactCard = (props) => {

   return (
     <Stack> 
       <VStack>
         <Image src={props.contact.imgUrl}/>
         <Text as="h3"> {props.contact.name}</Text>
         <Text as="h5">{props.contact.phone}</Text>
         <Text as="p"> {props.contact.email}</Text>
       </VStack>
     </Stack>
   );
 }
 
 export default ContactCard