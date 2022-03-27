import React from "react";
import { Stack, HStack, Checkbox, Input, Text } from "@chakra-ui/react";

const TodoItem = () => {

  // const CompletedStyle = {
  // fontStyle: 'italic',
  // color: 'gray',
  // textDecoration:'strikeThrough'
  // }


  return (
    <Stack maxW="30%" m="auto" mt="40px" borderRadius="lg" >
      <HStack>
        <Checkbox defaultUnChecked />
        <Input placeholder="enter to do list" />
      </HStack>
    </Stack>
  );
};

export default TodoItem;
