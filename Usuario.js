import React from "react";
import { Avatar, HStack, Center, NativeBaseProvider } from "native-base";

const Example = () => {
  return (
  
  <HStack justifyContent="center" space={2}>
     
      <br></br>
      <Avatar href="MenuInicio.js" bg="green.500" >
        C
      </Avatar>
      <Avatar href="Comida.js" bg="green.500" >
        O
      </Avatar>
      <Avatar href="Comida.js" bg="green.500" >
        M
      </Avatar>
      <Avatar href="Comida.js" bg="green.500" >
        I
      </Avatar>
      <Avatar href="Comida.js" bg="green.500" >
        D
      </Avatar>
      <Avatar href="Comida.js" bg="green.500" >
        A
      </Avatar>
    </HStack>
    
  );
}

export default Example;
