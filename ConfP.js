import React from "react";
import { Avatar, HStack, Input, Stack, Center, NativeBaseProvider,FormControl } from "native-base";

const Example = () => {
  return <HStack justifyContent="center" mx={{
    base: "auto",
    md: "0"
  }} space={2}>
     
      <Avatar bg="amber.500" source={{
      uri: "https://bit.ly/broken-link"
    }} size="2xl">
        EH
      </Avatar>
      
      
    </HStack>;
    
};

export default Example;