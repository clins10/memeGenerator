import React, { Component } from 'react'
import { Stack, HStack, Text } from '@chakra-ui/react';

 class Apifetch extends Component {
     constructor(){
         super()
         this.state = {
             loading:false,
             character:{}
         }
     }

     componentDidMount(){
         this.setState({loading:true})
         fetch("https://swapi.dev/api/people/5/")
         .then(response => response.json())
         .then(data=>{
             this.setState({
               loading: false,
               character: data,
             });
             
         })

     }

    



  render() {
      const text = this.state.loading ? 'loading' : this.state.character.name
    return (
    
        <Stack maxW='30%' m='auto' mt='5%'>
            <HStack>
              <Text>  {text}</Text>
            </HStack>
         </Stack>
          
    )
  }
}
export default Apifetch