import React from "react";
import { Button, Divider, Heading, VStack, Stack, Center, NativeBaseProvider } from "native-base";

const Example = () => {
  return (
  <VStack space={4} px={2} w="100%">
      

      {
      /* Ghost */
    }
      <Stack >
        <Button size="sm" variant="ghost" onPress={() => navigation.navigate('Comidas')}>
          COMIDAS
        </Button>
        <br></br>
        <Button size="sm" variant="ghost" colorScheme="secondary" onPress={() => navigation.navigate('Perfil')}>
          BEBIDAS
        </Button>
        <br></br>
        <Button size="sm" variant="ghost" onPress={() => navigation.navigate('Perfil')}>
          POSTRES
        </Button>
       
      </Stack>

    

      

    
    </VStack>
  );
}

   export default Example;