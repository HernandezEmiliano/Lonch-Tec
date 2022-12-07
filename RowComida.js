import React from "react";
import { HStack, Center, NativeBaseProvider, Image } from "native-base";

function Example() {
  return (
  
  <HStack space={1} justifyContent="center">
    

      <Center h="40" w="20" bg="primary.300" rounded="md" shadow={3}  />
      <Center h="40" w="20" bg="primary.500" rounded="md" shadow={3} />
      <Center h="40" w="20" bg="primary.700" rounded="md" shadow={3} />
      
    </HStack>
  );
}

export default Example;