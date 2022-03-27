import React from 'react'
import TodoItem from './TodoItem';
import { Text, HStack, Stack} from '@chakra-ui/react';




const TodoList = () => {

  return (
    <>
    <HStack mt='40px'>
      <Text as="mark" m ='auto' fontStyle='italic' fontSize='25px' color='purple.600' >ToDo List</Text>
    </HStack>
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      </>
    
  );
}

export default TodoList